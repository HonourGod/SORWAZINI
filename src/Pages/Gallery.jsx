import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { Link, useLocation } from "react-router-dom";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import { gallery } from "../Content/Content";

function Gallery() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
    // filter: blur(5px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <div className=" bg-light-body-color min-h-[100vh] w-full text-text-dark-color flex flex-col relative overflow-x-clip  ">
      {/* Menu */}
      <Menu />

      {/* Body */}
      <div
        id="Challenges"
        className="h-full scroll-mt-24 max-sm:mt-[50px] w-full flex items-center relative justify-start flex-col"
      >
        {/* Hero section */}
        <div className="min-h-[300px] w-full h-full flex flex-col items-center justify-center ">
          <Reveal
            keyframes={customAnimation}
            duration={1000}
            cascade
            damping={0.05}
            // triggerOnce
          >
            <h1 className="text-center max-w-[900px]  font-bold text-[70px] max-sm:text-[50px] leading-[80px] max-sm:leading-[55px] tracking-tighter">
              {gallery.SectionTitle}
            </h1>
            <p className="font-medium max-w-[500px]  text-center pt-2 max-sm:pt-2 tracking-normal leading-5 max-sm:px-5 ">
              {gallery.SectionDescription}
            </p>
          </Reveal>
        </div>

        {/* images grid */}
        <div className="columns-3 w-full max-w-[1000px] space-y-5 h-fit pb-10">
            {gallery.Images.map((image, index) => (
              <div className="relative group cursor-pointer">
              <span className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-3xl bg-stone-400/50 opacity-0 group-hover:opacity-100 transition duration-300  "></span>
                <img src={image} key={index} className="rounded-3xl  " />
              </div>
            ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Gallery;
