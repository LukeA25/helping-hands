import RightClickLogo from "../assets/HelpingHandsLogo.png";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from "react";
import { UserContext } from "../UesrContext";

const MainNavigation = () => {
  const location = useLocation();
  const { signedIn } = useContext(UserContext);

  /*
  #00364a
  #fc8d06
  #f2ed6f
  #004d65
   */
  return (
    <header className="flex items-center justify-between px-[10vw] h-20 w-screen bg-[#f2ed6f] font-bitter">
      <Link
        to="/"
        replace
        className="hover:cursor-pointer flex items-center gap-2"
      >
        <img src={RightClickLogo} alt="" className="w-16" />
        <h1 className="text-2xl font-bold">HelpingHands</h1>
      </Link>
      <nav className="flex gap-4 sm:gap-8 sm:text-lg items-center justify-center h-full">
        <Link
          replace
          to="/"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent hover:border-b-[#fc8d06] duration-300 ${
            location.pathname === "/" && "border-b-[#fc8d06] font-medium"
          }`}
        >
          Home
        </Link>
        <Link
          replace
          to="/events"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent hover:border-b-[#fc8d06] duration-300 ${
            location.pathname.startsWith("/events") &&
            "border-b-[#fc8d06] font-medium"
          }`}
        >
          Events
        </Link>

        {signedIn ? (
          <div className="flex justify-end items-center h-full border-y-4 border-y-transparent">
            <CgProfile size="32" className="mr-2" />
            <p className="text-right">
              Welcome, <span className="text-[#fc8d06] font-bold">Judge</span>!
            </p>
          </div>
        ) : (
          <Link
            replace
            to="/signup"
            className={`white-button h-full flex items-center border-y-4 border-y-transparent hover:border-b-[#fc8d06] duration-300 ${
              location.pathname.startsWith("/signup") &&
              "border-b-[#fc8d06] font-medium"
            }`}
          >
            Sign Up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
