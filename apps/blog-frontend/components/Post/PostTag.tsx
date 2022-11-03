import React from "react";
import Link from "next/link";
import {BlogCategoryEntity} from "@emer-blog/blog-category/entity";

export const PostTag = ({cat}: { cat: BlogCategoryEntity }) => {
  return (
    <Link href={
      {
        pathname: "/",
        query: {categories: cat.slug}
      }
    }>
      <div
        className="text-accent-default font-semibold text-md cursor-pointer hover:opacity-60 transition-[opacity]">{cat.name}</div>
    </Link>
  )
}
