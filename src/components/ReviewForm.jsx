import { useState } from 'react'

const ReviewForm = ({ onReviewSubmit }) => {
  const [formData, setFormData] = useState({
    reviewerName: '',
    rating: 5,
    reviewText: ''
  })
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const review = {
      ...formData,
      rating: Number(formData.rating),
      date: new Date().toLocaleDateString()
    }
    // Save to localStorage
    const stored = localStorage.getItem('reviews')
    const reviews = stored ? JSON.parse(stored) : []
    const updated = [...reviews, review]
    localStorage.setItem('reviews', JSON.stringify(updated))
    setConfirmation('Review submitted!')
    setFormData({ reviewerName: '', rating: 5, reviewText: '' })
    if (onReviewSubmit) onReviewSubmit(review)
    setTimeout(() => setConfirmation(''), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mb-8">
      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          type="text"
          name="reviewerName"
          value={formData.reviewerName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Rating *</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded"
        >
          {[5,4,3,2,1].map(num => (
            <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Review *</label>
        <textarea
          name="reviewText"
          value={formData.reviewText}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-[#C2551F] text-white px-4 py-2 rounded hover:bg-[#A8471A]">Submit Review</button>
      {confirmation && <div className="mt-2 p-2 bg-green-100 text-green-800 rounded">{confirmation}</div>}
    </form>
  )
}

export default ReviewForm 