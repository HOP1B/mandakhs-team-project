// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Plus,
//   Sparkles,
//   Zap,
//   RefreshCw,
//   ChevronUp,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Slider } from "@/components/ui/slider";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { nanoid } from "nanoid";

// const inventoryItems = [
//   {
//     id: nanoid(),
//     name: "Redline",
//     image: "/placeholder.svg?height=100&width=100",
//     rarity: "rare",
//     value: 50,
//     color: "from-blue-500 to-cyan-600",
//   },
//   {
//     id: nanoid(),
//     name: "Asiimov",
//     image: "/placeholder.svg?height=100&width=100",
//     rarity: "epic",
//     value: 120,
//     color: "from-orange-500 to-red-600",
//   },
//   {
//     id: nanoid(),
//     name: "Hyper Beast",
//     image: "/placeholder.svg?height=100&width=100",
//     rarity: "rare",
//     value: 45,
//     color: "from-purple-500 to-pink-600",
//   },
//   {
//     id: nanoid(),
//     name: "Neo-Noir",
//     image: "/placeholder.svg?height=100&width=100",
//     rarity: "rare",
//     value: 40,
//     color: "from-blue-500 to-indigo-600",
//   },
//   {
//     id: nanoid(),
//     name: "Containment Breach",
//     image: "/placeholder.svg?height=100&width=100",
//     rarity: "rare",
//     value: 55,
//     color: "from-yellow-500 to-orange-600",
//   },
//   {
//     id: nanoid(),
//     name: "Printstream",
//     image: "/placeholder.svg?height=100&width=100",
//     rarity: "epic",
//     value: 130,
//     color: "from-gray-300 to-gray-500",
//   },
// ];

// const targetItems = [
//   {
//     id: nanoid(),
//     name: "Dragon Lore",
//     image: "/placeholder.svg?height=150&width=150",
//     rarity: "legendary",
//     value: 500,
//     color: "from-yellow-500 to-amber-600",
//   },
//   {
//     id: nanoid(),
//     name: "Howl",
//     image: "/placeholder.svg?height=150&width=150",
//     rarity: "legendary",
//     value: 450,
//     color: "from-red-500 to-orange-600",
//   },
//   {
//     id: nanoid(),
//     name: "Gungnir",
//     image: "/placeholder.svg?height=150&width=150",
//     rarity: "legendary",
//     value: 480,
//     color: "from-blue-500 to-indigo-600",
//   },
//   {
//     id: nanoid(),
//     name: "Fade Butterfly",
//     image: "/placeholder.svg?height=150&width=150",
//     rarity: "legendary",
//     value: 520,
//     color: "from-purple-500 to-pink-600",
//   },
// ];

// export default function UpgradePage() {
//   const [selectedItems, setSelectedItems] = useState<number[]>([]);
//   const [targetItem, setTargetItem] = useState(targetItems[0]);
//   const [upgradeChance, setUpgradeChance] = useState(10);
//   const [isUpgrading, setIsUpgrading] = useState(false);
//   const [upgradeResult, setUpgradeResult] = useState<"success" | "fail" | null>(
//     null
//   );

//   const totalValue = selectedItems.reduce((sum, id) => {
//     const item = inventoryItems.find((item) => item.id === id);
//     return sum + (item?.value || 0);
//   }, 0);

//   const calculateSuccessChance = () => {
//     if (totalValue === 0) return 0;
//     const baseChance = Math.min((totalValue / targetItem.value) * 100, 80);
//     return Math.min(baseChance + upgradeChance, 95);
//   };

//   const successChance = calculateSuccessChance();

//   const handleItemSelect = (id: number) => {
//     if (selectedItems.includes(id)) {
//       setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
//     } else {
//       setSelectedItems([...selectedItems, id]);
//     }
//   };

//   const handleTargetSelect = (item: string) => {
//     setTargetItem(item);
//   };

//   const handleUpgradeChanceChange = (value: number[]) => {
//     setUpgradeChance(value[0]);
//   };

//   const handleUpgrade = () => {
//     if (totalValue === 0 || isUpgrading) return;

//     setIsUpgrading(true);

//     setTimeout(() => {
//       const random = Math.random() * 100;
//       const result = random <= successChance ? "success" : "fail";
//       setUpgradeResult(result);

//       setTimeout(() => {
//         setIsUpgrading(false);
//       }, 2000);
//     }, 1500);
//   };

//   const resetUpgrade = () => {
//     setSelectedItems([]);
//     setUpgradeResult(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900 text-white">
//       <div>
//         <div className="container mx-auto px-4 py-8">
//           <Button variant="ghost" className="mb-6" asChild>
//             <Link href="/">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Home
//             </Link>
//           </Button>

//           <div className="flex flex-col  gap-8">
//             <div className="w-full lg:w-1/2">
//               <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 h-full">
//                 <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
//                   Select Items to Upgrade
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                 {inventoryItems.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Card
//                       className={`bg-gray-800 border-gray-700 cursor-pointer transition-all ${
//                         selectedItems.includes(item.id)
//                           ? "ring-2 ring-cyan-500 border-transparent"
//                           : "hover:border-gray-600"
//                       }`}
//                       onClick={() => handleItemSelect(item.id)}
//                     >
//                       <CardContent className="p-4 flex items-center">
//                         <div
//                           className={`w-[60px] h-[60px] rounded-lg bg-gradient-to-br ${item.color} opacity-20 flex items-center justify-center mr-4`}
//                         >
//                           <Image
//                             src={item.image || "/placeholder.svg"}
//                             alt={item.name}
//                             width={50}
//                             height={50}
//                             className="object-contain"
//                           />
//                         </div>
//                         <div>
//                           <h4 className="font-bold">{item.name}</h4>
//                           <div className="flex items-center justify-between">
//                             <div
//                               className={`text-xs inline-block px-2 py-0.5 rounded-full ${
//                                 item.rarity === "legendary"
//                                   ? "bg-yellow-500/20 text-yellow-300"
//                                   : item.rarity === "epic"
//                                   ? "bg-purple-500/20 text-purple-300"
//                                   : "bg-blue-500/20 text-blue-300"
//                               }`}
//                             >
//                               {item.rarity}
//                             </div>
//                             <span className="text-yellow-400 text-sm">
//                               {item.value} coins
//                             </span>
//                           </div>
//                         </div>
//                         {selectedItems.includes(item.id) && (
//                           <div className="ml-auto">
//                             <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
//                               <Plus className="h-4 w-4" />
//                             </div>
//                           </div>
//                         )}
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="bg-gray-700/50 rounded-lg p-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="font-bold">Selected Items Value</h3>
//                   <span className="text-yellow-400 font-bold">
//                     {totalValue} coins
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-400 mb-4">
//                   Select multiple items to increase your upgrade chance
//                 </p>

//                 <div className="mb-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm">Upgrade Chance Boost</span>
//                     <span className="text-cyan-400">+{upgradeChance}%</span>
//                   </div>
//                   <Slider
//                     defaultValue={[10]}
//                     max={30}
//                     step={5}
//                     onValueChange={handleUpgradeChanceChange}
//                     className="py-2"
//                   />
//                   <div className="flex justify-between text-xs text-gray-400">
//                     <span>+0%</span>
//                     <span>+30%</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm">Cost for Boost</span>
//                   <span className="text-yellow-400">
//                     {upgradeChance * 5} coins
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2">
//           <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 h-full">
//             <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
//               Upgrade to Premium Skin
//             </h2>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//               {targetItems.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Card
//                     className={`bg-gray-800 border-gray-700 cursor-pointer transition-all ${
//                       targetItem.id === item.id
//                         ? "ring-2 ring-pink-500 border-transparent"
//                         : "hover:border-gray-600"
//                     }`}
//                     onClick={() => handleTargetSelect(item)}
//                   >
//                     <CardContent className="p-3 flex flex-col items-center">
//                       <div
//                         className={`w-full h-[80px] rounded-lg bg-gradient-to-br ${item.color} opacity-20 flex items-center justify-center mb-2`}
//                       >
//                         <Image
//                           src={item.image || "/placeholder.svg"}
//                           alt={item.name}
//                           width={70}
//                           height={70}
//                           className="object-contain"
//                         />
//                       </div>
//                       <h4 className="font-bold text-sm text-center">
//                         {item.name}
//                       </h4>
//                       <Badge
//                         variant="outline"
//                         className="mt-1 border-yellow-500 text-yellow-500"
//                       >
//                         {item.value} coins
//                       </Badge>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="bg-gray-700/50 rounded-lg p-6 mb-6">
//               <AnimatePresence mode="wait">
//                 {!isUpgrading && upgradeResult === null ? (
//                   <motion.div
//                     key="upgrade-info"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
//                       <div className="flex items-center mb-4 sm:mb-0">
//                         <div className="flex -space-x-4">
//                           {selectedItems.slice(0, 3).map((id, index) => {
//                             const item = inventoryItems.find(
//                               (item) => item.id === id
//                             );
//                             return (
//                               <div
//                                 key={id}
//                                 className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
//                                   item?.color
//                                 } opacity-20 flex items-center justify-center border border-gray-700 z-${
//                                   30 - index
//                                 }`}
//                               >
//                                 <Image
//                                   src={item?.image || "/placeholder.svg"}
//                                   alt={item?.name || ""}
//                                   width={40}
//                                   height={40}
//                                   className="object-contain"
//                                 />
//                               </div>
//                             );
//                           })}
//                           {selectedItems.length > 3 && (
//                             <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center border border-gray-600 z-0">
//                               <span className="text-xs">
//                                 +{selectedItems.length - 3}
//                               </span>
//                             </div>
//                           )}
//                         </div>
//                         <ArrowRight className="mx-2 text-gray-400" />
//                         <div
//                           className={`w-16 h-16 rounded-lg bg-gradient-to-br ${targetItem.color} opacity-20 flex items-center justify-center border border-gray-700`}
//                         >
//                           <Image
//                             src={targetItem.image || "/placeholder.svg"}
//                             alt={targetItem.name}
//                             width={50}
//                             height={50}
//                             className="object-contain"
//                           />
//                         </div>
//                       </div>

//                       <div className="text-center sm:text-right">
//                         <div className="text-sm text-gray-400 mb-1">
//                           Success Chance
//                         </div>
//                         <div className="text-2xl font-bold text-cyan-400">
//                           {successChance.toFixed(1)}%
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <div className="flex justify-between mb-2">
//                         <span className="text-sm text-gray-400">Chance</span>
//                         <span className="text-sm">
//                           {successChance.toFixed(1)}%
//                         </span>
//                       </div>
//                       <Progress
//                         value={successChance}
//                         className="h-2 bg-gray-600"
//                       >
//                         <div
//                           className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
//                           style={{ width: `${successChance}%` }}
//                         />
//                       </Progress>
//                     </div>

//                     <Button
//                       className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
//                       disabled={totalValue === 0 || successChance < 5}
//                       onClick={handleUpgrade}
//                     >
//                       Upgrade Now
//                     </Button>
//                   </motion.div>
//                 ) : isUpgrading ? (
//                   <motion.div
//                     key="upgrading"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="flex flex-col items-center py-6"
//                   >
//                     <motion.div
//                       animate={{
//                         rotate: 360,
//                         scale: [1, 1.1, 1],
//                       }}
//                       transition={{
//                         rotate: {
//                           duration: 2,
//                           repeat: Number.POSITIVE_INFINITY,
//                           ease: "linear",
//                         },
//                         scale: {
//                           duration: 1,
//                           repeat: Number.POSITIVE_INFINITY,
//                           repeatType: "reverse",
//                         },
//                       }}
//                       className="mb-4"
//                     >
//                       <RefreshCw className="h-16 w-16 text-purple-400" />
//                     </motion.div>
//                     <h3 className="text-xl font-bold mb-2">
//                       Processing Upgrade
//                     </h3>
//                     <p className="text-gray-400">Combining your items...</p>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="result"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="flex flex-col items-center py-4"
//                   >
//                     {upgradeResult === "success" ? (
//                       <>
//                         <motion.div
//                           initial={{ scale: 0.5, opacity: 0 }}
//                           animate={{ scale: 1, opacity: 1 }}
//                           transition={{ duration: 0.5 }}
//                           className="mb-4 relative"
//                         >
//                           <div
//                             className={`w-24 h-24 rounded-lg bg-gradient-to-br ${targetItem.color} opacity-30 flex items-center justify-center`}
//                           >
//                             <Image
//                               src={targetItem.image || "/placeholder.svg"}
//                               alt={targetItem.name}
//                               width={100}
//                               height={100}
//                               className="object-contain"
//                             />
//                           </div>
//                           <motion.div
//                             animate={{
//                               opacity: [0, 1, 0.5, 1],
//                               rotate: 360,
//                             }}
//                             transition={{
//                               opacity: {
//                                 duration: 3,
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 repeatType: "reverse",
//                               },
//                               rotate: {
//                                 duration: 20,
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 ease: "linear",
//                               },
//                             }}
//                             className="absolute inset-0 pointer-events-none"
//                           >
//                             <Sparkles className="absolute top-0 right-0 text-yellow-400 h-8 w-8" />
//                             <Sparkles className="absolute bottom-0 left-0 text-yellow-400 h-8 w-8" />
//                           </motion.div>
//                         </motion.div>
//                         <h3 className="text-xl font-bold mb-2 text-green-400">
//                           Upgrade Successful!
//                         </h3>
//                         <p className="text-center mb-4">
//                           Congratulations! Youve successfully upgraded to{" "}
//                           <span className="font-bold text-yellow-400">
//                             {targetItem.name}
//                           </span>
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         <motion.div
//                           initial={{ scale: 0.5, opacity: 0 }}
//                           animate={{ scale: 1, opacity: 1 }}
//                           transition={{ duration: 0.5 }}
//                           className="mb-4 relative"
//                         >
//                           <div className="w-24 h-24 rounded-lg bg-gray-700 flex items-center justify-center">
//                             <Zap className="h-16 w-16 text-red-500 opacity-50" />
//                           </div>
//                         </motion.div>
//                         <h3 className="text-xl font-bold mb-2 text-red-400">
//                           Upgrade Failed
//                         </h3>
//                         <p className="text-center mb-4">
//                           Unfortunately, the upgrade was unsuccessful. Your
//                           items have been consumed.
//                         </p>
//                       </>
//                     )}
//                     <Button
//                       onClick={resetUpgrade}
//                       className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90"
//                     >
//                       Try Again
//                     </Button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <div className="bg-gray-700/30 rounded-lg p-4">
//               <h3 className="font-bold flex items-center mb-2">
//                 <ChevronUp className="mr-1 h-4 w-4 text-cyan-400" />
//                 Upgrade Tips
//               </h3>
//               <ul className="text-sm text-gray-400 space-y-2">
//                 <li>
//                   • Combine multiple items to increase your success chance
//                 </li>
//                 <li>• Higher value items give better upgrade chances</li>
//                 <li>• Use the chance booster for difficult upgrades</li>
//                 <li>• Legendary items have a maximum 95% success rate</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
