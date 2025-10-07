import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/files', label: t('nav.files') },
    { href: '/contact', label: t('nav.contacts') }
  ]
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-6 py-8 flex items-center justify-center">
        <div className="flex items-center justify-between space-x-16">
          {/* Logo à gauche */}
          <img
            src="/images/logo.png"
            alt="afmapex logo"
            className="h-100 w-auto"
          />

          {/* Bloc navigation + sous-titre */}
          <div className="flex flex-col items-start">
            <nav className="hidden md:flex space-x-20 text-base font-semibold uppercase">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    location.pathname === link.href
                      ? "text-black font-bold border-b-2 border-transparent"
                      : "text-[#00A6FF] hover:text-black transition-colors duration-200"
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Slogan en dessous */}
            <span className="mt-10 text-sm font-bold text-black tracking-wide">
              {t('nav.title')}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
