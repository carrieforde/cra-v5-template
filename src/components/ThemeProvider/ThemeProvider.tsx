import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { GlobalStyles } from "components/GlobalStyles";
import { FC, ReactNode } from "react";
import { buildCustomTheme, CustomThemeArgs } from "theme";
import { useDarkMode } from "./useDarkMode";

export type ThemeProviderProps = {
  children: ReactNode;
} & Omit<CustomThemeArgs, "useDarkMode">;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  htmlFontSize,
  spacingSize,
  darkPalette,
}) => {
  const isDark = useDarkMode();
  const theme = buildCustomTheme({
    useDarkMode: isDark,
    htmlFontSize,
    spacingSize,
    darkPalette,
  });

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </EmotionThemeProvider>
  );
};
