import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { Slider } from "~~/components/ui/slider"
import { CalculatorSection } from "./CalculatorSection";


export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <div className="text-center text-white mt-8 p-10 gap-10">
        <div className="text-4xl my-0">user page</div>
        <div> here we add wallet tap up and settings and all that</div>
        <div className="mt-12">
          
        <Slider defaultValue={[33]} max={100} step={1} />
        <CalculatorSection />
        </div>
      </div>
    </>
  );
};

export default Debug;
