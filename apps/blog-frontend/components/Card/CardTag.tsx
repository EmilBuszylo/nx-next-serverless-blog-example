import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {BlogCategoryEntity} from "@emer-blog/blog-category/entity";

export const CardTag = ({cat}: { cat: BlogCategoryEntity }) => {
  const router = useRouter()

  return (
    <Link href={
      {
        pathname: `${router.pathname}`,
        query: {categories: cat.slug}
      }
    }>
      <div
        className="text-green-700 font-semibold text-sm cursor-pointer hover:opacity-60 transition-[opacity]">{cat.name}</div>
    </Link>
  )
}
