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
  return (
    <div className="relative">
      {/* Original placement for the info button */}
      <Drawer>
        <DrawerTrigger asChild>
          <div className="absolute top-4 right-4">
            <button className="rounded-full p-2 hover:bg-gray-800 transition-colors duration-200">
              <Info className="text-white h-6 w-6" />
            </button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-[85vh] sm:h-[90vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white border-none rounded-lg">
          <div className="mx-auto w-full max-w-md h-full flex flex-col">
            <DrawerHeader className="text-center py-4">
              <Avatar className="w-16 h-16 mx-auto mb-4 shadow-lg">
                <AvatarImage src={db[0].url} alt="Profile picture" />
                <AvatarFallback>BTC</AvatarFallback>
              </Avatar>
              {db.map((character, index) => (
                <div key={index} className="text-white px-4">
                  <DrawerTitle className="text-2xl font-bold text-center">${character.ticker}</DrawerTitle>
                  <DrawerDescription className="text-center">{character.name}</DrawerDescription>
                </div>
              ))}
            </DrawerHeader>
            <ScrollArea className="flex-grow px-4 pb-4">
              <div className="space-y-6">
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Details</h4>
                  {db.map((character, index) => (
                    <div key={index} className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span>{character.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Ticker:</span>
                        <span>${character.ticker}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span>{character.price} USD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Cap:</span>
                        <span>{character.mcap}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Created:</span>
                        <span>{character.created}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator />
                <div>
                  <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://user-images.githubusercontent.com/9406025/88488755-f1164000-cf97-11ea-87d1-53ad78c1a587.png"
                      alt="Chart"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
                <Separator />
              </div>
            </ScrollArea>
            <div className="absolute bottom-0 left-0 right-0 p-4 w-full max-w-md mx-auto">
              <DrawerClose asChild>
                <button className="w-full py-3 bg-gradient-to-br from-green-600 to-green-800 rounded-lg text-white hover:from-green-500 hover:to-green-700 transition-transform duration-200 active:scale-95">
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
