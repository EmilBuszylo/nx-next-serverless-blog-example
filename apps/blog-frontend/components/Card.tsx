import React from "react";
import {BlogPost} from "@emer-blog/blog-post/entity";

export const Card: React.FC<{ post: BlogPost }> = ({post}) => {
  const {title, excerpt} = post

  return (
    <div
      className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{title}</h3>
      <p className="text-gray-500">{excerpt}</p>
    </div>
  )
}
