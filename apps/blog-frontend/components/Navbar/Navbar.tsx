import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Searcher} from "../Searcher";
import {CategoriesFilterBar} from "./CategoriesFilterBar";

export const Navbar = () => {
  const [isCatOpen, setIsCatOpen] = React.useState(false)
  const router = useRouter()

  return (
    <>
      <nav className="flex justify-between px-20 py-10 items-center bg-white">
        <Link href="/">
          <h1 className="text-xl text-gray-800 font-bold cursor-pointer">CoolBlog</h1>
        </Link>
        <div className="flex items-center">
          <Searcher/>
          <ul className="flex items-center space-x-6">
            <li
              className={`font-semibold cursor-pointer ${router?.query?.categories ? "text-green-700" : "text-gray-700"}`}
              onClick={() => setIsCatOpen(!isCatOpen)}>
              Categories &#8964;
            </li>
          </ul>
        </div>
      </nav>
      {isCatOpen && (
        <CategoriesFilterBar/>
      )}
    </>
  )
}