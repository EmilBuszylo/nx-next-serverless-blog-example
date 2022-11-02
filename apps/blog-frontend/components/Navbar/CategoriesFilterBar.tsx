import React from "react";
import {BlogCategoryEntity} from "@emer-blog/blog-category/entity";
import {useRouter} from "next/router";
import {DEFAULT_LIMIT, DEFAULT_PAGE} from "../Pagination/consts";

export const CategoriesFilterBar = () => {
  const router = useRouter()

  const queryCats = router?.query?.categories
  const [categories, setCategories] = React.useState<BlogCategoryEntity[]>([])
  const [currentCategories, setCurrentCategories] = React.useState<string[]>(queryCats ? queryCats?.toString().split(",") : [])

  React.useEffect(() => {
    fetch(`${process.env.BLOG_API_URL}/categories`)
      .then((res) => res.json() as BlogCategoryEntity[])
      .then((data) => {
        setCategories(data)
      })
  }, [])

  React.useEffect(() => {
    if (queryCats !== currentCategories.join(",")) {
      router.push({
        pathname: router.pathname,
        query: {page: DEFAULT_PAGE, limit: DEFAULT_LIMIT, categories: currentCategories.join(",")}
      })
    }
  }, [currentCategories, router.pathname])

  const onCategorySelect = (slug: string) => {
    if (!currentCategories.includes(slug)) {
      return setCurrentCategories((prev) => [...prev, slug])
    }
    return setCurrentCategories((prev) => prev.filter(c => c !== slug))
  }

  return (
    <div className="flex justify-end px-20 py-5 items-center bg-gray-300">
      {
        categories.map(c => (
          <div
            key={c.id}
            onClick={() => onCategorySelect(c.slug)}
            className={`ml-4 text-xs font-bold leading-sm uppercase px-3 py-1 rounded-full  border cursor-pointer ${currentCategories.includes(c.slug) ? "bg-green-200 text-green-700" : "bg-white text-gray-700"} `}
          >
            {c.name}
          </div>
        ))
      }
    </div>
  )
}
