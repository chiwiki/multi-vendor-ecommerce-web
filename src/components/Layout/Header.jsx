import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/style";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { categoriesData, productData } from "../../static/data";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { DropDown, Navbar } from "../Layout";
const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${style.section}`}>
        <div className="hidden md:h-[50px] md:my-[20px] md:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="w-[60%] relative">
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${product_name}`} key={index}>
                        <div className="w-full flex items-start -py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className={`${style.button}`}>
            <Link to="/seller">
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="mt-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between bg-[#3321c8] h-[70px] w-screen
         `}
      >
        <div
          className={`${style.section} relative ${style.noramlFlex} justify-between`}
        >
          {/* category */}
          <div>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All categories
              </button>
              <IoIosArrowForward
                size={20}
                className={`absolute right-2 top-4 cursor-pointer ${
                  dropDown ? "rotate-90" : ""
                } transition `}
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {/* navitems */}
          <div className={`${style.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex gap-2">
            <div className={`${style.noramlFlex}`}>
              <div className="relative cursor-pointer mt-[15px]">
                <AiOutlineHeart size={30} className="text-white/85" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight flex items-center justify-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${style.noramlFlex}`}>
              <div className="relative cursor-pointer mt-[15px]">
                <AiOutlineShoppingCart size={30} className="text-white/85" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight flex items-center justify-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${style.noramlFlex}`}>
              <div className="relative cursor-pointer mt-[15px]">
                <CgProfile size={30} className="text-white/85" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
