import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/style";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${style.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${style.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize `}
        >
          {" "}
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Laborum eveniet quam sunt iste animi natus dolorem aut nemo <br />{" "}
          debitis nulla voluptatibus minima et, <br /> distinctio omnis
          inventore accusantium itaque? Tenetur, ullam?
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${style.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text[18px]">
              Shop now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
