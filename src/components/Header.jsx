import cv from "../assets/hojavida.pdf"
import { motion } from "framer-motion"
function Header() {
  return (
    <motion.header
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}>

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold">
          Junior Michel Valdizan Inga
        </h1>

        <p className="text-xl mt-4 text-gray-200">
          Desarrollador Web | Docker | Linux |
        </p>

        <div className="flex gap-4 mt-6 flex-wrap">

          <a
            href={cv}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-blue-600
              px-6
              py-3
              rounded-xl
              hover:bg-blue-700
              hover:scale-105
              transition
              duration-300
              shadow-xl">
            Hoja de Vida
          </a>

          <a
            href="https://github.com/Michelvaldizan99"
            target="_blank"
            className="bg-black px-5 py-3 rounded-xl hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="bg-pink-500 px-5 py-3 rounded-xl hover:scale-105 transition"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/51910969785"
            target="_blank"
            className="
              bg-green-600
              px-6
              py-3
              rounded-xl
              hover:scale-105
              transition
            "
          >
            WhatsApp
          </a>
          <a
              href="https://www.facebook.com/jmichael.valdizaninga/?locale=es_LA"
              target="_blank"
              className="
                bg-blue-700
                px-6
                py-3
                rounded-xl
                hover:scale-105
                transition
              "
            >
              Facebook
            </a>

        </div>

      </div>
    </motion.header>
  )
}

export default Header