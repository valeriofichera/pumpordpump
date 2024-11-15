"use client";

import React, { useState } from "react";
import { Slider } from "~~/components/ui/slider";
import { HandCoins } from "lucide-react";

const PROFIT_PER_UNIT = 23.42;

//const PROFIT_PER_UNIT_ZK = 7.3155;

// const profitPerUnit = AVERAGE_PROFIT / MIN_WALLET_BALANCE;
// console.log(profitPerUnit); // Result: 7.3155



export const CalculatorSection = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletCount, setWalletCount] = useState(0);

  const calculateProfit = (balance: number, count: number) => {
    return balance * count * PROFIT_PER_UNIT;
  };

  const profit = calculateProfit(walletBalance, walletCount);

  return (
    <div className="flex flex-col gap-5 mx-auto">

      <div className="mx-2 md:mx-5 p-3 border-[3px] rounded-2xl shadow-sm ">
        <p className="text-base md:text-lg mb-2">budget per wallet: <span className="font-bold">{walletBalance}$</span></p>
        <div className=" mx-2 md:mx-5 p-3 border-[3px] rounded-2xl">
          <Slider
            defaultValue={[0]}
            max={5000}
            step={5}
            onValueChange={(value) => setWalletBalance(value[0])}
          />
        </div>
      </div>

      <div className="mx-2 md:mx-5 p-3 border-[3px] rounded-2xl shadow-sm ">
        <p className="text-base md:text-lg mb-2">number of wallets: <span className="font-bold">{walletCount}</span></p>
        <div className="mx-2 md:mx-5 p-3 border-[3px] rounded-2xl shadow-sm ">
          <Slider
            defaultValue={[0]}
            max={10}
            step={1}
            onValueChange={(value) => setWalletCount(value[0])}
          />
        </div>
      </div>

      <div className="mx-2 md:mx-5 p-3 border-[3px] rounded-2xl shadow-sm  flex flex-row justify-between items-end">
        <p className="md:text-lg">estimated earnings:</p>
        <p className="text-xl md:text-2xl font-bold">{profit.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
      </div>
    </div>
  );
};