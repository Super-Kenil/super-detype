type LayoutTheme = 'light' | 'dark'

type LayoutState = {
  theme: LayoutTheme
}

type LayoutType = {
  settings: LayoutState
  themeMode: LayoutTheme
  updateTheme: (newTheme: LayoutTheme) => void
  resetSettings: () => void
}

export type { LayoutTheme, LayoutState, LayoutType }
