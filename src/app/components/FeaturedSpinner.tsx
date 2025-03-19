/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const spinnerItems = [
  {
    id: nanoid(),
    name: "AWP | Dragon Lore",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "legendary",
    color: "from-yellow-500 to-amber-600",
    value: 1250,
  },
  {
    id: nanoid(),
    name: "M4A4 | Howl",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "legendary",
    color: "from-red-500 to-orange-600",
    value: 1100,
  },
  {
    id: nanoid(),
    name: "AK-47 | Fire Serpent",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-red-500 to-orange-600",
    value: 750,
  },
  {
    id: nanoid(),
    name: "AWP | Gungnir",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "legendary",
    color: "from-blue-500 to-indigo-600",
    value: 980,
  },
  {
    id: nanoid(),
    name: "Butterfly Knife | Fade",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "legendary",
    color: "from-purple-500 to-pink-600",
    value: 980,
  },
  {
    id: nanoid(),
    name: "Karambit | Doppler",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-blue-500 to-indigo-600",
    value: 650,
  },
  {
    id: nanoid(),
    name: "Glock-18 | Fade",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-purple-500 to-pink-600",
    value: 320,
  },
  {
    id: nanoid(),
    name: "USP-S | Kill Confirmed",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-red-500 to-orange-600",
    value: 180,
  },
  {
    id: nanoid(),
    name: "Desert Eagle | Blaze",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-orange-500 to-red-600",
    value: 210,
  },
  {
    id: nanoid(),
    name: "M4A1-S | Printstream",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-gray-300 to-gray-500",
    value: 220,
  },
  {
    id: nanoid(),
    name: "AWP | Neo-Noir",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-purple-500 to-pink-600",
    value: 180,
  },
  {
    id: nanoid(),
    name: "AK-47 | Asiimov",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-orange-500 to-red-600",
    value: 190,
  },
  {
    id: nanoid(),
    name: "M4A4 | Neo-Noir",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-purple-500 to-pink-600",
    value: 170,
  },
  {
    id: nanoid(),
    name: "AWP | Asiimov",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-orange-500 to-red-600",
    value: 200,
  },
  {
    id: nanoid(),
    name: "P250 | Asiimov",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "rare",
    color: "from-orange-500 to-red-600",
    value: 45,
  },
  {
    id: nanoid(),
    name: "AK-47 | Vulcan",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-blue-500 to-cyan-600",
    value: 160,
  },
  {
    id: nanoid(),
    name: "M4A1-S | Hyper Beast",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-purple-500 to-pink-600",
    value: 150,
  },
  {
    id: nanoid(),
    name: "AWP | Wildfire",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-orange-500 to-red-600",
    value: 190,
  },
  {
    id: nanoid(),
    name: "Desert Eagle | Code Red",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-red-500 to-pink-600",
    value: 140,
  },
  {
    id: nanoid(),
    name: "USP-S | Neo-Noir",
    image: "/placeholder.svg?height=80&width=80",
    rarity: "epic",
    color: "from-purple-500 to-pink-600",
    value: 130,
  },
];

const extendedItems = [...spinnerItems, ...spinnerItems, ...spinnerItems];
const spinnerOptions = [
  {
    id: nanoid(),
    name: "Premium Spinner",
    cost: 100,
    image: "/placeholder.svg?height=120&width=120",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: nanoid(),
    name: "Deluxe Spinner",
    cost: 250,
    image: "/placeholder.svg?height=120&width=120",
    color: "from-cyan-600 to-blue-600",
  },
  {
    id: nanoid(),
    name: "Ultimate Spinner",
    cost: 500,
    image: "/placeholder.svg?height=120&width=120",
    color: "from-yellow-500 to-amber-600",
  },
];

