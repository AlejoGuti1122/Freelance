import { Navbar } from "@/components/Navbar"
import { Overview } from "@/components/Overview"
import Image from "next/image"

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <Overview />
    </main>
  )
}
