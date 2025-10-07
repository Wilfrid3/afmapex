import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      <div className="">
        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/6.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto text-center text-white">
              <div className="flex flex-row mt-[110px]">
                {/* Colonne 1 */}
                <div className="flex-1 flex items-center justify-center">
                  {/* Ajoute ici le contenu de la première colonne si besoin */}
                </div>
                {/* Colonne 2 */}
                <div className="flex-1">
                  <div className="text-left">
                    <p className="text-4xl  font-bold text-[#00A6FF]">{t('about.context')}</p>
                    <p className="mt-4 text-lg text-justify text-black">{t('about.context1')}</p>
                    <p className="mt-4 text-lg text-justify text-black">{t('about.context2')}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-4xl mt-6 font-bold text-[#00A6FF]">{t('about.interest')}</p>
                    <p className="mt-4 text-lg text-justify text-black">{t('about.interest1')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/7.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-center items-center justify-center">
                <p className="text-4xl mt-[60px] font-bold text-[#00A6FF]">{t('about.goals')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6  max-w-3xl mx-auto">
                {/* Goal 1 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/goal1.png" alt="Goal 1" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-6 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      To support policies in the area of maritime and port development.
                    </p>
                    <hr className="border-t border-white w-12 mt-12" />
                  </div>
                </div>
                {/* Goal 2 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/goal4.png" alt="Goal 2" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-6 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      To promote visibility and development of maritime and port in Africa.
                    </p>
                    <hr className="border-t border-white w-12 mt-12" />
                  </div>
                </div>
                {/* Goal 3 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/goal2.png" alt="Goal 3" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-6 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      To encourage national and international investments in these sectors.
                    </p>
                    <hr className="border-t border-white w-12 mt-8" />
                  </div>
                </div>
                {/* Goal 4 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/goal3.png" alt="Goal 4" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm ">
                      To facilitate meetings and business opportunities for players in the relevant sectors.
                    </p>
                    <hr className="border-t border-white w-12 mt-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/7.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-center items-center justify-center">
                <p className="text-4xl mt-[60px] font-bold text-[#00A6FF]">{t('about.why')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3  max-w-8xl mx-auto">
                {/* Goal 1 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/why1.png" alt="Goal 1" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Economy: It stimulates continental trade through maritime routes, allowing the import and export of goods.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 2 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/why2.png" alt="Goal 2" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Jobs: The maritime sector creates many jobs, both in shipbuilding and in logistics and transport.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 3 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/why3.png" alt="Goal 3" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Resources: It provides access to marine resources, such as fish and underwater minerals, which are essential for many economies.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 4 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/why4.png" alt="Goal 4" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm ">
                      Tourism: Marine activities, such as cruising and diving, enhance tourism and generate revenue.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 3 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/why5.png" alt="Goal 3" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-6 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Sustainability: Maritime development can include sustainable practices, such as marine renewable energy, contributing to the energy transition.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 4 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/why6.png" alt="Goal 4" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm ">
                      Security: Effective maritime management improves the security of waters and coasts, thereby protecting national interests.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/7.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-center items-center justify-center">
                <p className="text-4xl mt-[60px] font-bold text-[#00A6FF]">{t('about.develop')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3  max-w-8xl mx-auto">
                {/* Goal 1 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/develop1.png" alt="Goal 1" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      International Trade: Ports are essential entry and exit points for goods, facilitating global trade.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 2 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/develop2.png" alt="Goal 2" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Economic impact: They generate direct and indirect jobs, stimulating the local and regional economy.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 3 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/develop3.png" alt="Goal 3" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Logistics: Well-equipped ports improve transportation efficiency, reduce shipping costs and increase business competitiveness.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 4 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/develop4.png" alt="Goal 4" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm ">
                      Investment attraction: Modern port facilities attract investors and businesses, promoting economic development.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 3 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/develop5.png" alt="Goal 3" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-6 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm">
                      Sustainability: Port projects incorporating ecological practices minimize environmental impact and promote renewable energies.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
                {/* Goal 4 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <img src="/images/develop6.png" alt="Goal 4" className="w-1/2 object-cover" />
                  <div className="flex flex-col text-left p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-sm ">
                      Maritime security: Ports play a crucial role in the security of maritime trade and national defense.
                    </p>
                    <hr className="border-t border-white w-12 mt-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full md:h-[720px] bg-cover bg-center" style={{ backgroundImage: "url('/images/7.png')" }}>
          <div className="flex flex-col justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="text-center items-center justify-center">
                <p className="text-4xl mt-[60px] font-bold text-[#00A6FF]">{t('about.present')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6  max-w-8xl mx-auto">
                {/* Goal 1 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <div className="flex flex-col text-center justify-center p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-lg">
                      GOVERNMENTS
                    </p>
                  </div>
                  
                  <img src="/images/present1.png" alt="Goal 1" className="w-1/2 object-cover" />
                </div>
                {/* Goal 2 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <div className="flex flex-col text-center justify-center p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-lg">
                      INVESTMENT FUNDS
                    </p>
                  </div>
                  <img src="/images/present2.png" alt="Goal 2" className="w-1/2 object-cover" />
                </div>
                {/* Goal 3 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <div className="flex flex-col text-center justify-center p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-lg">
                      DIRECT AND INDIRECT ACTORS
                    </p>
                  </div>
                  <img src="/images/present3.png" alt="Goal 3" className="w-1/2 object-cover" />
                </div>
                {/* Goal 4 */}
                <div className="flex bg-white shadow-lg overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center p-4 bg-[#008f9c] w-1/2">
                    <p className="text-white text-lg ">
                      DEVELOPMENT PARTNERS
                    </p>
                  </div>
                  <img src="/images/present4.png" alt="Goal 4" className="w-1/2 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
