export type Skin = {
    id: string
    name: string
    rarity: string
    image: string
    dropRate: number
    value: number
    wear?: string
    float?: number
  }
  
  export type Case = {
    id: string
    name: string
    price: number
    image: string
    skins: Skin[]
  }
  
  export const skins: Skin[] = [
    {
      id: "1",
      name: "AK-47 | Asiimov",
      rarity: "text-pink-500",
      image: "/ak47.png?height=150&width=300",
      dropRate: 15.98,
      value: 10.5,
    },
    {
      id: "2",
      name: "M4A4 | Desert-Strike",
      rarity: "text-red-500",
      image: "/desert-strike.png?height=150&width=300",
      dropRate: 3.2,
      value: 25.0,
    },
    {
      id: "3",
      name: "KARAMBIT |   BLUE GEM",
      rarity: "text-red-500",
      image: "/blue gem.png?height=150&width=300",
      dropRate: 0.0000001,
      value: 15000000.0,
    },
    {
      id: "4",
      name: "Glock-18 | Water Elemental",
      rarity: "text-pink-500",
      image: "/water-element.png?height=150&width=300",
      dropRate: 15.98,
      value: 8.75,
    },
    {
      id: "5",
      name: "P90 | Asiimov",
      rarity: "text-pink-500",
      image: "/p90 asiimov.png?height=150&width=300",
      dropRate: 15.98,
      value: 12.25,
    },
    {
      id: "6",
      name: "USP-S | Orion",
      rarity: "text-purple-500",
      image: "/orion.png?height=150&width=300",
      dropRate: 31.83,
      value: 5.5,
    },
    {
      id: "7",
      name: "Nova | Antique",
      rarity: "text-purple-500",
      image: "/nova.png?height=150&width=300",
      dropRate: 31.83,
      value: 3.75,
    },
    {
      id: "8",
      name: "P250 | Supernova",
      rarity: "text-blue-500",
      image: "/placeholder.svg?height=150&width=300",
      dropRate: 79.92,
      value: 1.5,
    },
    {
      id: "9",
      name: "MP7 | Urban Hazard",
      rarity: "text-blue-500",
      image: "/placeholder.svg?height=150&width=300",
      dropRate: 79.92,
      value: 1.25,
    },
    {
      id: "10",
      name: "Negev | Desert-Strike",
      rarity: "text-blue-500",
      image: "/placeholder.svg?height=150&width=300",
      dropRate: 79.92,
      value: 1.0,
    },
  ]
  
  export const cases: Case[] = [
    {
      id: "case1",
      name: "Operation Breakout Case",
      price: 2.5,
      image: "/breakout.png?height=100&width=100",
      skins: skins,
    },
    {
      id: "case2",
      name: "Chroma Case",
      price: 3,
      image: "/chroma.png?height=100&width=100",
      skins: skins,
    },
    {
      id: "case3",
      name: "Gamma Case",
      price: 3.5,
      image: "/case gamma.png?height=100&width=100",
      skins: skins,
    },
  ]
  
  