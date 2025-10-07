import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()
  return (
    <>
      <section id="home" className="relative">
        <div className='items-center justify-center flex flex-col'>
          <p className="mt-2 text-[#00A6FF] text-center text-2xl font-bold">
            {t('hero.title1')} <br /> {t('hero.title2')}
          </p>
          <p className="mt-2 text-black text-center text-2xl font-bold tracking-wide">
            {t('hero.subtitle1')}
          </p>
        </div>
        <div className="h-96 md:h-[520px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
          {/* <div className="bg-black/40 h-full flex flex-col justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-sm font-bold tracking-wider uppercase">{t('hero.location')}</h2>
            <h1 className="text-2xl md:text-5xl font-extrabold mt-3">{t('hero.title')}</h1>
            <p className="mt-4 text-lg md:text-xl">{t('hero.date')}</p>
            <p className="mt-2 italic bg-blue-600 inline-block px-3 py-1 rounded">{t('theme')}</p>
          </div>
        </div> */}
        </div>
      </section>
      <section id="home2" className="relative">
        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/2.png')" }}>
          {/* <div className="bg-black/40 h-full flex flex-col justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-sm font-bold tracking-wider uppercase">{t('hero.location')}</h2>
            <h1 className="text-2xl md:text-5xl font-extrabold mt-3">{t('hero.title')}</h1>
            <p className="mt-4 text-lg md:text-xl">{t('hero.date')}</p>
            <p className="mt-2 italic bg-blue-600 inline-block px-3 py-1 rounded">{t('theme')}</p>
          </div>
        </div> */}
        </div>
      </section>
    </>
  )
}
