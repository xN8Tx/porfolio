export type CustomNavigator = Navigator & {
  userLanguage: string;
};

export type CustomWindow = typeof globalThis &
  Window & {
    ym: (code: string, type: string, url: string) => void;
  };

export type LanuageType = "ru" | "en";

export type Loading = "idle" | "loading" | "success" | "error";
