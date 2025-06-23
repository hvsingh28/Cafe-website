import ReservationForm from '../components/ReservationForm'
import { useTranslation } from 'react-i18next'

const ReservationPage = ({ setCurrentPage }) => {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            {t('makeReservation')}
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {t('reservationDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                {t('bookTable')}
              </h2>
              <ReservationForm />
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                {t('hours')}
              </h3>
              <div className="space-y-2 text-[#666666]">
                <div className="flex justify-between">
                  <span>{t('monday')} - {t('friday')}</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('saturday')}</span>
                  <span>9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('sunday')}</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Reservation Policy */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                Reservation Policy
              </h3>
              <ul className="space-y-2 text-[#666666] text-sm">
                <li>• Reservations are held for 15 minutes past the booking time</li>
                <li>• For groups of 8 or more, please call us directly</li>
                <li>• Cancellations must be made 24 hours in advance</li>
                <li>• Special dietary requirements can be accommodated</li>
                <li>• Children's high chairs available upon request</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                Need Help?
              </h3>
              <div className="space-y-3 text-[#666666]">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C2551F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 141 123 4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C2551F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>reservations@thesilkcup.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C2551F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Pink City, Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>

            {/* Special Events */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                Special Events
              </h3>
              <p className="text-[#666666] text-sm mb-4">
                Planning a special celebration? We offer private dining options and 
                can accommodate special requests for birthdays, anniversaries, and 
                corporate events.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-[#C2551F] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#A8471A] transition-colors duration-200 text-sm"
              >
                Contact for Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationPage 