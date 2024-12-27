import { createTheme } from "@/components/ui/theme"

export const darkTheme = createTheme({
  card: {
    DEFAULT: "hsl(224 71% 4%)",
    foreground: "hsl(213 31% 91%)",
  },
  popover: {
    DEFAULT: "hsl(224 71% 4%)",
    foreground: "hsl(213 31% 91%)",
  },
  muted: {
    DEFAULT: "hsl(217.2 32.6% 17.5%)",
    foreground: "hsl(215 20.2% 65.1%)",
  },
  accent: {
    DEFAULT: "hsl(217.2 32.6% 17.5%)",
    foreground: "hsl(210 40% 98%)",
  },
  destructive: {
    DEFAULT: "hsl(0 62.8% 30.6%)",
    foreground: "hsl(210 40% 98%)",
  },
  border: "hsl(217.2 32.6% 17.5%)",
  input: "hsl(217.2 32.6% 17.5%)",
  ring: "hsl(212.7 26.8% 83.9%)"
})

