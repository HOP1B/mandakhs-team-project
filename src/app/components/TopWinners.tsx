"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const topWinners = {
  daily: [
    {
      id: 1,
      username: "LuckyShot",
      profit: 12500,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AWP | Dragon Lore",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-yellow-500 to-amber-600",
        },
        {
          name: "Butterfly Knife | Fade",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-purple-500 to-pink-600",
        },
      ],
    },
    {
      id: 2,
      username: "HeadshotPro",
      profit: 8750,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "M4A4 | Howl",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
      ],
    },
    {
      id: 3,
      username: "FragMaster",
      profit: 6200,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AK-47 | Fire Serpent",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Glock-18 | Fade",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-purple-500 to-pink-600",
        },
      ],
    },
    {
      id: 4,
      username: "SniperElite",
      profit: 5800,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AWP | Gungnir",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-blue-500 to-indigo-600",
        },
      ],
    },
    {
      id: 5,
      username: "NinjaDefuser",
      profit: 4500,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "Karambit | Doppler",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-blue-500 to-indigo-600",
        },
      ],
    },
  ],
  weekly: [
    {
      id: 6,
      username: "AceKing",
      profit: 28500,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AWP | Dragon Lore",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-yellow-500 to-amber-600",
        },
        {
          name: "M4A4 | Howl",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
      ],
    },
    {
      id: 7,
      username: "ClutchMaster",
      profit: 22000,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "Butterfly Knife | Fade",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-purple-500 to-pink-600",
        },
        {
          name: "AK-47 | Fire Serpent",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
      ],
    },
    {
      id: 8,
      username: "LuckyShot",
      profit: 18500,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AWP | Gungnir",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-blue-500 to-indigo-600",
        },
      ],
    },
    {
      id: 9,
      username: "FlashBang",
      profit: 15200,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "Karambit | Doppler",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-blue-500 to-indigo-600",
        },
        {
          name: "Desert Eagle | Blaze",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-orange-500 to-red-600",
        },
      ],
    },
    {
      id: 10,
      username: "SmokeScreen",
      profit: 12800,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "M4A1-S | Printstream",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-gray-300 to-gray-500",
        },
      ],
    },
  ],
  monthly: [
    {
      id: 11,
      username: "AceKing",
      profit: 65000,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AWP | Dragon Lore",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-yellow-500 to-amber-600",
        },
        {
          name: "M4A4 | Howl",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Butterfly Knife | Fade",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-purple-500 to-pink-600",
        },
      ],
    },
    {
      id: 12,
      username: "LuckyShot",
      profit: 48000,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AWP | Gungnir",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-blue-500 to-indigo-600",
        },
        {
          name: "AWP | Dragon Lore",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-yellow-500 to-amber-600",
        },
      ],
    },
    {
      id: 13,
      username: "ClutchMaster",
      profit: 42500,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "Butterfly Knife | Fade",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-purple-500 to-pink-600",
        },
        {
          name: "AK-47 | Fire Serpent",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
      ],
    },
    {
      id: 14,
      username: "HeadshotPro",
      profit: 38000,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "M4A4 | Howl",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Desert Eagle | Blaze",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-orange-500 to-red-600",
        },
      ],
    },
    {
      id: 15,
      username: "FragMaster",
      profit: 35200,
      avatar: "/placeholder.svg?height=40&width=40",
      items: [
        {
          name: "AK-47 | Fire Serpent",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-red-500 to-orange-600",
        },
        {
          name: "Glock-18 | Fade",
          image: "/placeholder.svg?height=30&width=30",
          color: "from-purple-500 to-pink-600",
        },
      ],
    },
  ],
};

export const TopWinners = () => {
  const [, setPeriod] = useState("daily");

  return (
    <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 p-4">
      <Tabs defaultValue="daily" onValueChange={setPeriod}>
        <TabsList className="grid grid-cols-3 mb-4 bg-gray-700/50">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        {Object.entries(topWinners).map(([key, winners]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="space-y-3">
              {winners.map((winner, index) => (
                <motion.div
                  key={winner.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                >
                  <div className="flex-shrink-0 mr-3 w-8 text-center">
                    <span
                      className={`font-bold ${
                        index === 0
                          ? "text-yellow-400"
                          : index === 1
                          ? "text-gray-300"
                          : index === 2
                          ? "text-amber-600"
                          : "text-gray-400"
                      }`}
                    >
                      #{index + 1}
                    </span>
                  </div>
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      src={winner.avatar || "/placeholder.svg"}
                      alt={winner.username}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {winner.username}
                    </p>
                    <div className="flex space-x-1 mt-1">
                      {winner.items.map((item, i) => (
                        <div key={i} className="relative">
                          <div
                            className={`absolute inset-0 rounded-md bg-gradient-to-br ${item.color} opacity-20`}
                          ></div>
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={24}
                            height={24}
                            className="relative z-10"
                            title={item.name}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <span className="text-sm font-medium text-green-400">
                      +{winner.profit.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};
