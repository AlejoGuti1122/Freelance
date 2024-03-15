import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { motion } from "framer-motion"

export function About() {
  return (
    <MotionTransition>
      <div id="about" className="bg-amber-200 py-12 mt-40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Acerca de nosotros</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/assets/imagen5.png"
                alt="Imagen de la tienda"
                width={600}
                height={400}
                className="rounded-2xl hover:contrast-125"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg leading-relaxed">
                En nuestra tienda de accesorios, nos apasiona ofrecerte una
                amplia gama de productos que realcen tu belleza y estilo
                personal. Desde elegantes aretes y pulseras hasta llamativos
                anillos y delicadas cadenas, tenemos todo lo que necesitas para
                complementar tu atuendo y expresar tu individualidad.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Nuestro equipo está comprometido a brindarte la mejor
                experiencia de compra posible. Ya sea que estés buscando el
                regalo perfecto para un ser querido o simplemente deseas darte
                un capricho, estamos aquí para ayudarte a encontrar exactamente
                lo que necesitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionTransition>
  )
}
