import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {DEFAULT_LIMIT, DEFAULT_PAGE} from "./consts";

export const PaginationButton: React.FC<{ page?: number }> = ({page, ...props}) => {
  const router = useRouter()
  const currentPage = router.query?.page ? Number(router.query.page) : DEFAULT_PAGE


  if (!page) return (
    <div> <span
      className="px-3 py-2 border border-border-default rounded bg-gray-100 opacity-40 focus:outline-none" {...props}/>
    </div>
  )


  if (currentPage === page) return (
    <div>
    <span
      className="px-3 py-2 border border-border-default rounded bg-accent-default text-white" {...props}/>
    </div>
  )

  return (
    <Link href={{
      pathname: `${router.pathname}`,
      query: {...router.query, page, limit: router.query?.limit ?? DEFAULT_LIMIT}
    }}
    >
      <span className="border border-border-default rounded px-3 py-2 hover:bg-gray-100 cursor-pointer" {...props}/>
    </Link>
  )
}
