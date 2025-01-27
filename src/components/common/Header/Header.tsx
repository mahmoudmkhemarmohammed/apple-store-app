import { useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import HeaderWishlist from "./HeaderWishlist";
import HeaderCart from "./HeaderCart";
const Header = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setNav(false);
  }, [pathname]);

  return (
    <header className="bg-white h-[85px] sticky top-0 z-[10000]">
      <div className="container flex justify-between items-center h-full">
        <div className="logo">
          <Link to={"/"}>
            <FaApple className="text-[55px] text-[#00aaff] max-lg:text-[50px]" />
          </Link>
        </div>

        <Nav nav={nav} accessToken={accessToken}/>

        <div className="icons flex justify-between items-center gap-2">
          {accessToken && (
            <Link to={"/profile"} className="relative mr-3">
              <RiAccountCircle2Fill className="text-[37px] text-[#ff0059]" />
            </Link>
          )}

          <HeaderWishlist />

          <HeaderCart />
        </div>

        <div className="bars hidden max-lg:block">
          {nav ? (
            <IoIosCloseCircle
              className="text-[35px] text-red-700"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <HiMiniBars3BottomRight
              className="text-[35px] text-[#00aaff]"
              onClick={() => setNav(!nav)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
