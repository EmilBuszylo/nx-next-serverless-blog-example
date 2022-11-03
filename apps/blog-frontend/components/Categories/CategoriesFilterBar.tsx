import React from "react";
import {useRouter} from "next/router";
import {BlogCategoryEntity} from "@emer-blog/blog-category/entity";

export const CategoriesFilterBar = ({isOpen}: { isOpen: boolean }) => {
  const router = useRouter()

  const queryCats = router?.query?.categories?.length ? router.query.categories.toString().split(",") : []
  const [categories, setCategories] = React.useState<BlogCategoryEntity[]>([])

  React.useEffect(() => {
    fetch(`${process.env.BLOG_API_URL}/categories`)
      .then((res) => res.json() as BlogCategoryEntity[])
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const onSelectCat = async (c: BlogCategoryEntity) => {
    if (!queryCats.includes(c.slug)) {
      const newCats = [...queryCats]
      newCats.push(c.slug)
      return router.push({
        pathname: router.pathname,
        query: {categories: newCats.join(",")}
      })
    }

    if (queryCats.length <= 1) {
      return router.push({
        pathname: router.pathname,
      })
    }

    return router.push({
      pathname: router.pathname,
      query: {categories: queryCats.filter(e => e !== c.slug).join(",")}
    })
  }


  if (!isOpen) {
    return (
      <div
        className="transition-[height] duration-500 ease-in-out h-0"
      ></div>
    )
  }

  return (
    <div
      className="transition-[height] duration-500 ease-in-out h-72 md:h-auto overflow-auto md:overflow-hidden mb-5 mb:my-0">
      <div
        className="flex flex-col space-y-2 md:space-y-0 md:flex-row flex-wrap justify-center px-20 py-5 items-center pb-12 bg-gray-200 md:bg-white ">
        {
          categories.map(c => {
              const isActive = queryCats.includes(c.slug)
              return (
                <div
                  key={c.id}
                  onClick={async () => onSelectCat(c)}
                  className={`md:ml-4 w-full md:w-auto text-center text-xs font-bold leading-sm uppercase px-3 md:px-3 py-2 md:py-1 rounded-full border cursor-pointer ${isActive ? "bg-green-200 text-green-700" : "bg-white text-gray-700"} `}
                >
                  {c.name}
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}
