import { motion } from "framer-motion"
function Contact() {
  return (

    <motion.section
            id="contact"
            className="max-w-6xl mx-auto p-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }} >

      <h2 className="text-4xl font-bold mb-10">
        Contacto
      </h2>

     <motion.div
           className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           whileHover={{ scale: 1.02 }}
           transition={{ duration: 0.5 }} >

        <p className="text-lg text-gray-300 mb-4">
          📧 valdizan1999@gmail.com
        </p>

        <p className="text-lg text-gray-300 mb-4">
          📱 +51 910 969 785
        </p>

        <p className="text-lg text-gray-300">
          📍 Huánuco, Perú
        </p>

      </motion.div>

    </motion.section>
  )
}

export default Contact