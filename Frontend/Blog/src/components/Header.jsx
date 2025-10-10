import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center   ">
      <div className="lg:w-50% md:w-70% sm:w-90% lg:mt-40 md:mt-20 sm:mt-10 ">
        <h1 className="lg:text-6xl md:text-6xl text-center font-bold sm:text-4xl">BLOGIFY SPACE</h1>
        <div>
          <h3 className="lg:text-2xl md:text-xl sm:text-xs text-center">
            Discover a world of insights,inspiration and innovation at BLOGIFY SPACE.Our Blog is
            dedicated to bringing you the latest trends,tips and stories from the world
            Tech,Fashion,Food and so on. Wheher you're a seasoned expert or just starting out,
            you'll find something here to spark your curiosity and fuel your passion
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
