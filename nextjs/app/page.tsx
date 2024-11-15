"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { PumpOrDump } from "~~/components/PumpOrDump";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow">
          <PumpOrDump />
      </div>
    </>
  );
};

export default Home;
