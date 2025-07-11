import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      welcome: 'Welcome to The Silk Cup',
      subtitle: 'British-inspired café culture in the heart of Jaipur',
      menu: 'Menu',
      reservations: 'Reservations',
      about: 'About',
      contact: 'Contact',
      visit: 'Visit Us',
      viewMenu: 'View Menu',
      makeReservation: 'Make a Reservation',
      
      // HomePage
      experienceBritishElegance: 'Experience British Elegance',
      homeDescription: 'At The Silk Cup, we bring the warmth and sophistication of British café culture to Jaipur. From traditional afternoon tea to modern British cuisine, every dish is crafted with care and served in an atmosphere that celebrates both tradition and comfort.',
      traditionalAfternoonTea: 'Traditional Afternoon Tea',
      traditionalAfternoonTeaDesc: 'Experience the quintessential British tradition with our carefully curated tea service.',
      freshLocalIngredients: 'Fresh Local Ingredients',
      freshLocalIngredientsDesc: 'We source the finest local ingredients to create authentic British-inspired dishes.',
      warmHospitality: 'Warm Hospitality',
      warmHospitalityDesc: 'Enjoy our welcoming atmosphere and attentive service that makes every visit special.',
      customerReviews: 'Customer Reviews',
      leaveReview: 'Leave a Review',
      yourName: 'Your Name',
      rating: 'Rating',
      yourReview: 'Your Review',
      enterYourName: 'Enter your name',
      shareExperience: 'Share your experience with us...',
      submitReview: 'Submit Review',
      thankYouReview: 'Thank you for your review!',
      
      // Footer
      aboutUs: 'About Us',
      aboutUsDesc: 'The Silk Cup brings British café culture to Jaipur with authentic flavors and warm hospitality.',
      quickLinks: 'Quick Links',
      connectWithUs: 'Connect With Us',
      craftedWithLove: 'Crafted with ❤️ in Jaipur.',
      allRightsReserved: '© 2024 The Silk Cup. All rights reserved.',
      
      // Menu Page
      ourMenu: 'Our Menu',
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      afternoonTea: 'Afternoon Tea',
      dinner: 'Dinner',
      beverages: 'Beverages',
      desserts: 'Desserts',
      menuDescription: 'Discover our carefully curated selection of British-inspired dishes, from traditional breakfast favorites to elegant afternoon tea service.',
      dietaryRequirements: 'Dietary Requirements',
      dietaryDescription: 'We\'re happy to accommodate dietary requirements and allergies. Please inform our staff when ordering.',
      vegetarianOptions: 'Vegetarian Options Available',
      glutenFreeOptions: 'Gluten-Free Options',
      nutFreeOptions: 'Nut-Free Options',
      
      // Reservation Page
      bookTable: 'Book a Table',
      reservationDesc: 'Reserve your table for an unforgettable dining experience',
      date: 'Date',
      time: 'Time',
      numberOfGuests: 'Number of Guests',
      name: 'Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      specialRequests: 'Special Requests (Optional)',
      bookNow: 'Book Now',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      selectGuests: 'Select Number of Guests',
      enterName: 'Enter your name',
      enterEmail: 'Enter your email',
      enterPhone: 'Enter your phone number',
      enterRequests: 'Any special requests?',
      guest: 'Guest',
      guests: 'Guests',
      reservationSubmitted: 'Reservation submitted successfully! We will contact you shortly.',
      recentReservations: 'Recent Reservations',
      
      // Contact Page
      getInTouch: 'Get in Touch',
      contactDesc: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      sendMessage: 'Send Message',
      message: 'Message',
      enterMessage: 'Enter your message...',
      subject: 'Subject',
      enterSubject: 'Enter subject',
      availableBusinessHours: 'Available during business hours',
      respondWithin24Hours: 'We\'ll respond within 24 hours',
      address: 'Address',
      locatedHeartJaipur: 'Located in the heart of Jaipur',
      socialMediaDesc: 'Follow us on social media for the latest updates, special offers, and behind-the-scenes content.',
      
      // Visit Us Page
      visitUs: 'Visit Us',
      location: 'Location',
      hours: 'Hours',
      directions: 'Directions',
      parking: 'Parking',
      accessibility: 'Accessibility',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      open: 'Open',
      to: 'to',
      visitUsDescription: 'Located in the heart of Jaipur\'s Pink City, The Silk Cup offers a perfect blend of British elegance and Indian hospitality.',
      findUs: 'Find Us',
      interactiveMap: 'Interactive Map',
      googleMapsIntegration: 'Google Maps integration',
      fullAddress: '123 Pink City, Jaipur, Rajasthan 302001',
      locationDescription: 'Near Hawa Mahal, 5 minutes walk from City Palace',
      locationDetails: 'Location Details',
      addressDetails: 'The Silk Cup 123 Pink City Near Hawa Mahal Jaipur, Rajasthan 302001 India',
      landmarks: 'Landmarks',
      hawaMahalDistance: '5 minutes walk from Hawa Mahal',
      cityPalaceDistance: '10 minutes walk from City Palace',
      jantarMantarDistance: '15 minutes walk from Jantar Mantar',
      amerFortDistance: '20 minutes walk from Amer Fort',
      transportation: 'Transportation',
      autoRickshawInfo: 'Auto-rickshaw: Available throughout the city',
      taxiInfo: 'Taxi: Uber and Ola available',
      busInfo: 'Bus: Route 1, 5, and 12 stop nearby',
      walkingInfo: 'Walking: Best way to explore the Pink City',
      parkingAccessibility: 'Parking & Accessibility',
      freeParking: 'Free parking available on-site',
      wheelchairAccessible: 'Wheelchair accessible entrance',
      airConditioned: 'Air-conditioned indoor seating',
      outdoorTerrace: 'Outdoor terrace seating available',
      gettingHere: 'Getting Here',
      fromAirport: 'From Jaipur Airport',
      airportDirections: 'Take a taxi or Uber (30 minutes, ₹400-600)',
      fromJunction: 'From Jaipur Junction',
      junctionDirections: 'Take an auto-rickshaw (15 minutes, ₹100-150)',
      fromBusStand: 'From Bus Stand',
      busStandDirections: 'Take bus route 1 or 5 (20 minutes, ₹20)',
      readyToVisit: 'Ready to Visit?',
      readyToVisitDescription: 'Book your table today and experience the perfect blend of British elegance and Indian hospitality.',
      
      // Review Form
      reviewSubmitted: 'Review submitted!',
    },
  },
  hi: {
    translation: {
      // Navigation
      welcome: 'द सिल्क कप में आपका स्वागत है',
      subtitle: 'जयपुर के दिल में ब्रिटिश-प्रेरित कैफ़े संस्कृति',
      menu: 'मेनू',
      reservations: 'आरक्षण',
      about: 'परिचय',
      contact: 'संपर्क करें',
      visit: 'हमसे मिलें',
      viewMenu: 'मेनू देखें',
      makeReservation: 'आरक्षण करें',
      
      // HomePage
      experienceBritishElegance: 'ब्रिटिश शान का अनुभव करें',
      homeDescription: 'द सिल्क कप में, हम जयपुर में ब्रिटिश कैफ़े संस्कृति की गर्मजोशी और परिष्कार लाते हैं। पारंपरिक दोपहर की चाय से लेकर आधुनिक ब्रिटिश व्यंजनों तक, हर पकवान देखभाल के साथ तैयार किया जाता है और एक ऐसे वातावरण में परोसा जाता है जो परंपरा और आराम दोनों का जश्न मनाता है।',
      traditionalAfternoonTea: 'पारंपरिक दोपहर की चाय',
      traditionalAfternoonTeaDesc: 'हमारी सावधानीपूर्वक तैयार की गई चाय सेवा के साथ क्विंटेसेंशियल ब्रिटिश परंपरा का अनुभव करें।',
      freshLocalIngredients: 'ताज़ा स्थानीय सामग्री',
      freshLocalIngredientsDesc: 'हम प्रामाणिक ब्रिटिश-प्रेरित व्यंजन बनाने के लिए बेहतरीन स्थानीय सामग्री का उपयोग करते हैं।',
      warmHospitality: 'गर्मजोशी मेहमाननवाज़ी',
      warmHospitalityDesc: 'हमारे स्वागत वातावरण और चौकस सेवा का आनंद लें जो हर यात्रा को विशेष बनाती है।',
      customerReviews: 'ग्राहक समीक्षाएं',
      leaveReview: 'समीक्षा लिखें',
      yourName: 'आपका नाम',
      rating: 'रेटिंग',
      yourReview: 'आपकी समीक्षा',
      enterYourName: 'अपना नाम दर्ज करें',
      shareExperience: 'हमारे साथ अपना अनुभव साझा करें...',
      submitReview: 'समीक्षा सबमिट करें',
      thankYouReview: 'आपकी समीक्षा के लिए धन्यवाद!',
      
      // Footer
      aboutUs: 'हमारे बारे में',
      aboutUsDesc: 'द सिल्क कप जयपुर में प्रामाणिक स्वाद और गर्मजोशी मेहमाननवाज़ी के साथ ब्रिटिश कैफ़े संस्कृति लाता है।',
      quickLinks: 'त्वरित लिंक',
      connectWithUs: 'हमसे जुड़ें',
      craftedWithLove: 'जयपुर में ❤️ के साथ बनाया गया।',
      allRightsReserved: '© 2024 द सिल्क कप। सर्वाधिकार सुरक्षित।',
      
      // Menu Page
      ourMenu: 'हमारा मेनू',
      breakfast: 'नाश्ता',
      lunch: 'दोपहर का भोजन',
      afternoonTea: 'दोपहर की चाय',
      dinner: 'रात का भोजन',
      beverages: 'पेय पदार्थ',
      desserts: 'मिठाई',
      menuDescription: 'पारंपरिक नाश्ते के पसंदीदा व्यंजनों से लेकर शानदार दोपहर की चाय सेवा तक, ब्रिटिश-प्रेरित व्यंजनों के हमारे सावधानीपूर्वक चयनित संग्रह की खोज करें।',
      dietaryRequirements: 'आहार संबंधी आवश्यकताएं',
      dietaryDescription: 'हम आहार संबंधी आवश्यकताओं और एलर्जी को समायोजित करने में खुशी महसूस करते हैं। कृपया ऑर्डर करते समय हमारे स्टाफ को सूचित करें।',
      vegetarianOptions: 'शाकाहारी विकल्प उपलब्ध',
      glutenFreeOptions: 'ग्लूटेन-फ्री विकल्प',
      nutFreeOptions: 'नट-फ्री विकल्प',
      
      // Reservation Page
      bookTable: 'टेबल बुक करें',
      reservationDesc: 'एक अविस्मरणीय डाइनिंग अनुभव के लिए अपनी टेबल आरक्षित करें',
      date: 'तारीख',
      time: 'समय',
      numberOfGuests: 'मेहमानों की संख्या',
      name: 'नाम',
      email: 'ईमेल',
      phone: 'फोन (वैकल्पिक)',
      specialRequests: 'विशेष अनुरोध (वैकल्पिक)',
      bookNow: 'अभी बुक करें',
      selectDate: 'तारीख चुनें',
      selectTime: 'समय चुनें',
      selectGuests: 'मेहमानों की संख्या चुनें',
      enterName: 'अपना नाम दर्ज करें',
      enterEmail: 'अपना ईमेल दर्ज करें',
      enterPhone: 'अपना फोन नंबर दर्ज करें',
      enterRequests: 'कोई विशेष अनुरोध?',
      guest: 'गेस्ट',
      guests: 'गेस्ट',
      reservationSubmitted: 'आरक्षण सफलतापूर्वक सबमिट कर दिया गया है! हम जल्द से जल्द आपसे संपर्क करेंगे।',
      recentReservations: 'हाल की आरक्षण',
      
      // Contact Page
      getInTouch: 'संपर्क में आएं',
      contactDesc: 'हम आपसे सुनना चाहेंगे। हमें संदेश भेजें और हम जल्द से जल्द जवाब देंगे।',
      sendMessage: 'संदेश भेजें',
      message: 'संदेश',
      enterMessage: 'अपना संदेश दर्ज करें...',
      subject: 'विषय',
      enterSubject: 'विषय दर्ज करें',
      availableBusinessHours: 'व्यावसायिक घंटों के दौरान उपलब्ध',
      respondWithin24Hours: 'हम 24 घंटों के भीतर जवाब देंगे',
      address: 'पता',
      locatedHeartJaipur: 'जयपुर के दिल में स्थित',
      socialMediaDesc: 'नवीनतम अपडेट, विशेष ऑफर और पर्दे के पीछे की सामग्री के लिए सोशल मीडिया पर हमें फॉलो करें।',
      
      // Visit Us Page
      visitUs: 'हमसे मिलें',
      location: 'स्थान',
      hours: 'समय',
      directions: 'दिशा-निर्देश',
      parking: 'पार्किंग',
      accessibility: 'सुलभता',
      monday: 'सोमवार',
      tuesday: 'मंगलवार',
      wednesday: 'बुधवार',
      thursday: 'गुरुवार',
      friday: 'शुक्रवार',
      saturday: 'शनिवार',
      sunday: 'रविवार',
      closed: 'बंद',
      open: 'खुला',
      to: 'से',
      visitUsDescription: 'जयपुर के पिंक सिटी के दिल में स्थित, द सिल्क कप ब्रिटिश शान और भारतीय मेहमाननवाज़ी का सर्वश्रेष्ठ मिश्रण प्रदान करता है।',
      findUs: 'हमें ढूंढें',
      interactiveMap: 'इंटरैक्टिव मानचित्र',
      googleMapsIntegration: 'Google Maps एकीकरण',
      fullAddress: '123 पिंक सिटी, जयपुर, राजस्थान 302001',
      locationDescription: 'हवा महल के पास, सिटी पैलेस से 5 मिनट की पैदल दूरी',
      locationDetails: 'स्थान विवरण',
      addressDetails: 'द सिल्क कप 123 पिंक सिटी हवा महल के पास जयपुर, राजस्थान 302001 भारत',
      landmarks: 'लैंडमार्क',
      hawaMahalDistance: 'हवा महल से 5 मिनट की पैदल दूरी',
      cityPalaceDistance: 'सिटी पैलेस से 10 मिनट की पैदल दूरी',
      jantarMantarDistance: 'जंतर मंतर से 15 मिनट की पैदल दूरी',
      amerFortDistance: 'आमेर किले से 20 मिनट की पैदल दूरी',
      transportation: 'परिवहन',
      autoRickshawInfo: 'ऑटो-रिक्शा: पूरे शहर में उपलब्ध',
      taxiInfo: 'टैक्सी: Uber और Ola उपलब्ध',
      busInfo: 'बस: रूट 1, 5, और 12 पास में रुकती है',
      walkingInfo: 'पैदल चलना: पिंक सिटी की खोज करने का सर्वश्रेष्ठ तरीका',
      parkingAccessibility: 'पार्किंग और सुलभता',
      freeParking: 'साइट पर निःशुल्क पार्किंग उपलब्ध',
      wheelchairAccessible: 'व्हीलचेयर सुलभ प्रवेश',
      airConditioned: 'एयर-कंडीशन्ड इनडोर बैठने की व्यवस्था',
      outdoorTerrace: 'आउटडोर टेरेस बैठने की व्यवस्था उपलब्ध',
      gettingHere: 'यहां कैसे पहुंचें',
      fromAirport: 'जयपुर हवाई अड्डे से',
      airportDirections: 'टैक्सी या Uber लें (30 मिनट, ₹400-600)',
      fromJunction: 'जयपुर जंक्शन से',
      junctionDirections: 'ऑटो-रिक्शा लें (15 मिनट, ₹100-150)',
      fromBusStand: 'बस स्टैंड से',
      busStandDirections: 'बस रूट 1 या 5 लें (20 मिनट, ₹20)',
      readyToVisit: 'मिलने के लिए तैयार?',
      readyToVisitDescription: 'आज ही अपनी टेबल बुक करें और ब्रिटिश शान और भारतीय मेहमाननवाज़ी के सर्वश्रेष्ठ मिश्रण का अनुभव करें।',
      
      // Review Form
      reviewSubmitted: 'समीक्षा सबमिट की गई!',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 