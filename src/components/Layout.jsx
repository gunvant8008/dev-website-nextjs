import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SunLogo from "./logoIcons/SunLogo"
import MoonLogo from "./logoIcons/MoonLogo"
import {
  AiFillHome,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillContacts
} from "react-icons/ai"
import { Tooltip } from "./Tooltip"

function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === "system" ? systemTheme : theme
    if (currentTheme === "dark") {
      return (
        <button
          className="text-yellow-500 border-none"
          onClick={() => setTheme("light")}
        >
          <SunLogo />
        </button>
      )
    } else {
      return (
        <button className="border-none" onClick={() => setTheme("dark")}>
          <MoonLogo />
        </button>
      )
    }
  }

  return (
    <header className="dark:bg-dark-4 dark:text-gray-100 bg-light-1 p-2">
      <div className=" container flex-col justify-between m-auto">
        <div className="flex justify-between">
          <Link
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="md:text-4xl flex items-center p-2 text-2xl font-bold"
          >
            G.S.Labs
          </Link>
          {renderThemeChanger()}
        </div>

        <ul className="flex items-center justify-center p-1 border-2 border-gray-500">
          <li className="flex">
            <Tooltip message="Home">
              <Link
                rel="noopener noreferrer"
                href="/"
                className="link sm:px-4 flex items-center px-2 py-1"
              >
                <AiFillHome className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip message="Github">
              <Link
                rel="noopener noreferrer"
                href="https://github.com/gunvant8008"
                className="link sm:px-4 flex items-center px-2 py-1"
                target="_blank"
              >
                <AiFillGithub className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip message="LinkedIn">
              <Link
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/gunvant-sharma-006057b2/"
                className="link sm:px-4 flex items-center px-2 py-1"
                target="_blank"
              >
                <AiFillLinkedin className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip message="Instagram">
              <Link
                rel="noopener noreferrer"
                href="https://www.instagram.com/gunvant_urjaa/"
                className="link sm:px-4 flex items-center px-2 py-1"
                target="_blank"
              >
                <AiFillInstagram className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip message="Contact Me">
              <Link
                rel="noopener noreferrer"
                href="/contact"
                className="link sm:px-4 flex items-center px-2 py-1"
              >
                <AiFillContacts className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/projects"
              className="link sm:px-4 flex items-center px-2 py-1"
            >
              Projects
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/blogs"
              className="link sm:px-4 flex items-center px-2 py-1"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className=" dark:bg-dark-4 bg-light-1 py-4 mt-8">
      <div className="container flex justify-center mx-auto">
        &copy; 2023 G.S.Labs
      </div>
    </footer>
  )
}

function Layout({ children }) {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <main className="container flex-1 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
