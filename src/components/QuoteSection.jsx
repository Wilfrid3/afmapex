import React from 'react'
import { useTranslation } from 'react-i18next'

export default function QuoteSection() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      <div className="">
        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/3.png')" }}>
          <div className="h-full flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-right">
                <p className="text-gray-700 text-2xl text-justify ml-auto w-[600px]">"{t('quotes.p1')}"</p>
                <p className="mt-4 text-sm text-black font-semibold">{t('quotes.pl')}</p>
                <p className="text-sm text-black italic ">{t('quotes.pp')}<br />{t('quotes.pd')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/4.png')" }}>
          <div className="h-full flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-right">
                <p className="text-gray-700 text-2xl text-justify ml-auto w-[600px]">"{t('quotes.p2')}"</p>
                <p className="mt-4 text-sm text-black font-semibold">{t('quotes.pm')}</p>
                <p className="text-sm text-black italic ">{t('quotes.ppm')}<br />{t('quotes.pdm')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/5.png')" }}>
          <div className="h-full flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-right">
                <p className="text-gray-700 text-2xl text-justify ml-auto w-[600px]">"{t('quotes.p3')}"</p>
                <p className="mt-4 text-sm text-black font-semibold">{t('quotes.mt')}</p>
                <p className="text-sm text-black italic ">{t('quotes.mtp')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
