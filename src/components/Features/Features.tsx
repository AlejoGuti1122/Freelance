import { motion } from "framer-motion"
import Image from "next/image"
import { MotionTransition } from "../MotionTransition"

export function Features() {
  return (
    <MotionTransition>
      <div id="features" className="bg-amber-300 py-12 mt-36">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  className="rounded-2xl hover:brightness-110"
                  src="/assets/imagen7.png"
                  alt="Variedad de productos"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Variedad de productos</h3>
                <p className="text-gray-600">
                  Descubre una amplia selección de accesorios, desde aretes
                  elegantes hasta pulseras llamativas.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  className="rounded-2xl hover:brightness-110"
                  src="/assets/imagen3.png"
                  alt="Calidad excepcional"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Calidad excepcional</h3>
                <p className="text-gray-600">
                  Nuestros productos están fabricados con materiales de primera
                  calidad para garantizar durabilidad y estilo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionTransition>
  )
}
