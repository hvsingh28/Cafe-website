import { useTranslation } from 'react-i18next'

const VisitUsPage = ({ setCurrentPage }) => {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            {t('visitUs')}
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {t('visitUsDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                {t('findUs')}
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-[#F5F5F5] rounded-lg h-80 mb-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full h-full">
                  <iframe
                    title="Hawa Mahal Location"
                    src="https://www.google.com/maps?q=Hawa+Mahal,+Jaipur,+Rajasthan,+India&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="text-center mt-2">
                  <p className="text-[#666666] font-semibold">Hawa Mahal, Jaipur</p>
                  <p className="text-sm text-[#999999]">Google Maps Preview</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#C2551F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#666666]">{t('fullAddress')}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#C2551F] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#666666]">{t('locationDescription')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            {/* Address Details */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                {t('locationDetails')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#222222] mb-2">{t('address')}</h3>
                  <p className="text-[#666666] leading-relaxed">
                    {t('addressDetails')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#222222] mb-2">{t('landmarks')}</h3>
                  <ul className="space-y-1 text-[#666666]">
                    <li>• {t('hawaMahalDistance')}</li>
                    <li>• {t('cityPalaceDistance')}</li>
                    <li>• {t('jantarMantarDistance')}</li>
                    <li>• {t('amerFortDistance')}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#222222] mb-2">{t('transportation')}</h3>
                  <ul className="space-y-1 text-[#666666]">
                    <li>• {t('autoRickshawInfo')}</li>
                    <li>• {t('taxiInfo')}</li>
                    <li>• {t('busInfo')}</li>
                    <li>• {t('walkingInfo')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                {t('parkingAccessibility')}
              </h3>
              <div className="space-y-3 text-[#666666]">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#C2551F] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('freeParking')}</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#C2551F] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('wheelchairAccessible')}</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#C2551F] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('airConditioned')}</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#C2551F] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('outdoorTerrace')}</span>
                </div>
              </div>
            </div>

            {/* Getting Here */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                {t('gettingHere')}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">{t('fromAirport')}</h4>
                  <p className="text-sm text-[#666666]">{t('airportDirections')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">{t('fromJunction')}</h4>
                  <p className="text-sm text-[#666666]">{t('junctionDirections')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#222222] mb-2">{t('fromBusStand')}</h4>
                  <p className="text-sm text-[#666666]">{t('busStandDirections')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#C2551F] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">{t('readyToVisit')}</h2>
            <p className="text-lg mb-6 opacity-90">
              {t('readyToVisitDescription')}
            </p>
            <button 
              onClick={() => setCurrentPage('reservations')}
              className="bg-white text-[#C2551F] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {t('makeReservation')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitUsPage 