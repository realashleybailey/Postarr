import { PrismaClient } from "@prisma/client";

/* eslint-disable */
export async function errorHandler<T>(promiseFn: () => Promise<T>): Promise<[Error | null, T | null]> {
  try {
    const result = await promiseFn();
    return [null, result];
  } catch (error) {
    return [error, null] as [Error, null];
  }
}

export async function errorHandlerLogin<T>(loginFunction: Function, prisma: PrismaClient, username: string, password: string): Promise<[Error | null, T | null]> {
  try {
    const result: T = await loginFunction(prisma, username, password);
    return [null, result];
  } catch (error) {
    return [error, null] as [Error, null];
  }
}
/* eslint-enable */
