"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Flame, Zap, Star, Diamond } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cases = [
  {
    id: 1,
    name: "Neon Dreams",
    price: 250,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "legendary",
    items: 7,
    color: "from-cyan-500 to-purple-600",
    icon: Sparkles,
  },
  {
    id: 2,
    name: "Crimson Glory",
    price: 200,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "epic",
    items: 6,
    color: "from-red-500 to-pink-600",
    icon: Flame,
  },
  {
    id: 3,
    name: "Emerald Envy",
    price: 180,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "rare",
    items: 5,
    color: "from-green-500 to-emerald-600",
    icon: Diamond,
  },
  {
    id: 4,
    name: "Azure Aura",
    price: 150,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "epic",
    items: 6,
    color: "from-blue-500 to-indigo-600",
    icon: Zap,
  },
  {
    id: 5,
    name: "Golden Touch",
    price: 300,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "legendary",
    items: 8,
    color: "from-yellow-500 to-amber-600",
    icon: Star,
  },
  {
    id: 6,
    name: "Violet Vision",
    price: 220,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "epic",
    items: 7,
    color: "from-purple-500 to-violet-600",
    icon: Sparkles,
  },
  {
    id: 7,
    name: "Sunset Blaze",
    price: 190,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "rare",
    items: 6,
    color: "from-orange-500 to-red-600",
    icon: Flame,
  },
  {
    id: 8,
    name: "Frost Bite",
    price: 170,
    image: "/placeholder.svg?height=200&width=200",
    rarity: "rare",
    items: 5,
    color: "from-cyan-500 to-blue-600",
    icon: Diamond,
  },
];

export const CaseGrid = () => {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cases.map((caseItem) => (
        <motion.div
          key={caseItem.id}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          onMouseEnter={() => setHoveredCase(caseItem.id)}
          onMouseLeave={() => setHoveredCase(null)}
        >
          <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 overflow-hidden rounded-xl">
            <CardContent className="p-0 relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-20`}
              />
              <div className="pt-6 px-6 pb-2 flex justify-center">
                <div className="relative">
                  <Image
                    src={caseItem.image || "/placeholder.svg"}
                    alt={caseItem.name}
                    width={200}
                    height={200}
                    className="object-contain relative z-10"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredCase === caseItem.id ? 1 : 0,
                      scale: hoveredCase === caseItem.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pointer-events-none flex items-center justify-center"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-30 rounded-full blur-xl`}
                    />
                    <caseItem.icon
                      className={`h-16 w-16 text-white opacity-80 z-10`}
                    />
                  </motion.div>
                </div>
              </div>
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${
                  caseItem.rarity === "legendary"
                    ? "from-yellow-500 to-amber-600 text-yellow-900"
                    : caseItem.rarity === "epic"
                    ? "from-purple-500 to-pink-600 text-purple-900"
                    : "from-blue-500 to-cyan-600 text-blue-900"
                }`}
              >
                {caseItem.rarity.toUpperCase()}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-6 pt-2 relative z-10">
              <h3 className="font-bold text-lg">{caseItem.name}</h3>
              <div className="flex justify-between w-full items-center mt-2">
                <span className="text-yellow-400 font-medium">
                  {caseItem.price} coins
                </span>
                <span className="text-sm text-gray-400">
                  {caseItem.items} items
                </span>
              </div>
              <Button
                className={`w-full mt-4 bg-gradient-to-r ${caseItem.color} hover:opacity-90 transition-opacity`}
                asChild
              >
                <Link href={`/cases/${caseItem.id}`}>Open Case</Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
