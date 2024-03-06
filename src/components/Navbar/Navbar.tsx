import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="grid items-center justify-between md: grid-cols-2 gap:4 md:gap-20 md:px-20">
      <img
        src="/assets/logotipo.png"
        alt="Logo "
        width="200"
        height="25"
        className="mx-auto lg:mx-0"
      />
      <div className="flex gap-4 text-center">
        <Link
          className="px-4 py-2 bg-amber-200 text-white rounded hover:bg-amber-400 transition duration-300 ease-in-out"
          href="#overview"
        >
          Overview
        </Link>
        <Link
          className="px-4 py-2 bg-amber-200 text-white rounded hover:bg-amber-400 transition duration-300 ease-in-out"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="px-4 py-2 bg-amber-200 text-white rounded hover:bg-amber-400 transition duration-300 ease-in-out"
          href="#about"
        >
          About
        </Link>
        <Link
          className="px-4 py-2 bg-amber-200 text-white rounded hover:bg-amber-400 transition duration-300 ease-in-out"
          href="#practice"
        >
          Practice
        </Link>
      </div>
    </div>
  )
}
