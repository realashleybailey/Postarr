import { PrismaClient } from "@prisma/client";
import crypto from "crypto-js";
import { errorHandler } from "~~/helpers/errorHandler";

export default async function login(prisma: PrismaClient, username: string, password: string) {
  // Check if email and password are provided
  if (!username || !password) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Missing email or password",
    });

    throw error;
  }

  // Check if user exists
  const [userError, user] = await errorHandler(() => prisma.user.findUnique({ where: { username } }));

  // Handle errors for prisma querie
  if (userError) {
    throw userError;
  }

  // Check if user exists
  if (!user) {
    const error = createError({
      statusCode: 400,
      statusMessage: "User does not exist",
    });

    throw error;
  }

  // Hash password
  const hashedPassword = crypto.SHA256(password);

  // Compare hashed password with user password in database
  if (hashedPassword.toString() !== user.password) {
    const error = createError({
      statusCode: 400,
      statusMessage: "Invalid password",
    });

    throw error;
  }

  // Remove password from user object, we cast to any because of typescript complaining
  delete (user as any).password;

  console.log("User logged in", user);

  // Return user object
  return user;
}
