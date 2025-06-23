import { useTranslation } from 'react-i18next'

const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with us for reservations, 
            feedback, or any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#C2551F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#222222] mb-1">Phone</h3>
                    <p className="text-[#666666] mb-2">+91 141 123 4567</p>
                    <p className="text-sm text-[#999999]">Available during business hours</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#C2551F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#222222] mb-1">Email</h3>
                    <p className="text-[#666666] mb-2">hello@thesilkcup.com</p>
                    <p className="text-sm text-[#999999]">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#C2551F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#222222] mb-1">Address</h3>
                    <p className="text-[#666666] mb-2">123 Pink City<br />Jaipur, Rajasthan 302001<br />India</p>
                    <p className="text-sm text-[#999999]">Located in the heart of Jaipur</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#222222] mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-[#666666]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Contact Form */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                Connect With Us
              </h2>
              <p className="text-[#666666] mb-6">
                Follow us on social media for the latest updates, special offers, and behind-the-scenes content.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#C2551F] hover:bg-[#F5F5F5] transition-colors duration-200"
                >
                  <div className="text-center">
                    <svg className="w-8 h-8 text-[#C2551F] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-medium text-[#222222]">Instagram</span>
                  </div>
                </a>
                
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#C2551F] hover:bg-[#F5F5F5] transition-colors duration-200"
                >
                  <div className="text-center">
                    <svg className="w-8 h-8 text-[#C2551F] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-medium text-[#222222]">Facebook</span>
                  </div>
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-[#C2551F] hover:bg-[#F5F5F5] transition-colors duration-200"
                >
                  <div className="text-center">
                    <svg className="w-8 h-8 text-[#C2551F] mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="text-sm font-medium text-[#222222]">Twitter</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#222222] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#222222] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#222222] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C2551F] focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C2551F] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#A8471A] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 