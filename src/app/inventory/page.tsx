"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Search,
  Filter,
  ArrowUpDown,
  Trash2,
  RefreshCw,
  ArrowUpRight,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  {
    id: 13,
    name: "AK-47 | Asiimov",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "2 months ago",
    value: 190,
    wear: "Field-Tested",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 14,
    name: "M4A4 | Neo-Noir",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "3 months ago",
    value: 170,
    wear: "Minimal Wear",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 15,
    name: "AWP | Asiimov",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "3 months ago",
    value: 200,
    wear: "Field-Tested",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 16,
    name: "AK-47 | Vulcan",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "4 months ago",
    value: 160,
    wear: "Minimal Wear",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 17,
    name: "M4A1-S | Hyper Beast",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "4 months ago",
    value: 150,
    wear: "Field-Tested",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 18,
    name: "AWP | Wildfire",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "rifle",
    obtained: "5 months ago",
    value: 190,
    wear: "Field-Tested",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 19,
    name: "Desert Eagle | Code Red",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "pistol",
    obtained: "5 months ago",
    value: 140,
    wear: "Minimal Wear",
    color: "from-red-500 to-pink-600",
  },
  {
    id: 20,
    name: "USP-S | Neo-Noir",
    image: "/placeholder.svg?height=100&width=100",
    rarity: "epic",
    category: "pistol",
    obtained: "6 months ago",
    value: 130,
    wear: "Factory New",
    color: "from-purple-500 to-pink-600",
  },
];

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("value-desc");
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [selectedWear, setSelectedWear] = useState("all");

  let filteredItems =
    activeTab === "all"
      ? inventoryItems
      : inventoryItems.filter((item) => item.category === activeTab);

  if (searchQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedRarity !== "all") {
    filteredItems = filteredItems.filter(
      (item) => item.rarity === selectedRarity
    );
  }

  if (selectedWear !== "all") {
    filteredItems = filteredItems.filter((item) => item.wear === selectedWear);
  }

  filteredItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "value-desc") return b.value - a.value;
    if (sortBy === "value-asc") return a.value - b.value;
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "newest") return a.obtained.localeCompare(b.obtained);
    return 0;
  });

  const totalValue = inventoryItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5 z-0"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Your Inventory
            </h1>
            <p className="text-gray-400">Manage your skins and items</p>
          </div>

          <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 p-4">
            <div className="flex items-center">
              <div className="mr-4">
                <p className="text-sm text-gray-400">Total Value</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {totalValue.toLocaleString()} coins
                </p>
              </div>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90">
                <DollarSign className="mr-2 h-4 w-4" />
                Withdraw
              </Button>
            </div>
          </Card>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search items..."
                className="pl-10 bg-gray-700/50 border-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-gray-700/50 border-gray-600">
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="value-desc">Price: High to Low</SelectItem>
                  <SelectItem value="value-asc">Price: Low to High</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRarity} onValueChange={setSelectedRarity}>
                <SelectTrigger className="w-[150px] bg-gray-700/50 border-gray-600">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Rarity" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="legendary">Legendary</SelectItem>
                  <SelectItem value="epic">Epic</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedWear} onValueChange={setSelectedWear}>
                <SelectTrigger className="w-[180px] bg-gray-700/50 border-gray-600">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Wear" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Wear Levels</SelectItem>
                  <SelectItem value="Factory New">Factory New</SelectItem>
                  <SelectItem value="Minimal Wear">Minimal Wear</SelectItem>
                  <SelectItem value="Field-Tested">Field-Tested</SelectItem>
                  <SelectItem value="Well-Worn">Well-Worn</SelectItem>
                  <SelectItem value="Battle-Scarred">Battle-Scarred</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-gray-700/50 mb-6">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="rifle">Rifles</TabsTrigger>
              <TabsTrigger value="pistol">Pistols</TabsTrigger>
              <TabsTrigger value="knife">Knives</TabsTrigger>
              <TabsTrigger value="glove">Gloves</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              {filteredItems.length > 0 ? (
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
                            animate={{
                              opacity: hoveredItem === item.id ? 1 : 0,
                            }}
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-4">
                    No items found matching your filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedRarity("all");
                      setSelectedWear("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
