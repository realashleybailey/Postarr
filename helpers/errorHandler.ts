/* eslint-disable */
export async function errorHandler<T>(
  promiseFn: () => Promise<T>
): Promise<[Error | null, T | null]> {
  try {
    const result = await promiseFn();
    return [null, result];
  } catch (error) {
    return [error, null] as [Error, null];
  }
}
/* eslint-enable */
