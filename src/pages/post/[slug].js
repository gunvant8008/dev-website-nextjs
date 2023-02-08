import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"

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
  console.log(frontmatter)
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  )
}

//  after build or compilation
// App.js
// <PostPage {...getStaticProps.props} />
