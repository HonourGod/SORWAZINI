import React, { useState } from "react";
import SorwaziniLogo from "../assets/SORWAZINI-Logo-1.png";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Contacts, Challenges, Members, SORWAZINI } from "../Content/Content";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Menu() {
  const [showContact, setShowContact] = useState(false);
  const [copyButtonText, SetCopyButtonText] = useState("Copy");
  const location = useLocation();
  const [aboutUs, setAboutUs] = useState(1);

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      SetCopyButtonText("Copied!");
      setTimeout(() => {
        SetCopyButtonText("Copy");
      }, 1000);
    });
  };
  return (
    <>
      {/* Contact Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center ${
          showContact
            ? "z-30 opacity-100 transition duration-200 "
            : "-z-50 opacity-0 "
        } `}
      >
        <div
          onClick={() => setShowContact(false)}
          className="bg-dark-body-color/20 w-full h-full absolute top-0 left-0 z-10"
        ></div>
        <div
          className={` w-fit max-w-[500px] h-fit shadow-xl rounded-3xl bg-white p-8  mx-auto z-20 overflow-clip transition duration-200 ${
            showContact ? "scale-100 " : "scale-50 "
          } `}
        >
          <h1 className=" font-medium text-base">Contact us via </h1>
          <div className="py-4 flex gap-2 items-start justify-start max-sm:flex-wrap">
            <a
              href={`https://wa.me/${Contacts.WhatsAppNumber}`}
              target="_blank"
              className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit transition bg-green-700 text-text-light-color rounded-full text-[30px]">
                <FaWhatsapp />
              </div>
              <p className="font-medium text-sm ">WhatsApp</p>
            </a>
            <a
              href={`https://www.instagram.com/${Contacts.InstagramUsername}/`}
              target="_blank"
              className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-red-500  text-text-light-color rounded-full text-[30px]">
                <IoLogoInstagram />
              </div>
              <p className="font-medium text-sm ">Instagram</p>
            </a>
            <a
              href={`mailto:${Contacts.Gmail}`}
              target="_blank"
              className=" w-full h-fit flex items-center justify-start flex-col gap-1 cursor-pointer"
            >
              <div className="p-2 w-fit bg-blue-500  text-text-light-color rounded-full text-[30px]">
                <MdOutlineEmail />
              </div>
              <p className="font-medium text-sm ">Gmail</p>
            </a>
          </div>
          <div className="w-full h-full flex flex-col ">
            <h1 className=" pt-5 font-medium text-base">Share The Link </h1>
            <input
              type="text"
              readOnly
              value={window.location.href}
              className=" my-2 py-2 px-4 font-medium w-full text-sm  bg-stone-200 rounded-full max-w-[300px]"
            />
            <button
              onClick={handleLinkCopy}
              className="font-medium cursor-pointer w-fit bg-dark-body-color text-light-body-color transition  active:scale-95 text-sm mt-1 py-2 px-5 rounded-full"
            >
              {copyButtonText}
            </button>
          </div>
        </div>
      </div>
      <div className={`h-fit w-full flex items-center  justify-between gap-4 py-4 px-[24px] top-0 z-20 `}>
        <Link
          to={`/`}
          className={`font-Kanit font-medium text-2xl flex flex-col leading-6 text-dark-body-color justify-center items-start `}
        >
          <img src={SorwaziniLogo} className="w-[180px]" />
          <p className={`text-sm pt-1 tracking-wide font-bold text-dark-body-color `}>
            E-lab Think Tank
          </p>
        </Link>

        <span className="space-x-6 max-md:hidden  ">
          <Link
            to="/#Home"
            className={`font-medium text-sm px-1 py-2 transition hover:border-b-[2px] `}
          >
            Home
          </Link>
          <Link
            to="/#who"
            className={`font-medium text-sm px-1 py-2 transition hover:border-b-[2px] `}
          >
            Who we are
          </Link>
          <Link
            to={`/elab`}
            className={`font-medium text-sm px-1 py-2 transition hover:border-b-[2px] `}
          >
            E-Lab Challenges
          </Link>
          <Link
            to={`/gallery`}
            className={`font-medium text-sm px-1 py-2 transition hover:border-b-[2px] `}
          >
            Gallery
          </Link>
          <a
            href="#Aboutus"
            className={`font-medium text-sm px-1 py-2 transition hover:border-b-[2px] `}
          >
            Our Product
          </a>
        </span>
        <span className="space-x-6 flex ">
          <Link
            to={`https://www.alueducation.com/`}
            className={`font-medium text-sm text-dark-body-color px-1 py-2 outline-none`}
          >
            <img
              src="https://ciradu2204.github.io/ALUWebsite/img/alu_logo_original.png"
              className="h-5"
            />
          </Link>
          <button
            onClick={() => setShowContact(true)}
            className={`max-md:hidden font-medium cursor-pointer  transition active:scale-95 text-sm py-2 px-5 rounded-full ${location.pathname === '/elab' ? 'text-dark-body-color bg-light-body-color' : 'bg-dark-body-color text-light-body-color'}`}
          >
            Contact us
          </button>
        </span>
      </div>
    </>
  );
}

export default Menu;
