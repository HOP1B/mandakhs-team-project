"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cases, type Skin, type Case } from "@/lib/data"
import CaseSelector from "@/components/CaseSelector"
import Inventory from "@/components/Inventory"
import UpgradeModal from "@/components/UpgradeModal"
import Stats from "@/components/Stats"
import { useAudio } from "@/lib/useAudio"

export default function Home() {
  const [selectedCase, setSelectedCase] = useState<Case>(cases[0])
  const [isOpening, setIsOpening] = useState(false)
  const [result, setResult] = useState<Skin | null>(null)
  const [inventory, setInventory] = useState<Skin[]>([])
  const [balance, setBalance] = useState(1000)
  const [spinnerItems, setSpinnerItems] = useState<Skin[]>([])
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false)
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null)
  const [stats, setStats] = useState({ casesOpened: 0, moneySpent: 0, bestDrop: null as Skin | null })

  const { play: playOpenSound, error: openSoundError } = useAudio("/sounds/case_open.mp3")
  const { play: playResultSound, error: resultSoundError } = useAudio("/sounds/item_reveal.mp3")

  useEffect(() => {
    const lastBonusDate = localStorage.getItem("lastBonusDate")
    const today = new Date().toDateString()
    if (lastBonusDate !== today) {
      setBalance((prev) => prev + 100)
      localStorage.setItem("lastBonusDate", today)
      alert("You received a daily bonus of $100!")
    }
  }, [])

  useEffect(() => {
    if (isOpening) {
      const items = []
      for (let i = 0; i < 50; i++) {
        items.push(getRandomSkin())
      }
      setSpinnerItems(items)
    }
  }, [isOpening])

  const getRandomSkin = () => {
    const rand = Math.random() * 100
    let cumulative = 0
    for (const skin of selectedCase.skins) {
      cumulative += skin.dropRate
      if (rand < cumulative) {
        return { ...skin, wear: getWearFromFloat(1 - Math.random()), float: 1 - Math.random() }
      }
    }
    return {
      ...selectedCase.skins[selectedCase.skins.length - 1],
      wear: getWearFromFloat(1 - Math.random()),
      float: 1 - Math.random(),
    }
  }

  const getWearFromFloat = (float: number) => {
    if (float < 0.07) return "Factory New"
    if (float < 0.15) return "Minimal Wear"
    if (float < 0.38) return "Field-Tested"
    if (float < 0.45) return "Well-Worn"
    return "Battle-Scarred"
  }

  // const getRandomWear = () => {
  //   const wears = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"]
  //   return wears[Math.floor(Math.random() * wears.length)]
  // }

  const openCase = () => {
    if (balance < selectedCase.price) {
      alert("Not enough balance to open this case!")
      return
    }

    setIsOpening(true)
    setResult(null)
    setBalance(balance - selectedCase.price)
    playOpenSound()
    if (openSoundError) {
      console.warn("Couldn't play open sound:", openSoundError)
    }

    setTimeout(() => {
      const newSkin = getRandomSkin()
      setResult(newSkin)
      setInventory([...inventory, newSkin])
      setIsOpening(false)
      playResultSound()
      if (resultSoundError) {
        console.warn("Couldn't play result sound:", resultSoundError)
      }
      updateStats(newSkin)
    }, 5000)
  }

  const updateStats = (newSkin: Skin) => {
    setStats((prev) => ({
      casesOpened: prev.casesOpened + 1,
      moneySpent: prev.moneySpent + selectedCase.price,
      bestDrop: !prev.bestDrop || newSkin.value > prev.bestDrop.value ? newSkin : prev.bestDrop,
    }))
  }

  const handleSellSkin = (skin: Skin) => {
    setBalance((prev) => prev + skin.value)
    setInventory((prev) => prev.filter((s) => s !== skin))
  }

  const handleUpgradeSkin = (skin: Skin) => {
    setSelectedSkin(skin)
    setIsUpgradeModalOpen(true)
  }

  const handleUpgradeComplete = (upgradedSkin: Skin | null) => {
    if (upgradedSkin) {
      setInventory((prev) => [...prev.filter((s) => s !== selectedSkin), upgradedSkin])
      setBalance((prev) => prev - (upgradedSkin.value - (selectedSkin?.value || 0)))
    }
    setIsUpgradeModalOpen(false)
    setSelectedSkin(null)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">CS:GO Case Opener</h1>
      <div className="mb-4 text-xl">Balance: ${balance.toFixed(2)}</div>
      <CaseSelector cases={cases} selectedCase={selectedCase} onSelectCase={setSelectedCase} />
      <div className="relative w-full h-32 mb-8 overflow-hidden">
        <div
          className={`flex transition-transform duration-5000 ease-in-out ${isOpening ? "transform -translate-x-[calc(100%-200px)]" : ""}`}
        >
          {spinnerItems.map((skin, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-32 p-2">
              <Image
                src={skin.image || "/placeholder.svg"}
                alt={skin.name}
                width={112}
                height={112}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-yellow-500 transform -translate-x-1/2"></div>
      </div>
      <button
        onClick={openCase}
        disabled={isOpening || balance < selectedCase.price}
        className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isOpening ? "Opening..." : `Open Case ($${selectedCase.price})`}
      </button>
      {result && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">You got:</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src={result.image || "/placeholder.svg"}
              alt={result.name}
              width={300}
              height={150}
              className="rounded-lg mb-4"
            />
            <p className="text-xl font-bold">{result.name}</p>
            <p className={`text-lg ${result.rarity}`}>{result.rarity}</p>
            {/* <p className="text-md">
              {result.wear} (Float: {(1 - result.float).toFixed(4)})
            </p> */}
            <p className="text-md">Value: ${result.value.toFixed(2)}</p>
          </div>
        </div>
      )}
      <Inventory inventory={inventory} onSellSkin={handleSellSkin} onUpgradeSkin={handleUpgradeSkin} />
      <Stats stats={stats} />
      {isUpgradeModalOpen && selectedSkin && (
        <UpgradeModal
          skin={selectedSkin}
          balance={balance}
          onUpgrade={handleUpgradeComplete}
          onClose={() => setIsUpgradeModalOpen(false)}
        />
      )}
    </main>
  )
}

