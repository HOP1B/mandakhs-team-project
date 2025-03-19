/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Filter,
  ArrowUpDown,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const SellPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("value-desc");
  const [selectedRarity, setSelectedRarity] = useState("all");
  const [selectedWear, setSelectedWear] = useState("all");

  // const filteredItems =
  //   activeTab === "all"
  //     ? items
  //     : items.filter((item) => item.category === activeTab);

  // if (searchQuery) {
  //   filteredItems = filteredItems.filter((item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // }

  // if (selectedRarity !== "all") {
  //   filteredItems = filteredItems.filter(
  //     (item) => item.rarity === selectedRarity
  //   );
  // }

  // if (selectedWear !== "all") {
  //   filteredItems = filteredItems.filter((item) => item.wear === selectedWear);
  // }

  // filteredItems = [...filteredItems].sort((a, b) => {
  //   if (sortBy === "value-desc") return b.value - a.value;
  //   if (sortBy === "value-asc") return a.value - b.value;
  //   if (sortBy === "name-asc") return a.name.localeCompare(b.name);
  //   if (sortBy === "name-desc") return b.name.localeCompare(a.name);
  //   if (sortBy === "newest") return a.obtained.localeCompare(b.obtained);
  //   return 0;
  // });

  // const totalValue = selectedItems.reduce((sum, id) => {
  //   const item = items.find((item) => item.id === id);
  //   return sum + (item?.value || 0);
  // }, 0);

  // const toggleItemSelection = (id: number) => {
  //   if (selectedItems.includes(id)) {
  //     setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  //   } else {
  //     setSelectedItems([...selectedItems, id]);
  //   }
  // };

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
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Sell Your Items
            </h1>
            <p className="text-gray-400">
              Convert your skins to real money or gift cards
            </p>
          </div>

          {/* {selectedItems.length > 0 && (
            <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 p-4">
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="text-sm text-gray-400">Selected Value</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {totalValue.toLocaleString()} coins
                  </p>
                </div>
                <Button
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90"
                  onClick={() => setSellDialogOpen(true)}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Sell Items ({selectedItems.length})
                </Button>
              </div>
            </Card>
          )} */}
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
              {/* {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        className={`bg-gray-800/80 backdrop-blur-sm overflow-hidden transition-colors cursor-pointer ${
                          selectedItems.includes(item.id)
                            ? "border-green-500"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                        onClick={() => toggleItemSelection(item.id)}
                      >
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
                              {selectedItems.includes(item.id) && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center z-20">
                                  <CheckCircle2 className="h-4 w-4 text-white" />
                                </div>
                              )}
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

                          <div className="absolute top-2 right-2">
                            <Checkbox
                              checked={selectedItems.includes(item.id)}
                              onCheckedChange={() =>
                                toggleItemSelection(item.id)
                              }
                              className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
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
              )} */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
