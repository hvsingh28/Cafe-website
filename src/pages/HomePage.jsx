import { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import heroImage from '../assets/bg.jpg'
import { useTranslation } from 'react-i18next'
import BlurText from '../components/BlurText'
import ScrollReveal from '../components/ScrollReveal'
import { TiltedButton } from '../components/TiltedCard'

const HomePage = ({ setCurrentPage }) => {
  const { t } = useTranslation()

  // Default reviews (for first load)
  const defaultReviews = [
    {
      reviewerName: "Sarah Johnson",
      rating: 5,
      reviewText: "Absolutely delightful experience! The afternoon tea was perfect and the service was impeccable. The British-inspired atmosphere made me feel like I was in London.",
      date: "December 15, 2024"
    },
    {
      reviewerName: "Rajesh Kumar",
      rating: 5,
      reviewText: "The best café in Jaipur! The scones are heavenly and the coffee is perfectly brewed. Great place to relax and enjoy quality food.",
      date: "December 12, 2024"
    },
    {
      reviewerName: "Emma Thompson",
      rating: 4,
      reviewText: "Lovely ambiance and delicious food. The staff is very friendly and the prices are reasonable. Will definitely visit again!",
      date: "December 10, 2024"
    }
  ]

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('reviews')
    if (stored) {
      setReviews(JSON.parse(stored))
    } else {
      setReviews(defaultReviews)
      localStorage.setItem('reviews', JSON.stringify(defaultReviews))
    }
  }, [])

  const handleReviewSubmit = () => {
    const stored = localStorage.getItem('reviews')
    setReviews(stored ? JSON.parse(stored) : [])
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="The Silk Cup Café" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C2551F]/70 via-[#222222]/60 to-[#C2551F]/50"></div>
        {/* Additional Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 text-center text-white px-2 sm:px-4">
          <BlurText
            text={t('welcome')}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            delay={150}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
          />
          <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-xl md:max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center w-full max-w-xl mx-auto">
            <TiltedButton containerHeight="56px" containerWidth="100%">
              <button 
                onClick={() => setCurrentPage('menu')}
                className="bg-[#C2551F] text-white font-semibold px-6 sm:px-8 md:px-10 rounded-lg hover:bg-[#A8471A] transition-colors duration-200 w-full h-14 sm:h-16 flex items-center justify-center whitespace-nowrap text-base sm:text-lg md:text-xl"
                style={{ minWidth: 0 }}
              >
                {t('viewMenu')}
              </button>
            </TiltedButton>
            <TiltedButton containerHeight="56px" containerWidth="100%">
              <button 
                onClick={() => setCurrentPage('reservations')}
                className="bg-white text-[#222222] font-semibold px-6 sm:px-8 md:px-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-300 w-full h-14 sm:h-16 flex items-center justify-center whitespace-nowrap text-base sm:text-lg md:text-xl"
                style={{ minWidth: 0 }}
              >
                {t('makeReservation')}
              </button>
            </TiltedButton>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal containerClassName="mb-6" textClassName="text-[#222222]">
            {t('experienceBritishElegance')}
          </ScrollReveal>
          <ScrollReveal containerClassName="mb-8" textClassName="text-[#666666] text-lg leading-relaxed font-normal">
            {t('homeDescription')}
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C2551F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#222222] mb-2">{t('traditionalAfternoonTea')}</h3>
              <p className="text-[#666666]">{t('traditionalAfternoonTeaDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C2551F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM6 10h7a2 2 0 012 2v3H6v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#222222] mb-2">{t('freshLocalIngredients')}</h3>
              <p className="text-[#666666]">{t('freshLocalIngredientsDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C2551F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#222222] mb-2">{t('warmHospitality')}</h3>
              <p className="text-[#666666]">{t('warmHospitalityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 px-8 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] text-center mb-12">
            {t('customerReviews')}
          </h2>
          
          <div className="relative mb-12 w-full overflow-hidden" style={{height: '350px'}}>
            <div className="flex flex-row gap-8 items-center h-full animate-marquee" style={{width: 'max-content'}}>
              {reviews.concat(reviews).map((review, idx) => (
                <ReviewCard
                  key={idx}
                  review={review}
                />
              ))}
            </div>
          </div>

          {/* Leave a Review Form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#222222] text-center mb-6">
              {t('leaveReview')}
            </h3>
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 