import Image from "next/image"

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            rerum, nesciunt quia dicta voluptatem omnis quaerat impedit vel
            vitae reiciendis atque. Nihil ea odit esse deserunt, aperiam aut
            perferendis expedita!
          </p>
          <div></div>

          <div className=" mt-16 flex justify-start gap-4 my-50">
            <p>Instagram</p>
            <p>WhatsApp</p>
          </div>

          <div className="mt-2">
            <p className="text-white  md:grid italic">
              INVIERTE EN TI, SIN CULPA
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <Image
            className=" ml-auto rounded-full mt-8 transition-transform duration-500 ease-in-out transform hover:scale-105"
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
