"use client";

import * as React from "react";
import { Info } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~~/components/ui/drawer";
import { ScrollArea } from "~~/components/ui/scroll-area";
import { Separator } from "~~/components/ui/separator";

export const db = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    description: "Bitcoin is a decentralized digital currency, without a central bank or single administrator.",
    mcap: "1.2T",
    created: "2009",
    price: "50,000",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
];

export default function TinderDrawer() {
  const character = db[0]; // Since there's only one item

  return (
    <div className="relative">
      {/* Original placement for the info button */}
      <Drawer>
        <DrawerTrigger asChild>
          <div className="absolute top-4 right-4">
            <button className="rounded-full p-2 bg-[#1a1a2e] hover:bg-[#222242] transition-colors duration-200 shadow-neon">
              <Info className="text-cyan-400 h-6 w-6" />
            </button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-[85vh] sm:h-[90vh] bg-gradient-to-b from-[#0a0a23] to-[#1c1c3b] text-neon-green border-none rounded-lg shadow-neon">
          <div className="mx-auto w-full max-w-md h-full flex flex-col">
            {/* Header with Avatar, Symbol, and Ticker */}
            <DrawerHeader className="flex items-center justify-center py-10 space-x-4">
              <Avatar className="w-16 h-16 shadow-avatar-glow">
                <AvatarImage src={character.url} alt="Profile picture" />
                <AvatarFallback className="bg-cyan-500 text-black">{character.ticker}</AvatarFallback>
              </Avatar>
              <div className="text-neon-green">
                <DrawerTitle className="text-xl font-bold neon-text-shadow">${character.ticker}</DrawerTitle>
                <DrawerDescription className="text-cyan-400 text-sm">{character.name}</DrawerDescription>
              </div>
            </DrawerHeader>

            {/* Chart placed under the header */}
            <div className="px-4 pb-4">
              <div className="bg-[#2b2b47] rounded-xl overflow-hidden shadow-chart-glow">
                <img
                  src="https://user-images.githubusercontent.com/9406025/88488755-f1164000-cf97-11ea-87d1-53ad78c1a587.png"
                  alt="Chart"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Details section */}
            <ScrollArea className="flex-grow px-4 pb-4">
              <div className="space-y-6">
                <Separator className="border-cyan-500" />
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-cyan-400">Name:</span>
                    <span className="text-neon-green">{character.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">Ticker:</span>
                    <span className="text-neon-green">${character.ticker}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">Price:</span>
                    <span className="text-neon-green">{character.price} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">Market Cap:</span>
                    <span className="text-neon-green">{character.mcap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-400">Created:</span>
                    <span className="text-neon-green">{character.created}</span>
                  </div>
                </div>
                <Separator className="border-cyan-500" />
              </div>
            </ScrollArea>

            {/* Close button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 w-full max-w-md mx-auto">
              <DrawerClose asChild>
                <button className="w-full py-3 bg-gradient-to-br from-[#19A974] to-[#165D4E] rounded-lg text-white neon-border hover:from-[#1AC17E] hover:to-[#184B5F] transition-transform duration-200 active:scale-95">
                  Close
                </button>
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
