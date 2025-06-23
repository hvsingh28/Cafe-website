import { useState } from 'react'
import MenuItemCard from '../components/MenuItemCard'
import { useTranslation } from 'react-i18next'

const MenuPage = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('breakfast')

  const menuData = {
    breakfast: [
      {
        id: 1,
        name: "Full English Breakfast",
        description: "Two eggs, bacon, sausage, baked beans, grilled tomatoes, mushrooms, and toast",
        price: "450"
      },
      {
        id: 2,
        name: "Eggs Benedict",
        description: "Poached eggs on English muffins with hollandaise sauce and ham",
        price: "380"
      },
      {
        id: 3,
        name: "Scottish Porridge",
        description: "Creamy oatmeal served with honey, nuts, and fresh berries",
        price: "220"
      },
      {
        id: 4,
        name: "Scones with Clotted Cream",
        description: "Freshly baked scones served with clotted cream and strawberry jam",
        price: "180"
      }
    ],
    lunch: [
      {
        id: 5,
        name: "Fish and Chips",
        description: "Beer-battered cod with crispy chips and mushy peas",
        price: "520"
      },
      {
        id: 6,
        name: "Chicken Tikka Sandwich",
        description: "Grilled chicken tikka with mint chutney on artisan bread",
        price: "320"
      },
      {
        id: 7,
        name: "Ploughman's Lunch",
        description: "Cheddar cheese, pickled onions, chutney, and crusty bread",
        price: "380"
      },
      {
        id: 8,
        name: "Beef Wellington",
        description: "Tender beef fillet wrapped in puff pastry with mushroom duxelles",
        price: "680"
      }
    ],
    afternoonTea: [
      {
        id: 9,
        name: "Traditional Afternoon Tea",
        description: "Selection of finger sandwiches, scones, and pastries with choice of tea",
        price: "850"
      },
      {
        id: 10,
        name: "Earl Grey Tea",
        description: "Classic Earl Grey with bergamot oil, served with milk or lemon",
        price: "120"
      },
      {
        id: 11,
        name: "Darjeeling Tea",
        description: "Premium Darjeeling tea from the foothills of the Himalayas",
        price: "140"
      },
      {
        id: 12,
        name: "Assam Tea",
        description: "Strong, malty Assam tea perfect with milk and sugar",
        price: "110"
      }
    ],
    dinner: [
      {
        id: 13,
        name: "Roast Beef with Yorkshire Pudding",
        description: "Slow-roasted beef with crispy Yorkshire pudding and gravy",
        price: "720"
      },
      {
        id: 14,
        name: "Shepherd's Pie",
        description: "Ground lamb with vegetables topped with creamy mashed potatoes",
        price: "480"
      },
      {
        id: 15,
        name: "Bangers and Mash",
        description: "Traditional sausages with creamy mashed potatoes and onion gravy",
        price: "420"
      },
      {
        id: 16,
        name: "Sticky Toffee Pudding",
        description: "Warm date pudding with toffee sauce and vanilla ice cream",
        price: "280"
      }
    ]
  }

  const categories = [
    { id: 'breakfast', name: t('breakfast') },
    { id: 'lunch', name: t('lunch') },
    { id: 'afternoonTea', name: t('afternoonTea') },
    { id: 'dinner', name: t('dinner') }
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">
            {t('ourMenu')}
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {t('menuDescription')}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#C2551F] text-white'
                  : 'bg-white text-[#222222] border border-gray-300 hover:bg-[#F5F5F5]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-[#222222] mb-8 text-center">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          
          <div className="space-y-6">
            {menuData[activeCategory].map((item) => (
              <MenuItemCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-[#F5F5F5] rounded-lg p-8">
            <h3 className="text-xl font-semibold text-[#222222] mb-4">
              {t('dietaryRequirements')}
            </h3>
            <p className="text-[#666666] mb-4">
              {t('dietaryDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white px-3 py-1 rounded-full text-[#666666]">
                {t('vegetarianOptions')}
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-[#666666]">
                {t('glutenFreeOptions')}
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-[#666666]">
                {t('nutFreeOptions')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage 