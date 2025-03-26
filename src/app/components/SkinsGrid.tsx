"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SkinsGridType = {
  id: string;
  name: string;
  img: string;
};

export const SkinsGrid = ({ id, name, img }: SkinsGridType) => {
  const [hoveredSkin] = useState();

  return (
    <div>
      <motion.div
        key={id}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        <Card className="bg-[#12315B] backdrop-blur-sm border-gray-700 rounded-xl">
          <CardContent className="p-0 relative">
            <div className={`absolute inset-0 bg-gradient-to-br opacity-20`} />
            <div className="pt-6 px-6 pb-2 flex justify-center">
              <div className="relative">
                <Image
                  src={img}
                  alt={name}
                  width={200}
                  height={200}
                  className="object-contain relative z-10"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredSkin === id ? 1 : 0,
                    scale: hoveredSkin === id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none flex items-center justify-center"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-30 rounded-full blur-xl`}
                  />
                </motion.div>
              </div>
            </div>
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r`}
            ></div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-6 pt-2 relative z-10">
            <h3 className="flex justify-center items-center font-bold text-lg">
              {name}
            </h3>
            <div className="flex justify-between w-full items-center mt-2">
              {/* <span className="text-yellow-400 font-medium">
                  {caseItem.price} $
                </span>
                <span className="text-sm text-gray-400">
                  {caseItem.items} items
                </span> */}
            </div>
            <Button
              className={`w-full mt-4 bg-gradient-to-r hover:opacity-90 transition-opacity border-[#ffffff] rounded-sm`}
              asChild
            >
              <Link href={`/cases/${id}`} className="bg-[#]">
                Open Case
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};
