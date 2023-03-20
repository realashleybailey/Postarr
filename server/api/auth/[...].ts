import { User } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { NuxtAuthHandler } from "#auth";
import login from "~~/server/controller/login";
import { errorHandlerLogin } from "~~/helpers/errorHandler";
import prisma from "~~/server/database/client";

export default NuxtAuthHandler({
  secret: process.env.SECRET || "secret",
  pages: {
    signIn: "/login",
  },
  providers: [
    // @ts-expect-error
    CredentialsProvider.default({
      name: "Credentials",
      authorize: async (credentials: any) => {
        const [error, user] = await errorHandlerLogin<User>(login, prisma, credentials.username, credentials.password);
        if (error) throw error;
        else return user;
      },
    }),
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
