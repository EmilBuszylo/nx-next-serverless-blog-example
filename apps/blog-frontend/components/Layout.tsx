import {Navbar} from "./Navbar/Navbar";

export const Layout = ({children}) => {

  return (
    <>
      <Navbar/>
      <main>
        <div className="section relative pt-8 pb-8 md:pt-16 md:pb-0 bg-white">
          <div className="container xl:max-w-6xl mx-auto px-4">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
