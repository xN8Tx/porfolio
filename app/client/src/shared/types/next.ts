export type UICommonProps = Readonly<{
  size?: "small" | "regular" | "large";
  color?: "light" | "default" | "background";
}>;

export type CustomNavigator = Navigator & {
  userLanguage: string;
};

export type CustomWindow = typeof globalThis &
  Window & {
    ym: (code: string, type: string, url: string) => void;
  };

export type Loading = "idle" | "loading" | "success" | "error";
