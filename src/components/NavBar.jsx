import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const NavBar = ({ currentPage, setCurrentPage }) => {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'menu', label: t('menu') },
    { id: 'reservations', label: t('reservations') },
    { id: 'about', label: t('about') },
    { id: 'contact', label: t('contact') },
    { id: 'visit', label: t('visit') }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
  }

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-8 h-8 bg-[#C2551F] rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-[#222222] font-bold text-xl">The Silk Cup</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === link.id
                    ? 'text-[#C2551F] border-b-2 border-[#C2551F]'
                    : 'text-[#666666] hover:text-[#C2551F] hover:border-b-2 hover:border-[#C2551F]'
                }`}
              >
                {link.label}
              </button>
            ))}
            {/* Language Toggle Button */}
            <button
              onClick={handleLanguageChange}
              className="ml-4 px-3 py-1 text-sm font-medium text-[#666666] hover:text-[#C2551F] border border-gray-300 rounded hover:border-[#C2551F] transition-colors duration-200"
            >
              {i18n.language === 'en' ? 'हिन्दी' : 'English'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#222222] hover:text-[#C2551F] focus:outline-none focus:text-[#C2551F]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === link.id
                      ? 'text-[#C2551F] bg-[#F5F5F5]'
                      : 'text-[#666666] hover:text-[#C2551F] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              {/* Language Toggle Button for Mobile */}
              <div className="mt-2">
                <button
                  onClick={handleLanguageChange}
                  className="w-full px-3 py-2 text-sm font-medium text-[#666666] hover:text-[#C2551F] border border-gray-300 rounded hover:border-[#C2551F] transition-colors duration-200"
                >
                  {i18n.language === 'en' ? 'हिन्दी' : 'English'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar 