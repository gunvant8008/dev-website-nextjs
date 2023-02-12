import Link from "next/link"
import React from "react"

const Hero = () => {
  return (
    <div className="flex flex-col">
      <p className="ml-8 ">
        Namaste <span className="animate-pulse text-2xl">🙏</span>, I am
      </p>

      <section className="dark:border-white mt-1">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32">
          <h1 className="text-3xl font-bold leading-none sm:text-5xl">
            Gunvant Sharma-/
            <span className="dark:text-yellow-500 text-white animate-pulse">
              Web Developer-/
            </span>
            FRONT-END ENGINEER
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg font-bold">
            CURRENT FAMILY- HTML, CSS, JAVASCRIPT, REACTJS, NEXTJS, TAILWIND,
            SASS
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              className="self-center px-8 py-3 rounded border-2 border-white m-1 font-bold"
              href={`/projects`}
            >
              <span>PROJECTS</span>
            </Link>
            <Link
              className="self-center px-8 py-3 rounded border-2 border-white m-1 font-bold"
              href={`/blogs`}
            >
              BLOGS
            </Link>
          </div>
          <h1 className="m-4 p-2 bg-white dark:bg-gray-700">
            MISSION- TO ADD VALUE IN THE ORGANIZATION & THE TEAM I AM WORKING
            WITH.
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Hero
