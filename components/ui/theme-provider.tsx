import React, { ReactNode } from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

interface ThemeProviderProps {
  children: ReactNode
  theme: any
  defaultTheme: string
}

const ThemeProvider = ({ children, theme, defaultTheme }: ThemeProviderProps) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem={false}>
      {children}
    </NextThemeProvider>
  )
}

export { ThemeProvider } 