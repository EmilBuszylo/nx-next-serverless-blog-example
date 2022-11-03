import React from "react";
import {CategoriesFilterBar} from "./CategoriesFilterBar";

export const Categories = () => {
  const [isCatOpen, setIsCatOpen] = React.useState(false)

  return (
    <>
      <div className="flex flex-col md:hidden items-center">
        <button
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 my-5"
          onClick={() => setIsCatOpen(!isCatOpen)}
        >
          Categories &#8964;
        </button>
        <CategoriesFilterBar isOpen={isCatOpen}/>
      </div>
      <div className="hidden md:block">
        <CategoriesFilterBar isOpen/>
      </div>
    </>
  )
}
