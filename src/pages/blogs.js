import fs from "fs"
import matter from "gray-matter"
import Image from "next/image"
import Link from "next/link"

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync("posts")

  const posts = files.map(fileName => {
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8")
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts
    }
  }
}

function BlogCard({ slug, frontmatter }) {
  return (
    <div className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <Link href={`/post/${slug}`} legacyBehavior>
        <a>
          <Image
            width={650}
            height={340}
            alt={frontmatter.title}
            src={`/${frontmatter.socialImage}`}
          />
          <h1 className="p-4 font-bold">{frontmatter.title}</h1>
        </a>
      </Link>
    </div>
  )
}

export default function Blogs({ posts }) {
  return (
    <div className="flex flex-col item-center gap-8">
      <h1 className="text-center p-5 text-2xl sm:text-4xl md:text-6xl">
        BLOGS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
        {posts?.map(({ slug, frontmatter }) => (
          <BlogCard key={slug} slug={slug} frontmatter={frontmatter} />
        ))}
      </div>
      <Link
        className="self-center px-8 py-3 rounded border-2 border-white m-4 font-bold "
        href={`/`}
      >
        Go Back
      </Link>
    </div>
  )
}
