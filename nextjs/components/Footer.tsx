import { useCallback, useRef, useState } from "react";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import WalletIcon from "./assets/icons/WalletIcon";
import SearchIcon from "./assets/SearchIcon";
import SettingsIcon from "./assets/SettingsIcon";

const Footer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="fixed inset-x-0 bottom-0 navbar bg-[#0d0c11] min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-full flex justify-around py-2 shadow-md items-center">
        
      <a className="active:bg-[#F57DE3]/50 active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100" href="/settings">
          <SettingsIcon className="h-8 w-8 text-red-500" />
        </a>

        <a className="active:bg-[#F57DE3]/50 active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100" href="/">
         <SearchIcon/>
        </a>
        {/* <Link href="/" passHref className="flex flex-col items-center">
          <div className="flex relative w-8 h-8">
            <Image alt="Home" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <span className="text-xs">Home</span>
        </Link> */}
        <a className="active:bg-[#F57DE3]/50 active:scale-90 transition-transform duration-200 ease-in-out transform active:duration-100" href="/user">
        <WalletIcon className="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;