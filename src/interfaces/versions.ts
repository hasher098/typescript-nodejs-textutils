export const VERSIONS = {
  FREE: "free",
  PREMIUM: "premium",
} as const;

export type VersionType = (typeof VERSIONS)[keyof typeof VERSIONS];
