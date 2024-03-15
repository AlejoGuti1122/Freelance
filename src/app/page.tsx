import { About } from "@/components/About"
import { Features } from "@/components/Features"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Overview } from "@/components/Overview"
import { Products } from "@/components/Products"

import Image from "next/image"

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
      <Features />
      <About />
      <Products />
      <Footer />
    </main>
  )
}
