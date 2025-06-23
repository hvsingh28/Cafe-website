import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ReservationForm = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  })
  const [confirmation, setConfirmation] = useState('')
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    // Load reservations from localStorage on mount
    const stored = localStorage.getItem('reservations')
    if (stored) setReservations(JSON.parse(stored))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save reservation to localStorage
    const updated = [...reservations, formData]
    localStorage.setItem('reservations', JSON.stringify(updated))
    setReservations(updated)
    setConfirmation(t('reservationSubmitted'))
    setFormData({
      date: '',
      time: '',
      guests: '',
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    })
    setTimeout(() => setConfirmation(''), 3000)
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[#222222] mb-2">
              {t('date')} *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-[#222222] mb-2">
              {t('time')} *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
            >
              <option value="">{t('selectTime')}</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-[#222222] mb-2">
            {t('numberOfGuests')} *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
          >
            <option value="">{t('selectGuests')}</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? t('guest') : t('guests')}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#222222] mb-2">
            {t('name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
            placeholder={t('enterName')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
            {t('email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
            placeholder={t('enterEmail')}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#222222] mb-2">
            {t('phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
            placeholder={t('enterPhone')}
          />
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-[#222222] mb-2">
            {t('specialRequests')}
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
            placeholder={t('enterRequests')}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#C2551F] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#A8471A] transition-colors duration-200"
        >
          {t('bookNow')}
        </button>
      </form>
      {confirmation && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
          {confirmation}
        </div>
      )}
      {reservations.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold mb-2">{t('recentReservations') || 'Recent Reservations'}</h3>
          <ul className="space-y-2">
            {reservations.slice(-5).reverse().map((r, i) => (
              <li key={i} className="p-2 border rounded text-sm">
                {r.name} - {r.date} {r.time} ({r.guests} {r.guests === '1' ? t('guest') : t('guests')})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ReservationForm 