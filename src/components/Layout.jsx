import Link from "next/link"

function Header() {
  return (
    <header className="bg-gray-800 mb-8 py-4 text-white">
      <div className="container mx-auto flex justify-center">
        <Link className="p-1" href="/">
          HOME
        </Link>
        <span className="mx-auto font-bold p-1">
          Gunvant Sharma Blog & Work
        </span>{" "}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-300 mt-8 py-4">
      <div className="container mx-auto flex justify-center">
        &copy; 2023 GS.Labs
      </div>
    </footer>
  )
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
