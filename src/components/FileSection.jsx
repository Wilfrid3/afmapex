import React from 'react'
import { useTranslation } from 'react-i18next'

export default function FileSection() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      <div className="">
        

        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/7.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="grid grid-cols-2 gap-8 py-20">
                <div className="flex flex-col items-start space-y-8">
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.afmapex_presentation')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.afmapex_program')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.sponsoring_options')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.participation_packages')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.additional_formulas')}</span>
                </div>
                <div className="flex flex-col items-end space-y-8">
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.samapoa_presentation')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.samapoa_program')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.sponsoring_options_fr')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.participation_packages_fr')}</span>
                  <span className="text-[#26A9E0] text-2xl font-bold">{t('files.additional_formulas_fr')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
