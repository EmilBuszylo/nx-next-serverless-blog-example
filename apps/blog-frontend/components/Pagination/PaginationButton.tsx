import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {DEFAULT_LIMIT, DEFAULT_PAGE} from "./consts";

export const PaginationButton: React.FC<{ page?: number }> = ({page, children}) => {
  const router = useRouter()
  const currentPage = router.query?.page ? Number(router.query.page) : DEFAULT_PAGE


  if (!page) return (
    <a><span
      className="px-3 py-2 border border-gray-300 rounded focus:outline-none">{children}</span></a>
  )


  if (currentPage === page) return (
    <a><span
      className="px-3 py-2 border border-gray-300 rounded bg-blue-500 text-white">{children}</span></a>
  )

  return (
    <Link href={{
      pathname: `${router.pathname}`,
      query: {page: page, limit: router.query?.limit ?? DEFAULT_LIMIT}
    }}
    >
      <span className="border border-gray-300 rounded px-3 py-2 hover:bg-gray-100 cursor-pointer">
     {children}
      </span>
    </Link>
  )
}
