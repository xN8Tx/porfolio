import type { Preview } from "@storybook/react";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import defaultMessages from "../messages/en.json";

import "../src/styles/index.scss";
import "./global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <NextIntlClientProvider
          locale="en"
          messages={defaultMessages}
          // ... potentially other config
        >
          <ThemeProvider forcedTheme={context.globals.theme as string}>
            <Story />
          </ThemeProvider>
        </NextIntlClientProvider>
      );
    },
  ],
};

export default preview;
