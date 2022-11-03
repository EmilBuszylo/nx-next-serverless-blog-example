import React from "react";
import Link from "next/link";
import {Searcher} from "../Searcher";

export const Navbar = () => (
  <>
    <nav className="flex justify-between px-4 md:px-20 py-4 md:py-10 items-center bg-white">
      <Link href="/">
        <h1 className="text-xl text-font-default font-bold cursor-pointer">CoolBlog</h1>
      </Link>
      <div className="flex items-center">
        {/* desktop environment*/}
        <div className="hidden md:block">
          <Searcher searchId="searcher-desktop"/>
        </div>
      </div>
    </nav>
    <div className="block md:hidden px-4 py-4">
      {/*mweb environment */}
      <Searcher searchId="searcher-mobile"/>
    </div>
  </>
)

