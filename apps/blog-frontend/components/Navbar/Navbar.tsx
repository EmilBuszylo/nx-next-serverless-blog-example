import {Searcher} from "../Searcher";

export const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-white">
      <h1 className="text-xl text-gray-800 font-bold">CoolBlog</h1>
      <div className="flex items-center">
        <Searcher/>
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">Home</li>
          <li className="font-semibold text-gray-700">Articles</li>
        </ul>
      </div>
    </nav>
  )
}
