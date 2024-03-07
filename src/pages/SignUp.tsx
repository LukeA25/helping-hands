import { useContext, useRef, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/HelpingHandsLogo.png";
import { UserContext } from "../UesrContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setSignedIn } = useContext(UserContext);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignedIn(true);
    navigate("/");
  };

  return (
    <div className="bg-theme-gray w-screen pt-8">
      <form
        className="flex flex-col bg-white w-1/3 p-8 m-auto rounded-md shadow-lg"
        onSubmit={submitHandler}
      >
        <div className="w-full flex justify-center">
          <img src={logo} alt="Helping Hands Logo" className="w-2/3" />
        </div>
        <h1 className="text-4xl text-center my-2 font-bitter font-bold">
          HelpingHands
        </h1>
        <div className="flex flex-row w-full justify-between mt-4">
          <label htmlFor="email-input" className="text-xl">
            Email
          </label>
          <p>
            {"Need an account? "}
            <button
              type="button"
              onClick={() => navigate("/signup", { replace: true })}
              className="font-bold duration-300 transition-colors text-[#fc8d06] hover:text-[#ff9a1e] active:text-[#dc7b04]"
            >
              Sign Up
            </button>
          </p>
        </div>
        <input
          id="email-input"
          type="email"
          className="border-black border-[1px] focus:border-2 bg-white focus:bg-gray-100 transition-colors duration-300 mx-auto text-black w-full rounded-sm text-xl pl-2 py-2 mb-4 mt-1 z-10"
          required
          ref={emailRef}
        />
        <div className="flex flex-row w-full justify-between">
          <label htmlFor="password-input" className="text-xl">
            Password
          </label>
          <button
            type="button"
            className="flex flex-row"
            onClick={togglePassword}
          >
            {showPassword ? (
              <BiHide size="30" className="flex-shrink-0 mr-1" />
            ) : (
              <BiShow size="30" color="black" className="flex-shrink-0 mr-1" />
            )}
            <p className="pt-[0.2rem]">{showPassword ? "Hide" : "Show"}</p>
          </button>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          id="password-input"
          className="border-black border-[1px] focus:border-2 bg-white focus:bg-gray-100 transition-colors duration-300 mx-auto text-black w-full rounded-sm text-xl pl-2 py-2 mb-2 mt-1 z-10"
          required
          ref={passwordRef}
        />
        <button className="w-48 h-12 m-auto mt-4 bg-[#fc8d06] hover:bg-[#ff9a1e] active:bg-[#dc7b04] rounded-md transition-all duration-200 text-white text-xl sm:text-2xl">
          Submit
        </button>
        <button
          type="button"
          className="font-bold duration-300 transition-colors text-[#fc8d06] hover:text-[#ff9a1e] active:text-[#dc7b04] mt-4"
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default SignUp;
