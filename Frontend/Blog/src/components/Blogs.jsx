import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Categories from "./Categories";
import { getTopPost, getlatestPost } from "../endpoint/api";
import { IoMenuOutline } from "react-icons/io5";
import cancel from "../assets/icons8-cross-24.png";

const Blogs = () => {
  const [topPosts, setTopPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchTopPosts = async () => {
      try {
        const post = await getTopPost();
        setTopPosts(post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopPosts();

    const fetchlatestPosts = async () => {
      try {
        const post = await getlatestPost();
        setLatestPosts(post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchlatestPosts();
  }, []);

  return (
    <div className="mt-80 md:mt-40 sm:mt-16  mx-auto flex flex-col  w-fit p-4 rounded-xl gap-y-4 ">
      <div className="lg:flex md:flex   items-center  w-full">
        <div className="sm:flex sm:gap-x-20 sm:justify-between   sm:items-center">
          <div className="flex items-center">
            <p className="lg:text-3xl  font-bold text-red-700 lg:pr-5 md:pr-5 sm:pr-5 md:text-2xl sm:text-xl">
              BLOGIFY SPACE
            </p>

            <p className="text-13 border-1 bg-red-600 text-white p-2 rounded-lg">Discover</p>
          </div>
          <IoMenuOutline
            onClick={() => setShow(true)}
            className="lg:hidden md:hidden sm:flex sm:w-7 sm:h-7"
          />
        </div>

        <div
          className={`lg:flex md:flex gap-x-10  ${
            show
              ? "sm:flex sm:flex-col  sm:p-3 sm:rounded-md sm:z-1  sm:absolute sm:w-90%   sm:h-fit sm:bg-dark-white sm:text-black"
              : "sm:hidden"
          }`}
        >
          <div className="flex justify-end">
            {show ? <img src={cancel} onClick={() => setShow(false)} className="w-7 h-7 " /> : ""}
          </div>
          <Categories show={show} setShow={setShow} />
        </div>
      </div>
      <div>
        <h1 className="text-2xl pl-3 pb-2 font-bold">Trending Posts</h1>
        <BlogList blog={topPosts} />
      </div>
      <div className="pt-10">
        <h1 className="text-2xl pl-3 pb-2 font-bold">Latest Posts</h1>
        <BlogList blog={latestPosts} />
      </div>
    </div>
  );
};

export default Blogs;
