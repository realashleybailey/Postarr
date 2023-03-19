import { PrismaClient } from "@prisma/client";
import SHA256 from "crypto-js/sha256";
import { errorHandler } from "~~/helpers/errorHandler";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Read body from request
  const { email, password } = await readBody(event);

  // Check if email and password are provided
  if (!email || !password) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Missing email or password",
    });

    return sendError(event, error);
  }

  // Check if user exists
  const [userError, user] = await errorHandler(() => prisma.user.findUnique({ where: { email } }));

  // Handle errors for prisma querie
  if (userError) {
    return sendError(event, userError);
  }

  // Check if user exists
  if (!user) {
    const error = createError({
      statusCode: 400,
      statusMessage: "User does not exist",
    });

    return sendError(event, error);
  }

  // Hash password
  const hashedPassword = SHA256(password);

  // Compare hashed password with user password in database
  if (hashedPassword.toString() !== user.password) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Invalid password",
    });

    return sendError(event, error);
  }

  // Remove password from user object, we cast to any because of typescript complaining
  delete (user as any).password;

  // Return user object
  return { user };
});
