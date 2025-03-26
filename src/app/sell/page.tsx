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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
