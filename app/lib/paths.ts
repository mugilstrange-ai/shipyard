/** Public assets are not automatically prefixed by Next.js basePath. */
export const BASE_PATH = "/shipyard" as const;
export function assetPath(path: string): string {
  return BASE_PATH + (path.startsWith("/") ? path : `/${path}`);
}
