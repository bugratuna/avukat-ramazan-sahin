import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Kontrol paneline hoş geldiniz!</h4>
      </Banner>
      Soldaki menüden Sayfalar, Makaleler, Kategoriler ve Medya bölümlerini düzenleyebilirsiniz.{' '}
      <a href="/" target="_blank">
        Siteyi görüntülemek
      </a>{' '}
      için tıklayın.
    </div>
  )
}

export default BeforeDashboard
