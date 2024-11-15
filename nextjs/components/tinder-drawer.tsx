"use client"

import * as React from "react"
import { Heart, X, MapPin, Briefcase, GraduationCap, Music, Utensils, Dumbbell, ArrowUpFromLine, Info } from 'lucide-react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~~/components/ui/drawer"
import { Avatar, AvatarFallback, AvatarImage } from "~~/components/ui/avatar"
import { ScrollArea } from "~~/components/ui/scroll-area"
import { Separator } from "~~/components/ui/separator"

export const db = [
    {
      name: 'bitcoin',
      ticker: 'BTC',
      description: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator.',
      mcap: '1.2T',
      created: '2009',
      price: '50k',
      url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
    }
];

export default function TinderDrawer() {
  return (
    <div className="z-100">
    <Drawer>
      <DrawerTrigger asChild>
        <a className="rounded-full flex flex-row-reverse items-center text-sm text-white">
        <Info className="hover:bg-slate-700 bg-[#0d0c11] rounded-full h-8 w-8" />
        </a>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh] sm:h-[90vh] bg-gradient-to-b from-[#0d0c11] to-[#110c0f] text-white border border-none">
        <div className="mx-auto w-full max-w-sm h-full flex flex-col">
          <DrawerHeader className="text-center">
            <Avatar className="w-12 h-12 mx-auto mb-4">
              <AvatarImage src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Profile picture" />
              <AvatarFallback>coin</AvatarFallback>
            </Avatar>
                {db.map((character, index) => (
                <div key={index} className='pt-5 px-7 w-full gap-5 text-white text-left'>
                    <div className='flex justify-between'>
                            <DrawerTitle className="text-2xl">${character.ticker}</DrawerTitle>
                            <DrawerDescription className="">{character.name}</DrawerDescription>
                    </div>
                </div>
                ))}
          </DrawerHeader>
          <ScrollArea className="flex-grow px-4 pb-32">
            <div className="space-y-6">
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">About Me</h4>
                {db.map((character, index) => (
                  <div key={index} className='pt-5 px-7 w-full gap-5 text-white text-left'>
                    <div className='flex justify-between'>
                      <span>NAME</span>
                      <span className='text-left ml-4'>{character.name}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>TICKER</span>
                      <span className='text-left ml-4'>${character.ticker}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>PRICE</span>
                      <span className='text-left ml-4'>{character.price} $</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>MCAP</span>
                      <span className='text-left ml-4'>{character.mcap}</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>CREATED</span>
                      <span className='text-left ml-4'>{character.created}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Chart</h4>
                <div className="bg-[#0d0c11] h-full w-full z-10 rounded-xl">
                  <img
                    src={'https://user-images.githubusercontent.com/9406025/88488755-f1164000-cf97-11ea-87d1-53ad78c1a587.png'}
                    alt="rtef"
                    className='w-[500px] h-[250px] object-cover'
                  />
                </div>
              </div>
              <Separator />
            </div>
          </ScrollArea>

          <div className="absolute bottom-0 left-0 right-0 p-4 w-full max-w-sm mx-auto ">
            <div className="flex justify-between mb-4">

              <DrawerClose asChild>
              <button className="bg-gradient-to-br from-[#00B500] to-[#0d0c11] hover:from-[#0d0c11] hover:to-slate-500 py-3 w-full rounded-xl active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100">close</button>
            </DrawerClose>
            </div>
          </div>

        </div>
      </DrawerContent>
    </Drawer>
    </div>
  )
}