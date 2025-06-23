import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ReservationPage from './pages/ReservationPage'
import ContactPage from './pages/ContactPage'
import VisitUsPage from './pages/VisitUsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'menu':
        return <MenuPage />
      case 'reservations':
        return <ReservationPage setCurrentPage={setCurrentPage} />
      case 'about':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'contact':
        return <ContactPage />
      case 'visit':
        return <VisitUsPage setCurrentPage={setCurrentPage} />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
