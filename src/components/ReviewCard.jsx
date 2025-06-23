import TiltedCard from './TiltedCard'

const MAX_WORDS = 35

function truncateText(text, maxWords) {
  const words = text.split(' ')
  if (words.length <= maxWords) return text
  return words.slice(0, maxWords).join(' ') + '...'
}

const ReviewCard = ({ review }) => {
  const { reviewerName, rating, reviewText, date } = review

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-white' : 'text-white/40'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  // Create overlay content for the review
  const overlayContent = (
    <div className="w-[350px] h-full bg-gradient-to-br from-[#C2551F] to-[#A8471A] rounded-[15px] p-6 flex flex-col justify-between text-white min-h-[260px] max-h-[260px]">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-white truncate max-w-[70%]">{reviewerName}</h4>
          <div className="flex items-center space-x-1">
            {renderStars(rating)}
          </div>
        </div>
        <p className="text-white/90 text-sm leading-relaxed overflow-hidden text-ellipsis" style={{display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical'}}>
          {truncateText(reviewText, MAX_WORDS)}
        </p>
      </div>
      <p className="text-xs text-white/70 mt-3">{date}</p>
    </div>
  )

  return (
    <div className="h-80 w-[350px] mx-auto">
      <TiltedCard
        imageSrc=""
        altText={`Review by ${reviewerName}`}
        captionText={`${rating}/5 stars - ${reviewerName}`}
        containerHeight="320px"
        containerWidth="100%"
        imageHeight="320px"
        imageWidth="100%"
        scaleOnHover={1.02}
        rotateAmplitude={6}
        showMobileWarning={false}
        showTooltip={false}
        overlayContent={overlayContent}
        displayOverlayContent={true}
      />
    </div>
  )
}

export default ReviewCard 