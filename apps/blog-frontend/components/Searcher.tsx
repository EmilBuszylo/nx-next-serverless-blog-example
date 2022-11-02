import React from 'react'
import {useRouter} from 'next/router'

export const Searcher = ({}) => {
  const router = useRouter()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value
    if (val && val.length > 2) {
      return router.push({
        pathname: router.pathname,
        query: {terms: val}
      })
    }
    if (!val) {
      return router.push({
        pathname: router.pathname,
      })
    }
  }

  return (
    <form className="flex items-center relative bg-white border border-gray-300 rounded-md px-4 py-2 md:mr-2">
      <svg xmlns="http://www.w3.org/2000/svg"
           className="absolute left-1 0-4 h-5 w-5 pt-0.5 text-gray-300" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      <input
        className="ml-4 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..."
        onChange={onChange}/>
    </form>
  )
}
