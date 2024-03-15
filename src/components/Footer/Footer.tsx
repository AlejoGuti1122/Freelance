import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="mb-4">
            <h5 className="uppercase font-bold mb-2">Sobre Nosotros</h5>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="/nosotros" className="hover:text-gray-300">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-gray-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="uppercase font-bold mb-2">Tienda</h5>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="/manillas" className="hover:text-gray-300">
                  Manillas
                </a>
              </li>
              <li className="mb-1">
                <a href="/cadenas" className="hover:text-gray-300">
                  Cadenas
                </a>
              </li>
              <li className="mb-1">
                <a href="/earcuff" className="hover:text-gray-300">
                  EarCuff
                </a>
              </li>
              <li>
                <a href="/aretes" className="hover:text-gray-300">
                  Aretes
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="uppercase font-bold mb-2">Ayuda</h5>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="/faqs" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-devolucion"
                  className="hover:text-gray-300"
                >
                  Política de Devolución
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="uppercase font-bold mb-2">Suscríbete</h5>
            <p className="text-sm mb-2">
              Recibe las últimas novedades y ofertas.
            </p>
            <form>
              <input
                type="email"
                className="p-1 text-gray-700 w-full mb-2 text-sm"
                placeholder="Tu correo electrónico"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-sm rounded"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="text-center pt-4">
          <p className="text-xs">Síguenos en nuestras redes sociales:</p>
          <div className="flex justify-center mt-2">
            <a
              href="https://api.whatsapp.com/send?phone=TUNUMERO&text=Hola%20Meraqui%20Accesorios"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-sm"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/meraquiaccesorioss/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-sm"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center pt-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Meraqui Accesorios - Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
