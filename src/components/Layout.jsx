import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SunLogo from "./logoIcons/SunLogo"
import MoonLogo from "./logoIcons/MoonLogo"

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
          className="border-none text-yellow-500"
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
    <header className="p-2 dark:bg-dark-4 dark:text-gray-100 bg-light-1">
      <div className="container flex-col  justify-between m-auto ">
        <div className="flex justify-between">
          <Link
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2 font-bold text-2xl md:text-4xl"
          >
            G.S.LABS
          </Link>
          {renderThemeChanger()}
        </div>

        <ul className="items-center justify-center flex border-2 border-gray-500 p-1">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/"
              className="flex items-center px-4 link"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="https://github.com/gunvant8008"
              className="flex items-center px-4 link"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gunvant-sharma-006057b2/"
              className="flex items-center px-4 link"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="/contact"
              className="flex items-center px-4  link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className=" mt-8 py-4 dark:bg-dark-4 bg-light-1">
      <div className="container mx-auto flex justify-center">
        &copy; 2023 GS.Labs
      </div>
    </footer>
  )
}

function Layout({ children }) {
  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