export const FeaturedSpinner = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const [selectedSpinner, setSelectedSpinner] = useState(spinnerOptions[0]);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSpin = async () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);

    let winningIndex;
    const random = Math.random() * 100;

    if (selectedSpinner.id) {
      if (random < 15) {
        const legendaryItems = spinnerItems.filter(
          (item) => item.rarity === "legendary"
        );
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            legendaryItems[Math.floor(Math.random() * legendaryItems.length)].id
        );
      } else if (random < 60) {
        const epicItems = spinnerItems.filter((item) => item.rarity === "epic");
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            epicItems[Math.floor(Math.random() * epicItems.length)].id
        );
      } else {
        const rareItems = spinnerItems.filter((item) => item.rarity === "rare");
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            rareItems[Math.floor(Math.random() * rareItems.length)].id
        );
      }
    } else if (selectedSpinner.id) {
      if (random < 8) {
        const legendaryItems = spinnerItems.filter(
          (item) => item.rarity === "legendary"
        );
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            legendaryItems[Math.floor(Math.random() * legendaryItems.length)].id
        );
      } else if (random < 50) {
        const epicItems = spinnerItems.filter((item) => item.rarity === "epic");
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            epicItems[Math.floor(Math.random() * epicItems.length)].id
        );
      } else {
        const rareItems = spinnerItems.filter((item) => item.rarity === "rare");
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            rareItems[Math.floor(Math.random() * rareItems.length)].id
        );
      }
    } else {
      if (random < 3) {
        const legendaryItems = spinnerItems.filter(
          (item) => item.rarity === "legendary"
        );
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            legendaryItems[Math.floor(Math.random() * legendaryItems.length)].id
        );
      } else if (random < 35) {
        const epicItems = spinnerItems.filter((item) => item.rarity === "epic");
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            epicItems[Math.floor(Math.random() * epicItems.length)].id
        );
      } else {
        const rareItems = spinnerItems.filter((item) => item.rarity === "rare");
        winningIndex = spinnerItems.findIndex(
          (item) =>
            item.id ===
            rareItems[Math.floor(Math.random() * rareItems.length)].id
        );
      }
    }

    if (winningIndex === undefined) {
      winningIndex = Math.floor(Math.random() * spinnerItems.length);
    }
    // const winningItems = spinnerItems[winningIndex];
    const itemWidth = 120;
    const containerWidth = containerRef.current?.offsetWidth || 600;
    const centerPosition = containerWidth / 2;
    const baseOffset = centerPosition - itemWidth / 2;
    const targetPosition =
      -(winningIndex * itemWidth) -
      baseOffset -
      spinnerItems.length * itemWidth;

    await controls.start({
      x: targetPosition,
      transition: {
        duration: 6,
        ease: [0.1, 0.25, 0.3, 1],
      },
    });

    // setResult(winningItems);
    setShowResult(true);
    setIsSpinning(false);
  };

  return (
    <div className="w-full bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Skin Spinner
          </h3>
          <p className="text-gray-400 mb-4">
            Spin to win amazing skins! Choose your spinner type to increase your
            chances of winning rare items.
          </p>

          <div className="flex space-x-4 overflow-x-auto pb-2 mb-4">
            {spinnerOptions.map((spinner) => (
              <Card
                key={spinner.id}
                className={`flex-shrink-0 w-[180px] bg-gray-800 border-gray-700 cursor-pointer transition-all ${
                  selectedSpinner.id === spinner.id
                    ? "ring-2 ring-cyan-500 border-transparent"
                    : "hover:border-gray-600"
                }`}
                onClick={() => setSelectedSpinner(spinner)}
              >
                <div className="p-4 flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${spinner.color} opacity-20 flex items-center justify-center mb-2`}
                  >
                    <Image
                      src={spinner.image || "/placeholder.svg"}
                      alt={spinner.name}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-medium text-center">{spinner.name}</h4>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400 font-medium">
                      {spinner.cost}
                    </span>
                    <span className="ml-1 text-sm text-gray-400">coins</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 mb-1">Win Chance</div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                  <span className="text-xs text-gray-300">
                    {selectedSpinner.id
                      ? "15%"
                      : selectedSpinner.id
                      ? "8%"
                      : "3%"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
                  <span className="text-xs text-gray-300">
                    {selectedSpinner.id
                      ? "45%"
                      : selectedSpinner.id
                      ? "42%"
                      : "32%"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                  <span className="text-xs text-gray-300">
                    {selectedSpinner.id
                      ? "40%"
                      : selectedSpinner.id
                      ? "50%"
                      : "65%"}
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSpin}
              disabled={isSpinning}
              className={`bg-gradient-to-r ${selectedSpinner.color} hover:opacity-90`}
            >
              {isSpinning ? "Spinning..." : "Spin Now"}
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[120px] overflow-hidden mb-4">
        {/* Indicator */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[4px] bg-gradient-to-b from-purple-500 to-pink-500 z-20 transform -translate-x-1/2" />
        <div className="absolute top-0 left-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-pink-500 z-20 transform -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-purple-500 z-20 transform -translate-x-1/2" />

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-gray-800/90 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-gray-800/90 to-transparent z-10" />

        {/* Spinner items */}
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden"
        >
          <motion.div
            className="absolute flex items-center h-full"
            animate={controls}
            initial={{ x: 0 }}
          >
            {extendedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[100px] h-[100px] mx-[10px] relative"
              >
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${item.color} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain z-10"
                  />
                </div>
                <div
                  className={`absolute bottom-1 left-1 right-1 text-center text-xs py-1 rounded-md bg-gradient-to-r ${
                    item.rarity === "legendary"
                      ? "from-yellow-500/80 to-amber-600/80"
                      : item.rarity === "epic"
                      ? "from-purple-500/80 to-pink-600/80"
                      : "from-blue-500/80 to-cyan-600/80"
                  }`}
                >
                  {item.name.split(" | ")[1]}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {/* {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 p-4 rounded-lg bg-gray-700/50 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div
                className={`w-[60px] h-[60px] rounded-lg bg-gradient-to-br opacity-20 flex items-center justify-center mr-4`}
              >
                <Image
                  src={result.image || "/placeholder.svg"}
                  alt={result.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold">{result.name}</h4>
                <div className="flex items-center space-x-2">
                  <div
                    className={`text-xs inline-block px-2 py-0.5 rounded-full ${
                      result.rarity === "legendary"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : result.rarity === "epic"
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {result.rarity}
                  </div>
                  <span className="text-yellow-400">{result.value} coins</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
              >
                Sell
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
              >
                Add to Inventory <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )} */}
      </AnimatePresence>
    </div>
  );
};
