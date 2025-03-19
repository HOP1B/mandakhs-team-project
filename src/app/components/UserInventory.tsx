"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Trash2, RefreshCw } from "lucide-react";

const inventoryItems = [
  {
    id: 1,
    name: "AWP | Dragon Lore",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "legendary",
    category: "rifle",
    obtained: "2 hours ago",
    value: 1250,
    wear: "Factory New",
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: 2,
    name: "Butterfly Knife | Fade",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "legendary",
    category: "knife",
    obtained: "1 day ago",
    value: 980,
    wear: "Minimal Wear",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    name: "AK-47 | Fire Serpent",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "3 days ago",
    value: 750,
    wear: "Field-Tested",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 4,
    name: "M4A4 | Howl",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "legendary",
    category: "rifle",
    obtained: "1 week ago",
    value: 1100,
    wear: "Factory New",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 5,
    name: "Glock-18 | Fade",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "pistol",
    obtained: "2 weeks ago",
    value: 320,
    wear: "Factory New",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 6,
    name: "USP-S | Kill Confirmed",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "pistol",
    obtained: "2 weeks ago",
    value: 180,
    wear: "Minimal Wear",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 7,
    name: "Desert Eagle | Blaze",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "pistol",
    obtained: "3 weeks ago",
    value: 210,
    wear: "Factory New",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 8,
    name: "AWP | Gungnir",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "legendary",
    category: "rifle",
    obtained: "1 month ago",
    value: 980,
    wear: "Field-Tested",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 9,
    name: "Karambit | Doppler",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "knife",
    obtained: "1 month ago",
    value: 650,
    wear: "Factory New",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 10,
    name: "M4A1-S | Printstream",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "1 month ago",
    value: 220,
    wear: "Factory New",
    color: "from-gray-300 to-gray-500",
  },
  {
    id: 11,
    name: "P250 | Asiimov",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "rare",
    category: "pistol",
    obtained: "2 months ago",
    value: 45,
    wear: "Minimal Wear",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 12,
    name: "AWP | Neo-Noir",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "2 months ago",
    value: 180,
    wear: "Field-Tested",
    color: "from-purple-500 to-pink-600",
  },
];

export const UserInventory = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems =
    activeTab === "all"
      ? inventoryItems
      : inventoryItems.filter((item) => item.category === activeTab);

  return (
    <div>
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="bg-gray-800/80 backdrop-blur-sm mb-6">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="rifle">Rifles</TabsTrigger>
          <TabsTrigger value="pistol">Pistols</TabsTrigger>
          <TabsTrigger value="knife">Knives</TabsTrigger>
          <TabsTrigger value="glove">Gloves</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 overflow-hidden hover:border-gray-600 transition-colors cursor-pointer group">
                  <CardContent className="p-4 relative">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 rounded-md bg-gradient-to-br ${item.color} opacity-20`}
                        />
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="relative z-10 transition-transform group-hover:scale-110 duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium truncate max-w-[160px]">
                          {item.name}
                        </h3>
                        <div className="flex items-center mt-1 space-x-2">
                          <Badge
                            variant="outline"
                            className={
                              item.rarity === "legendary"
                                ? "border-yellow-500 text-yellow-500"
                                : item.rarity === "epic"
                                ? "border-purple-500 text-purple-500"
                                : item.rarity === "rare"
                                ? "border-blue-500 text-blue-500"
                                : "border-gray-500 text-gray-500"
                            }
                          >
                            {item.rarity}
                          </Badge>
                          <span className="text-xs text-gray-400">
                            {item.wear}
                          </span>
                        </div>
                        <div className="mt-2 text-yellow-400 font-medium">
                          {item.value} coins
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gray-800/90 flex items-center justify-center space-x-3 p-4"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-cyan-500 text-cyan-500 hover:bg-cyan-500/20"
                      >
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                        Upgrade
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-500/20"
                      >
                        <RefreshCw className="mr-1 h-4 w-4" />
                        Trade
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-500 hover:bg-red-500/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
