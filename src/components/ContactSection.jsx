import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      <div className="">


        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/7.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto px-6 mt-[60px] text-center text-black">
              <h2 className="text-[80px] font-amsterdam-one font-bold mb-16">{t('contact.join_us')}</h2>
              <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Africa */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      <img src="/images/check.png" alt="check" className="w-8 h-8 mr-2" />
                      <span className="text-4xl font-bold">{t('contact.africa')}</span>
                    </div>
                    <div className="text-xl mt-2 ml-10">
                      <p>+237 621 077 806</p>
                      <p>+237 677 671 777</p>
                      <p>+221 784 700 874</p>
                      <p>+237 699 267 968</p>
                    </div>
                  </div>
                  {/* International */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      <img src="/images/check.png" alt="check" className="w-8 h-8 mr-2" />
                      <span className="text-4xl font-bold">{t('contact.international')}</span>
                    </div>
                    <div className="text-xl mt-2 ml-10">
                      <p>+33 7 49 93 16 66</p>
                      <p>+1 (443) 965-6783</p>
                    </div>
                  </div>
                  {/* Mails */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      <img src="/images/check.png" alt="check" className="w-8 h-8 mr-2" />
                      <span className="text-4xl font-bold">{t('contact.mails')}</span>
                    </div>
                    <div className="text-xl text-left mt-2 ml-10">
                      <p>infos@afmapex.org</p>
                      <p>direction@afmapex.org</p>
                      <p>www.afmapex.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
