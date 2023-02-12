import React from "react"
import projectsData from "@/data/projectsData"
import Link from "next/link"

function ProjectCard({ project }) {
  return (
    <div className="border border-gray-200 m-2 rounded-xl shadow-lg shadow-gray-500 overflow-hidden flex p-8">
      <div>
        <img src="" />
      </div>
      <div>
        <p>{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        <div>
          <Link href="#">CODE</Link>
          <Link href="#">DEMO</Link>
        </div>
      </div>
    </div>
  )
}

const projects = () => {
  return (
    <div className="flex flex-col item-center gap-8 mt-0">
      <h1 className="text-center p-5 text-2xl sm:text-4xl md:text-6xl">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
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

export default projects
