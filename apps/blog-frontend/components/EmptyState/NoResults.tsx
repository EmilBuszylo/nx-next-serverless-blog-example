import Link from "next/link";

export const NoResults = () => (
  <section className="flex items-center h-full p-16 ">
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl">
          No Results
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find what you ask.</p>
        <p className="mt-4 mb-8">But dont worry, you can find other cool article!</p>
        <Link href="/">
          <span className="px-8 py-3 font-semibold rounded">Back to homepage</span>
        </Link>
      </div>
    </div>
  </section>
)
