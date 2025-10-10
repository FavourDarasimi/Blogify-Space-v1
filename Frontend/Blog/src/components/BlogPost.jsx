import React from "react";

const BlogPost = ({ post }) => {
  return (
    <div key={post.id} className="relative ">
      <img
        src={`${post.image}`}
        alt={post.title}
        className="lg:w-80 lg:h-60 md:w-80 md:h-60 sm:w-full sm:h-40 rounded-xmd brightness-50"
      />
      <div className="p-5  absolute bottom-0  text-white">
        <p className=" w-fit font-bold px-2 py-1 rounded-md   lg:text-16 md:text-15 sm:text-13 bg-red-600">
          {post.category}
        </p>
        <p className="text-xs font-semibold pt-2 sm:pt-1 pl-3 text-textcol">
          {post.time_since_created}
        </p>
        <p className="pt-2 lg:text-18 md:text-16 sm:text-13 sm:pt-1 font-bold">{post.title}</p>
      </div>
    </div>
  );
};

export default BlogPost;
