import React from "react";
import Link from "next/link";
import {CardImage} from "./CardImage";
import {BlogPostWithCategories} from "../../pages";
import {CardTag} from "./CardTag";

export const Card: React.FC<{ post: BlogPostWithCategories }> = ({post}) => {
  const {title, excerpt, categories} = post

  return (
    <div className="bg-white rounded-xl shadow-md border border-border-light rounded-lg max-w-sm mb-5">
      <Link href={{pathname: `blog/${post.slug}`}}>
        <CardImage url={post.imageUrl} title={post.title}/>
      </Link>
      <div className="p-5 space-y-1">
        <div className="flex items-center space-x-2">
          {categories.map(cat => (
            <CardTag key={cat.id} cat={cat}/>
          ))}
        </div>
        <Link href={post.slug}>
          <h5 className="block text-font-default font-bold text-xl tracking-tight mb-2">{title}</h5>
        </Link>
        <p className="font-normal text-font-light mb-3">{excerpt}</p>
      </div>
    </div>
  )
}
