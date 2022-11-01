import React from "react";
import Link from "next/link";
import {BlogPost} from "@emer-blog/blog-post/entity";
import {CardImage} from "./CardImage";

export const Card: React.FC<{ post: BlogPost }> = ({post}) => {
  const {title, excerpt} = post

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <Link href={post.slug}>
        <CardImage url={post.imageUrl} title={post.title}/>
      </Link>
      <div className="p-5">
        <Link href={post.slug}>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
        </Link>
        <p className="font-normal text-gray-700 mb-3">{excerpt}</p>
      </div>
    </div>
  )
}
