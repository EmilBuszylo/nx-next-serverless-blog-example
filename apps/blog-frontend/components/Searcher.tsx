import React from 'react'
import {useRouter} from 'next/router'
import {DEFAULT_LIMIT, DEFAULT_PAGE} from "./Pagination/consts";

export const Searcher = ({}) => {
  const router = useRouter()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value
    if (val && val.length > 2) {
      return router.push({
        pathname: `${router.pathname}`,
        query: {page: router.query?.page ?? DEFAULT_PAGE, limit: router.query?.limit ?? DEFAULT_LIMIT, terms: val}
      })
    }
  }

  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search"
             placeholder="Search..." onChange={onChange}/>
    </div>
  )
}
