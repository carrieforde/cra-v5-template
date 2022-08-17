import { Palette, light, dark } from "./palette";

export type Theme = {
  borderRadius: string;
  htmlFontSize: number;
  fontSize: (size: number) => string;
  spacing: (size: number) => string;
  palette: Palette;
  zIndex?: Record<string, number>;
  fonts: {
    body: string;
    [x: string]: string;
  };
};

export const baseFontSize = 16;
export const baseSpacingSize = 8;

export function pxToRem(size: number, baseSize: number = baseFontSize) {
  return `${size / baseSize}rem`;
}

export function pxToEm(size: number, parentSize: number) {
  return `${size / parentSize}em`;
}

export function getSpacing(size: number, baseSize: number = baseSpacingSize) {
  return `${size * baseSize}px`;
}

export type CustomThemeArgs = {
  htmlFontSize?: number;
  spacingSize?: number;
  useDarkMode?: boolean;
  darkPalette?: Palette;
};

export const defaultThemeArgs = {
  htmlFontSize: baseFontSize,
  spacingSize: baseSpacingSize,
  useDarkMode: false,
  darkPalette: dark,
};

export function buildCustomTheme(args?: CustomThemeArgs): Theme {
  const { htmlFontSize, spacingSize, useDarkMode, darkPalette } = {
    ...defaultThemeArgs,
    ...args,
  };

  const palette = useDarkMode && darkPalette ? darkPalette : light;

  return {
    borderRadius: "4px",
    htmlFontSize,
    fontSize: (size: number) => pxToRem(size, htmlFontSize),
    spacing: (size: number) => getSpacing(size, spacingSize),
    fonts: {
      body: "'Libre Franklin', sans-serif",
      monospace: "'IBM Plex Mono', monospace",
    },
    palette,
  };
}

export const theme = buildCustomTheme();
