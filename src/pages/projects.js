import React from "react"
import projectsData from "@/data/projectsData"
import Link from "next/link"
import ArrowLogo from "@/components/logoIcons/arrowLogo"

function ProjectCard({ project }) {
  return (
    <div className="border border-gray-200 m-2 rounded-xl shadow-lg shadow-gray-500 overflow-hidden flex flex-col p-8 gap-4">
      <div className="flex-1 border-2">
        <img src={project.image} />
      </div>
      <div>
        <p>
          <span className="text-yellow-800 font-bold dark:text-yellow-500">
            Category:
          </span>
          {project.category}
        </p>
        <h1>
          <span className="text-yellow-800 font-bold dark:text-yellow-500">
            Title:
          </span>
          {project.title}
        </h1>
        <p>
          <span className="text-yellow-800 font-bold dark:text-yellow-500">
            Description:
          </span>
          {project.description}
        </p>
        <p>
          <span className="text-yellow-800 font-bold dark:text-yellow-500">
            Tech Used:
          </span>
          {project.technologies.join()}
        </p>
        <div className="p-2 flex justify-around border-2 border-dashed text-white border-gray-700 dark:border-gray-200">
          <Link target="_blank" className="project-link " href={project.github}>
            CODE
          </Link>
          <Link target="_blank" className="project-link" href={project.demo}>
            DEMO
          </Link>
          <Link target="_blank" className="project-link" href={project.design}>
            DESIGN
          </Link>
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
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 gap-4">
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
