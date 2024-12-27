export interface ThemeConfig {
  colors: {
    primary: {
      DEFAULT: string;
      foreground: string;
    };
    secondary: {
      DEFAULT: string;
      foreground: string;
    };
    card: {
      DEFAULT: string;
      foreground: string;
    };
    background: {
      DEFAULT: string;
      foreground: string;
    };
  };
}

export function createTheme(config: ThemeConfig): ThemeConfig {
  return config;
} 