import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import DumpImage from "./assets/DumpImage";
import PumpImage from "./assets/PumpImage";
import SuperPumpImage from "./assets/SuperPumpImage";
import BackIcon from "./assets/icons/BackIcon";
import DumpIcon from "./assets/icons/DumpIcon";
import PumpIcon from "./assets/icons/PumpIcon";
import TinderDrawer from "./tinder-drawer";
import "animate.css";
import TinderCard from "react-tinder-card";

export const db = [
  {
    name: "bitcoin",
    ticker: "BTC",
    description: "Bitcoin is a decentralized digital currency, without a central bank or single administrator.",
    mcap: "1.2T",
    created: "2009",
    price: "50k",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  {
    name: "ethereum",
    ticker: "ETH",
    description: "Ethereum is a decentralized platform that enables smart contracts and decentralized applications.",
    mcap: "400B",
    created: "2015",
    price: "3k",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    name: "solana",
    ticker: "SOL",
    description: "Solana is a high-performance blockchain supporting builders around the world creating crypto apps.",
    mcap: "100B",
    created: "2020",
    price: "200",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    name: "usdc",
    ticker: "USDC",
    description: "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin.",
    mcap: "50B",
    created: "2020",
    price: "1",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    name: "dodge",
    ticker: "DOGE",
    description: "Dogecoin is a cryptocurrency that started as a joke but has gained a large following.",
    mcap: "20B",
    created: "2020",
    price: "0.3",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    name: "Shibe",
    ticker: "SHIB",
    description:
      "ShibeCoin is a meme-based cryptocurrency inspired by Shiba Inu dogs, aiming to bring joy and laughter to the crypto world.",
    mcap: "15B",
    created: "2021",
    price: "0.00007",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
  },
  {
    name: "Fluffy",
    ticker: "FLUF",
    description:
      "FluffyCoin is a fluffy meme coin created for crypto enthusiasts who believe in lighthearted, soft currency.",
    mcap: "5B",
    created: "2022",
    price: "0.02",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5995.png",
  },
  {
    name: "Wagmi",
    ticker: "WAGMI",
    description:
      "WAGMICoin represents the optimism of the crypto world, reminding everyone 'We Are All Gonna Make It!'",
    mcap: "3B",
    created: "2020",
    price: "0.5",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5996.png",
  },
  {
    name: "Pepe",
    ticker: "PEPE",
    description:
      "PepeCoin is a tribute to internet culture and meme lovers, featuring everyone's favorite frog as its mascot.",
    mcap: "10B",
    created: "2019",
    price: "0.001",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5997.png",
  },
  {
    name: "MemeGold",
    ticker: "MGOLD",
    description:
      "MemeGold is a parody coin that shines with meme energy, bringing value to jokes and humor in the digital economy.",
    mcap: "8B",
    created: "2021",
    price: "0.05",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5998.png",
  },
  {
    name: "LaughCoin",
    ticker: "LAUGH",
    description:
      "LaughCoin is the currency for sharing laughs, bringing lightheartedness to the serious world of crypto.",
    mcap: "500M",
    created: "2023",
    price: "0.007",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5999.png",
  },
  {
    name: "FelineCoin",
    ticker: "CAT",
    description: "FelineCoin purrs its way through the crypto world, charming cat lovers with its adorable branding.",
    mcap: "2B",
    created: "2022",
    price: "0.003",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/6000.png",
  },
  {
    name: "RocketPup",
    ticker: "RPUP",
    description:
      "RocketPup is a coin that aims for the moon, literally, as it gains popularity among meme enthusiasts.",
    mcap: "7B",
    created: "2020",
    price: "0.04",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/6001.png",
  },
  {
    name: "Cheems",
    ticker: "CHEEMS",
    description: "CheemsCoin is inspired by the famous 'Cheems' dog meme, offering a fun token for all meme fans.",
    mcap: "6B",
    created: "2019",
    price: "0.0003",
    url: "https://s2.coinmarketcap.com/static/img/coins/64x64/6002.png",
  },
  {
    name: "BananaCoin",
    ticker: "BNNA",
    description: "BananaCoin is the crypto for monkeying around, designed to reward the silliest traders out there.",
    mcap: "1B",
    created: "2022",
    price: "0.09",
    url: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg.webp",
  },
];

export function PumpOrDump() {
  const [currentIndex, setCurrentIndex] = useState<number>(db.length - 1);
  const [lastDirection, setLastDirection] = useState<string | undefined>();
  const [showImage, setShowImage] = useState<boolean>(false);
  const currentIndexRef = useRef<number>(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef<any>()),
    [],
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction: string, nameToDelete: string, index: number) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    setShowImage(true);
    setTimeout(() => setShowImage(false), 3000);
  };

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= idx) {
      childRefs[idx].current?.restoreCard();
    }
  };

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current?.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  // Add event listener for key presses
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        swipe("right");
      } else if (event.key === "ArrowLeft") {
        swipe("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]); // Re-run the effect when currentIndex changes

  return (
    <div>
      <div className="text-3xl">
        <div>Pump Or Dump</div>
      </div>
      <div className="fixed left-0 right-0 flex justify-center items-center pt-96">
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.name}
            onSwipe={dir => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div className="card shadow-lg w-full h-[400px] flex justify-center items-center bg-[#0d0c11] rounded-3xl border border-1 border-slate-700/50">
              <div className="flex flex-col w-full h-full justify-start items-center">
                <p className="text-3xl font-bold text-white">{character.name}</p>
                <div className="bg-white rounded-xl relative">
                  <div className="bg-[#0d0c11] h-full w-full z-1">
                    <img src={character.url} alt={character.name} className="w-[300px] h-[300px] object-cover" />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0d0c11]/70 to-[#0d0c11]">
                      <div className="mt-5 mr-5">
                        <div className="">
                          <TinderDrawer />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex flex-row gap-10">
                    <a
                      className="active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100"
                      onClick={() => swipe("left")}
                    >
                      <DumpIcon />
                    </a>
                    <a
                      className="active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100"
                      onClick={() => goBack()}
                    >
                      <BackIcon />
                    </a>
                    <a
                      className="active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100"
                      onClick={() => swipe("right")}
                    >
                      <PumpIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection && showImage ? (
        <p
          key={lastDirection}
          className={`infoText item-center text-2xl font-bold ${lastDirection === "left" ? "text-red-500" : lastDirection === "right" ? "text-green-500" : ""}`}
        >
          {lastDirection === "right" && (
            <div className="relative overflow-hidden rounded-lg mt-12 animate__animated animate__bounceOutRight">
              <div className="rounded-lg overflow-hidden">
                <PumpImage />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110c0f] to-transparent rounded-lg"></div>
              </div>
            </div>
          )}
          {lastDirection === "left" && (
            <div className="relative overflow-hidden rounded-lg mt-12 animate__animated animate__bounceOutLeft">
              <div className="rounded-lg overflow-hidden">
                <DumpImage />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110c0f] to-transparent rounded-lg"></div>
              </div>
            </div>
          )}
          {lastDirection === "up" && (
            <div className="relative overflow-hidden rounded-lg mt-12 animate__animated animate__bounceOutUp">
              <div className="rounded-lg overflow-hidden">
                <SuperPumpImage />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110c0f] to-transparent rounded-lg"></div>
              </div>
            </div>
          )}
          {lastDirection === "left" ? "" : lastDirection === "right" ? "" : lastDirection}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PumpOrDump;
