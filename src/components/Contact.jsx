import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-6 md:px-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="space-y-2"
      >
        <p>Email: chaitanyapimpare2003@gmail.com</p>
        <p>Phone: +91 7219110302</p>

        <div className="mt-4 space-x-4">
          <a href="https://github.com/ChaitanyaPimpare" className="text-yellow-400">GitHub</a>
          <a href="https://linkedin.com/in/chaitanyapimpare" className="text-yellow-400">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}