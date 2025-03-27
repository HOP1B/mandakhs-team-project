/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";


import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const DynamicSpinner = ({skinCase}:any) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const skins = skinCase.skins.map((skin:any)=>skin.skin);
  const spinnerItems = [...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins,...skins]

  const handleSpin = async () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);

    let winningIndex;
    const random = Math.random() * 100;


    winningIndex = spinnerItems.findIndex(
        (item:any) =>
          item.id === spinnerItems[Math.floor(Math.random() * spinnerItems.length)].id
      );

    if (winningIndex === undefined) {
      winningIndex = Math.floor(Math.random() * spinnerItems.length);
    }
    const winningItems = spinnerItems[winningIndex];
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

    setResult(winningItems);
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
        </div>

        <Button onClick={handleSpin}>Spin</Button>
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
            {spinnerItems.map((item:any, index:number) => {
              console.log(item)
              return (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[100px] h-[100px] mx-[10px] relative"
              >
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${item.color} opacity-20`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={item.img || "/placeholder.svg"}
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
                  {item.name?.split(" | ")[1]}
                </div>
              </div>
            )
            })}
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
