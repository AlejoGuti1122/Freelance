import { dataSocialNetworks } from "@/data/dataSocialNetworks"
import Image from "next/image"
import Link from "next/link"

export function Overview() {
  return (
    <div
      id="overview"
      className="p-5 mt-3 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 md:px-24 md:py-42"
    >
      <div className="items-center md:grid md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-white  md:leading-snug md:text-6xl">
            Muestra tu mejor versión
          </h1>
          <p className="mt-55 text-white">
            "Descubre accesorios que realzan tu esencia y te inspiran a
            proyectar tu brillo único. Con cada pieza, siente cómo elevas tu
            estilo, mostrando al mundo tu mejor versión con elegancia y
            autenticidad."
          </p>
          <div></div>

          <div className="mt-20">
            <p className="text-white  md:grid italic">
              ¡INVIERTE EN TI, SIN CULPA!
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            className=" ml-auto rounded-full mt-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
            src="/assets/overview2.png"
            alt="overview"
            width="400"
            height="400"
          />
          <h1 className=" mt-10 text-4xl font-bold text-white  md:leading-snug md:text-4xl"></h1>
        </div>
      </div>
    </div>
  )
}
