import React from "react"
import projectsData from "@/data/projectsData"
import Link from "next/link"

function ProjectCard({ project }) {
  return (
    <div className="rounded-xl shadow-gray-500 flex flex-col gap-4 p-8 m-2 overflow-hidden border border-gray-200 shadow-lg">
      <div className="flex-1 border-2">
        <img src={project.image} />
      </div>
      <div>
        <div className="sm:flex-row flex flex-col justify-between">
          <p>
            <span className="dark:text-yellow-500 font-bold text-yellow-800">
              Category:
            </span>
            {project.category}
          </p>
          <p
            className={`${
              project.status === "Completed"
                ? " border-2 border-dashed border-green-600 p-1"
                : "border-2 border-dashed border-red-600 p-1"
            }`}
          >
            <span className="dark:text-yellow-500 font-bold text-yellow-800">
              Status:
            </span>
            {project.status}
          </p>
        </div>
        <h1>
          <span className="dark:text-yellow-500 font-bold text-yellow-800">
            Title:
          </span>
          {project.title}
        </h1>
        <p>
          <span className="dark:text-yellow-500 font-bold text-yellow-800">
            Description:
          </span>
          {project.description}
        </p>
        <p>
          <span className="dark:text-yellow-500 font-bold text-yellow-800">
            Tech Used:
          </span>
          {project.technologies.join()}
        </p>
        <div className="dark:border-gray-200 flex justify-around p-1 mt-2 text-white border-2 border-gray-700 border-dashed">
          <Link
            target="_blank"
            className={
              project.private
                ? "project-link pointer-events-none"
                : "project-link"
            }
            href={project.github}
          >
            {project.private ? "CODE PRIVATE" : "CODE"}
          </Link>
          <Link target="_blank" className="project-link" href={project.demo}>
            DEMO
          </Link>
          <Link
            target="_blank"
            className={
              project.private
                ? "project-link pointer-events-none"
                : "project-link"
            }
            href={project.design}
          >
            {project.private ? "DESIGN PRIVATE" : "DESIGN"}
          </Link>
        </div>
      </div>
    </div>
  )
}

const projects = () => {
  return (
    <div className="item-center flex flex-col gap-8 mt-0">
      <h1 className="sm:text-4xl md:text-6xl p-5 text-2xl text-center">
        PROJECTS
      </h1>
      <div className="md:grid-cols-2 md:p-0 grid grid-cols-1 gap-4 p-4">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        className=" self-center px-8 py-3 m-4 font-bold border-2 border-white rounded"
        href={`/`}
      >
        Go Back
      </Link>
    </div>
  )
}

export default projects
