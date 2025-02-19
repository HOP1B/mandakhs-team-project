import { useState } from "react"
import Image from "next/image"
import { type Skin, skins } from "@/lib/data"

type UpgradeModalProps = {
  skin: Skin
  balance: number
  onUpgrade: (upgradedSkin: Skin | null) => void
  onClose: () => void
}

export default function UpgradeModal({ skin, onClose }: UpgradeModalProps) {
  const [selectedUpgrade, setSelectedUpgrade] = useState<Skin | null>(null)
  const upgradeCandidates = skins.filter((s) => s.value > skin.value && s.value <= skin.value * 2)

//   const handleUpgrade = () => {
//     if (selectedUpgrade) {
//       const upgradeCost = selectedUpgrade.value - skin.value
//       if (balance >= upgradeCost) {
//         const successChance = (skin.value / selectedUpgrade.value) * 100
//         if (Math.random() * 100 < successChance) {
//           onUpgrade({ ...selectedUpgrade, wear: getWearFromFloat(1 - skin.float), float: skin.float })
//         } else {
//           onUpgrade(null)
//           alert("Upgrade failed! You lost your skin.")
//         }
//       } else {
//         alert("Not enough balance for this upgrade!")
//       }
//     }
//   }

//   const getWearFromFloat = (float: number) => {
//     if (float < 0.07) return "Factory New"
//     if (float < 0.15) return "Minimal Wear"
//     if (float < 0.38) return "Field-Tested"
//     if (float < 0.45) return "Well-Worn"
//     return "Battle-Scarred"
//   }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Upgrade Skin</h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <Image
              src={skin.image || "/placeholder.svg"}
              alt={skin.name}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <p className="text-sm font-bold mt-2">{skin.name}</p>
            <p className="text-xs">${skin.value.toFixed(2)}</p>
          </div>
          <div className="text-3xl">→</div>
          <div>
            {selectedUpgrade ? (
              <>
                <Image
                  src={selectedUpgrade.image || "/placeholder.svg"}
                  alt={selectedUpgrade.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <p className="text-sm font-bold mt-2">{selectedUpgrade.name}</p>
                <p className="text-xs">${selectedUpgrade.value.toFixed(2)}</p>
              </>
            ) : (
              <div className="w-[100px] h-[100px] bg-gray-700 rounded-lg flex items-center justify-center">
                Select a skin
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4 max-h-60 overflow-y-auto">
          {upgradeCandidates.map((upgradeSkin) => (
            <button
              key={upgradeSkin.id}
              onClick={() => setSelectedUpgrade(upgradeSkin)}
              className={`p-2 rounded-lg ${selectedUpgrade === upgradeSkin ? "bg-blue-500" : "bg-gray-700"}`}
            >
              <Image
                src={upgradeSkin.image || "/placeholder.svg"}
                alt={upgradeSkin.name}
                width={50}
                height={50}
                className="rounded-lg mb-1"
              />
              <p className="text-xs truncate">{upgradeSkin.name}</p>
              <p className="text-xs">${upgradeSkin.value.toFixed(2)}</p>
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Cancel
          </button>
          <button
            // onClick={handleUpgrade}
            disabled={!selectedUpgrade}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  )
}

