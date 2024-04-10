import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "../styles/style";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/products/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${style.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/products/${product_name}`} className="">
          <h4 className="line-clamp-2 font-[500] ">{data.name}</h4>
          <div className="flex mt-3">
            <AiFillStar
              className="mr-3 cursor-pointer"
              color="#f6b800"
              size={20}
            />

            <AiFillStar
              className="mr-3 cursor-pointer"
              color="#f6b800"
              size={20}
            />
            <AiFillStar
              className="mr-3 cursor-pointer"
              color="#f6b800"
              size={20}
            />
            <AiFillStar
              className="mr-3 cursor-pointer"
              color="#f6b800"
              size={20}
            />
            <AiOutlineStar
              className="mr-3 cursor-pointer"
              color="#f6b800"
              size={20}
            />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${style.productDiscountPrice}`}>
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <h4 className={`${style.price}`}>
                {data.price ? data.price + "$" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} sold
            </span>
          </div>
        </Link>
        {/* side section  */}
        <div>
          {click ? (
            <button className="rounded-full w-[35px] h-[35px] cursor-pointer absolute right-2 top-4 flex items-center justify-center hover:bg-gray-300 group">
              <AiFillHeart
                className="group-hover:text-[25px] text-[22px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setClick(!click);
                }}
                color={click ? "red" : "#333"}
                title="Remove from wishlist"
              />
            </button>
          ) : (
            <button className="rounded-full w-[35px] h-[35px] cursor-pointer absolute right-2 top-4 flex items-center justify-center hover:bg-gray-300 group">
              <AiOutlineHeart
                className="group-hover:text-[25px] text-[22px]"
                onClick={(e) => {
                  e.stopPropagation();
                  setClick(!click);
                }}
                color={click ? "red" : "#333"}
                title="Add to wishlist"
              />
            </button>
          )}
          <button className="rounded-full w-[35px] h-[35px] cursor-pointer absolute right-2 top-[50px] flex items-center justify-center hover:bg-gray-300 group">
            <AiOutlineEye
              className="group-hover:text-[25px] text-[22px]"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              color="#333"
              title="Quick view"
            />
          </button>

          <button className="rounded-full w-[35px] h-[35px] cursor-pointer absolute right-2 top-[85px] flex items-center justify-center hover:bg-gray-300 group">
            <AiOutlineShoppingCart
              className="group-hover:text-[25px] text-[22px] duration-150"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              color="#444"
              title="Add to cart"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
