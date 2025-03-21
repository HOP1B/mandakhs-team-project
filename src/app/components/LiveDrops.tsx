"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { nanoid } from "nanoid";

const initialDrops = [
  {
    id: nanoid(),
    username: "SniperKing",
    item: "AWP | Dragon Lore",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "legendary",
    color: "from-yellow-500 to-amber-600",
    time: "Just now",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Neon Dreams",
  },
  {
    id: nanoid(),
    username: "HeadshotPro",
    item: "AK-47 | Fire Serpent",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "epic",
    color: "from-red-500 to-orange-600",
    time: "2 minutes ago",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Crimson Glory",
  },
  {
    id: nanoid(),
    username: "FragMaster",
    item: "M4A4 | Howl",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "legendary",
    color: "from-red-500 to-orange-600",
    time: "5 minutes ago",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Golden Touch",
  },
  {
    id: nanoid(),
    username: "QuickScope",
    item: "Butterfly Knife | Fade",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "legendary",
    color: "from-purple-500 to-pink-600",
    time: "7 minutes ago",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Neon Dreams",
  },
  {
    id: nanoid(),
    username: "NinjaDefuser",
    item: "Glock-18 | Fade",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "epic",
    color: "from-purple-500 to-pink-600",
    time: "10 minutes ago",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Azure Aura",
  },
];

const newDrops = [
  {
    id: 6,
    username: "ShadowSniper",
    item: "USP-S | Kill Confirmed",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "epic",
    color: "from-red-500 to-orange-600",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Crimson Glory",
  },
  {
    id: 7,
    username: "FlashBang",
    item: "Desert Eagle | Blaze",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "epic",
    color: "from-orange-500 to-red-600",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Sunset Blaze",
  },
  {
    id: 8,
    username: "SmokeScreen",
    item: "AWP | Gungnir",
    image: "/placeholder.svg?height=60&width=60",
    rarity: "legendary",
    color: "from-blue-500 to-indigo-600",
    caseImage: "/placeholder.svg?height=40&width=40",
    caseName: "Azure Aura",
  },
];
type LiveDropsType = {
  id: string;
  time: string;
  username: string;
  item: string;
  image: string;
  rarity: string;
  color: string;
  caseImage: string;
  caseName: string;
};

export const LiveDrops = () => {
  const [drops, setDrops] = useState<LiveDropsType[]>(initialDrops);
  const [newDrop, setNewDrop] = useState<LiveDropsType | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDrop = newDrops[Math.floor(Math.random() * newDrops.length)];
      const updatedDrop = {
        ...randomDrop,
        id: nanoid(),
        time: "Just now",
      };

      setNewDrop(updatedDrop);

      setTimeout(() => {
        setNewDrop(null);

        setDrops((prevDrops) => {
          const updatedDrops = prevDrops.map((drop) => ({
            ...drop,
            time:
              drop.time === "Just now"
                ? "1 minute ago"
                : drop.time === "1 minute ago"
                ? "2 minutes ago"
                : drop.time === "2 minutes ago"
                ? "5 minutes ago"
                : drop.time === "5 minutes ago"
                ? "7 minutes ago"
                : drop.time === "7 minutes ago"
                ? "10 minutes ago"
                : drop.time,
          }));

          return [updatedDrop, ...updatedDrops.slice(0, 4)];
        });
      }, 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700 p-4 overflow-hidden">
      <div className="space-y-3">
        <AnimatePresence>
          {newDrop && (
            <motion.div
              key={`new-${newDrop.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center p-2 rounded-lg bg-gray-700/50"
              >
                <div className="flex-shrink-0 mr-3">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-md bg-gradient-to-br ${newDrop.color} opacity-20`}
                    ></div>
                    <Image
                      src={newDrop.image || "/placeholder.svg"}
                      alt={newDrop.item}
                      width={40}
                      height={40}
                      className="relative z-10"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                      <Image
                        src={newDrop.caseImage || "/placeholder.svg"}
                        alt={newDrop.caseName}
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    <span className="text-cyan-400">{newDrop.username}</span>{" "}
                    unboxed
                  </p>
                  <p
                    className={`text-xs truncate ${
                      newDrop.rarity === "legendary"
                        ? "text-yellow-400"
                        : newDrop.rarity === "epic"
                        ? "text-purple-400"
                        : "text-blue-400"
                    }`}
                  >
                    {newDrop.item}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-2">
                  <span className="text-xs text-green-400 animate-pulse">
                    ● LIVE
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {drops.map((drop) => (
          <div
            key={drop.id}
            className="flex items-center p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
          >
            <div className="flex-shrink-0 mr-3">
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-md bg-gradient-to-br ${drop.color} opacity-20`}
                ></div>
                <Image
                  src={drop.image || "/placeholder.svg"}
                  alt={drop.item}
                  width={40}
                  height={40}
                  className="relative z-10"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                  <Image
                    src={drop.caseImage || "/placeholder.svg"}
                    alt={drop.caseName}
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                <span className="text-cyan-400">{drop.username}</span> unboxed
              </p>
              <p
                className={`text-xs truncate ${
                  drop.rarity === "legendary"
                    ? "text-yellow-400"
                    : drop.rarity === "epic"
                    ? "text-purple-400"
                    : "text-blue-400"
                }`}
              >
                {drop.item}
              </p>
            </div>
            <div className="flex-shrink-0 ml-2">
              <span className="text-xs text-gray-400">{drop.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
