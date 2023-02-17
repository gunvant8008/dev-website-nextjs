import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"
import Link from "next/link"

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = fs.readdirSync("posts")
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(".md", "")
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content
    }
  }
}

// at build, call getStaticProps for every path. Render the react component with this data for every path
// store the result in a static html/js file.

export default function PostPage({ frontmatter, content }) {
  return (
    <div className="prose mt-20 p-10  flex flex-col items-center justify-center w-[95vw] ">
      <h1 className="text-2xl md:text-4xl dark:text-white ">
        {frontmatter.title}
      </h1>
      <div
        className=" w-[400px] sm:w-[500px]  md:w-[1200px] md:text-xl   bg-gray-300 p-10"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
      <Link
        className="self-center px-8 py-3 rounded border-2 border-white m-4 font-bold dark:text-white"
        href={`/blogs`}
      >
        Go Back
      </Link>
    </div>
  )
}

//  after build or compilation
// App.js
// <PostPage {...getStaticProps.props} />
