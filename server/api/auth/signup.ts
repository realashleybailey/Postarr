import { PrismaClient } from "@prisma/client";
import SHA256 from "crypto-js/sha256";
import { errorHandler } from "~~/helpers/errorHandler";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Read body from request
  const { name, email, password } = await readBody(event);

  // Check if email and password are provided
  if (!name || !email || !password) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Missing name, email or password",
    });

    return sendError(event, error);
  }

  // Validate email and name
  const nameRegex = /^[A-Z][a-z]*\s?[A-Z][a-z]*?$/;
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!nameRegex.test(name)) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Invalid name",
    });

    return sendError(event, error);
  }

  if (!emailRegex.test(email)) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Invalid email",
    });

    return sendError(event, error);
  }

  // Check if user already exists
  const [userExistsError, userExists] = await errorHandler(() => prisma.user.findUnique({ where: { email } }));

  // Handle errors for prisma queries
  if (userExistsError) {
    return sendError(event, userExistsError);
  }

  // Check if user already exists
  if (userExists) {
    const error = createError({
      statusCode: 400,
      statusMessage: "User already exists",
    });

    return sendError(event, error);
  }

  // Hash password
  const hashedPassword = SHA256(password).toString();

  // Create user
  const [userError, user] = await errorHandler(() =>
    prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
  );

  // Handle errors for prisma queries
  if (userError) {
    return sendError(event, userError);
  }

  // Remove password from user object, we cast to any because of typescript complaining
  delete (user as any).password;

  // Return user object
  return { user };
});
