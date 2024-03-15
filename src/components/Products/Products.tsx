import { motion } from "framer-motion"
import Image from "next/image"
import { MotionTransition } from "../MotionTransition"

export function Products() {
  return (
    <MotionTransition>
      <div id="products" className="bg-amber-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 mt-20">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Carta de producto 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen2.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen8.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen9.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen10.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen11.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen12.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen13.png"
                alt="Producto 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 1</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 1.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="transition-transform duration-300 hover:scale-110"
                src="/assets/imagen14.png"
                alt="Producto 2"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">Producto 2</h3>
                <p className="text-gray-600">
                  Descripción breve del Producto 2.
                </p>
                <div className="mt-5">
                  <span className="text-gray-900 font-bold">Precio</span>
                </div>
              </div>
            </div>

            {/* Agrega más productos siguiendo el patrón de los anteriores */}
          </div>
        </div>
      </div>
    </MotionTransition>
  )
}
