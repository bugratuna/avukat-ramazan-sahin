'use client'

import type { Theme } from '@/providers/Theme/types'

import React, { createContext, useCallback, use, useState } from 'react'

import canUseDOM from '@/utilities/canUseDOM'

export interface ContextType {
  headerTheme?: Theme | null
  setHeaderTheme: (theme: Theme | null) => void
  hasAdminBar: boolean
  setHasAdminBar: (value: boolean) => void
}

const initialContext: ContextType = {
  headerTheme: undefined,
  setHeaderTheme: () => null,
  hasAdminBar: false,
  setHasAdminBar: () => null,
}

const HeaderThemeContext = createContext(initialContext)

export const HeaderThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerTheme, setThemeState] = useState<Theme | undefined | null>(
    canUseDOM ? (document.documentElement.getAttribute('data-theme') as Theme) : undefined,
  )
  const [hasAdminBar, setHasAdminBar] = useState(false)

  const setHeaderTheme = useCallback((themeToSet: Theme | null) => {
    setThemeState(themeToSet)
  }, [])

  return (
    <HeaderThemeContext value={{ headerTheme, setHeaderTheme, hasAdminBar, setHasAdminBar }}>
      {children}
    </HeaderThemeContext>
  )
}

export const useHeaderTheme = (): ContextType => use(HeaderThemeContext)
