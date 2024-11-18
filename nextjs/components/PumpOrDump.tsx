import React, { useEffect, useMemo, useRef, useState } from "react";
import DB from "../data/db";
import DumpImage from "./assets/DumpImage";
import PumpImage from "./assets/PumpImage";
import SuperPumpImage from "./assets/SuperPumpImage";
import BackIcon from "./assets/icons/BackIcon";
import DumpIcon from "./assets/icons/DumpIcon";
import PumpIcon from "./assets/icons/PumpIcon";
import TinderDrawer from "./tinder-drawer";
import "animate.css";
import TinderCard from "react-tinder-card";

export function PumpOrDump() {
  const [currentIndex, setCurrentIndex] = useState<number>(DB.length - 1);
  const [lastDirection, setLastDirection] = useState<string | undefined>();
  const [showImage, setShowImage] = useState<boolean>(false);
  const currentIndexRef = useRef<number>(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(DB.length)
        .fill(0)
        .map(() => React.createRef<any>()),
    [],
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < DB.length - 1;
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
    if (canSwipe && currentIndex < DB.length) {
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
      } else if (event.key === "ArrowUp") {
        swipe("up");
      } else if (event.key === "ArrowDown") {
        swipe("down");
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
        {DB.map((character, index) => (
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
                          <TinderDrawer ticker={"BTC"}/> 
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
          {lastDirection === "down" && (
            <div className="relative overflow-hidden rounded-lg mt-12 animate__animated animate__bounceOutDown">
              <div className="rounded-lg overflow-hidden">
                <DumpImage /> {/* Replace with a different image if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#110c0f] to-transparent rounded-lg"></div>
              </div>
            </div>
          )}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PumpOrDump;
