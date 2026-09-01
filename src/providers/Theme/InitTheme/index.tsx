import Script from 'next/script'
import React from 'react'

import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'

export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    // Bilinçli tasarım: sistem koyu tema tercihini otomatik takip etmiyoruz —
    // ziyaretçi ayarını değiştirmediği sürece marka için tasarlanan açık tema
    // gösteriliyor. Kullanıcı sağ alttaki seçiciden bilinçli olarak koyu temayı
    // seçerse o tercih localStorage'da saklanıp bundan sonra kullanılır.
    function themeIsValid(theme) {
      return theme === 'light' || theme === 'dark'
    }

    var themeToSet = '${defaultTheme}'
    var preference = window.localStorage.getItem('${themeLocalStorageKey}')

    if (themeIsValid(preference)) {
      themeToSet = preference
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
