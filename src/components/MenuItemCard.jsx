const MenuItemCard = ({ name, description, price }) => {
  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-4">
          <h3 className="text-lg font-semibold text-[#222222] mb-2">{name}</h3>
          <p className="text-[#666666] text-sm leading-relaxed">{description}</p>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold text-[#C2551F]">₹{price}</span>
        </div>
      </div>
    </div>
  )
}

export default MenuItemCard 