import React from "react";
import {CategoriesFilterBar} from "./CategoriesFilterBar";

export const Categories = () => {
  const [isCatOpen, setIsCatOpen] = React.useState(false)

  return (
    <>
      <div className="flex flex-col md:hidden items-center">
        <button
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-accent-default rounded-lg my-5"
          onClick={() => setIsCatOpen(!isCatOpen)}
        >
          Categories <svg className="w-3 h-3 inline-flex ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path>
        </svg>
        </button>
        <CategoriesFilterBar isOpen={isCatOpen}/>
      </div>
      <div className="hidden md:block">
        <CategoriesFilterBar isOpen/>
      </div>
    </>
  )
}
