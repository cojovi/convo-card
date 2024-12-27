// Import the createTheme utility from your UI component library
import { createTheme } from "../components/ui/theme";

// Define the dark theme configuration
export const darkTheme = createTheme({
  colors: {
    primary: {
      DEFAULT: "hsl(210 40% 98%)",   // Primary background color
      foreground: "hsl(222.2 47.4% 11.2%)",  // Primary text color
    },
    secondary: {
      DEFAULT: "hsl(217.2 32.6% 17.5%)", // Secondary background color
      foreground: "hsl(210 40% 98%)",    // Secondary text color
    },
    card: {
      DEFAULT: "hsl(224 71% 4%)",    // Card background color
      foreground: "hsl(213 31% 91%)", // Card text color
    },
    background: {
      DEFAULT: "hsl(224 71% 4%)",    // General background color
      foreground: "hsl(213 31% 91%)", // General text color
    },
  },
});
