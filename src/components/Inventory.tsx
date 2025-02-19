import Image from "next/image"
import type { Skin } from "@/lib/data"

type InventoryProps = {
  inventory: Skin[]
  onSellSkin: (skin: Skin) => void
  onUpgradeSkin: (skin: Skin) => void
}

export default function Inventory({ inventory, onSellSkin, onUpgradeSkin }: InventoryProps) {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {inventory.map((skin, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded-lg">
            <Image
              src={skin.image || "/placeholder.svg"}
              alt={skin.name}
              width={100}
              height={100}
              className="rounded-lg mb-2"
            />
            <p className="text-sm font-bold truncate">{skin.name}</p>
            <p className={`text-xs ${skin.rarity}`}>{skin.rarity}</p>
            <p className="text-xs">Value: ${skin.value.toFixed(2)}</p>
            <div className="mt-2 flex justify-between">
              <button
                onClick={() => onSellSkin(skin)}
                className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
              >
                Sell
              </button>
              <button
                onClick={() => onUpgradeSkin(skin)}
                className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
              >
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

