import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher(){
  const { i18n } = useTranslation()
  const toggle = () => {
    const next = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(next)
  }
  return (
    <div className="flex items-center space-x-2">
      <button onClick={toggle} className="px-3 py-1 rounded-md border text-sm">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </button>
    </div>
  )
}
