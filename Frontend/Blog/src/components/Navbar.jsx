import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { logout } from "../endpoint/api";
import { IoMenuOutline } from "react-icons/io5";
import cancel from "../assets/icons8-cross-24.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ setShowLogin }) => {
  const { checkIfUserIsAuth, setShowCreatePost, isAuth, setIsAuth } = useContext(Context);
  const nav = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchIsAuhStatus = async () => {
      const isAuthStatus = await checkIfUserIsAuth();
    };
    fetchIsAuhStatus();
  }, [isAuth]);

  const handlelogout = async () => {
    const out = await logout();
    toast.success("User logged out");
    nav("/");
    setIsAuth(false);
  };
  return (
    <div className=" px-5 py-3  w-full  bg-no-repeat sm:overflow-hidden text-black ">
      <nav className="lg:flex lg:justify-between  md:flex md:justify-between sm:overflow-hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">BLOGIFY SPACE</h1>
          <IoMenuOutline onClick={() => setShow(true)} className="lg:hidden md:hidden  w-8 h-8 " />
        </div>
        <div
          className={`lg:flex md:flex lg:gap-x-10 md:gap-x-5 lg:items-center md:items-center  font-semibold  ${
            show
              ? "sm:flex sm:flex-col sm:gap-y-3 sm:p-3 sm:rounded-md sm:z-1  sm:absolute sm:w-90%   sm:h-fit sm:bg-dark-white sm:text-black"
              : "sm:hidden"
          }`}
        >
          <div className="flex">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <div className="flex justify-end w-full lg:hidden md:hidden ">
              <img src={cancel} onClick={() => setShow(false)} />
            </div>
          </div>

          {isAuth ? (
            <div className="lg:flex lg:flex-row lg:gap-x-10 md:flex md:flex-row md:gap-x-5 sm:flex sm:flex-col sm:gap-y-3">
              <h3 className="cursor-pointer" onClick={() => setShowCreatePost(true)}>
                Create Post
              </h3>
              <Link to="/saved/post/">
                <h3>Saved Post</h3>
              </Link>
              <Link to="/profile/">
                <h3>Profile</h3>
              </Link>
              <h3 onClick={() => handlelogout()} className="cursor-pointer">
                Logout
              </h3>
            </div>
          ) : (
            <Link to="/login/">
              <button>Login /Signup</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
