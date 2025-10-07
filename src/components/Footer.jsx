import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-6 text-center text-sm text-slate-600">
        {t('footer.rights')}
      </div>
    </footer>
  )
}
