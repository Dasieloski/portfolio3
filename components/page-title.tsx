"use client"

import { motion } from "framer-motion"

interface PageTitleProps {
  title: string
  subtitle?: string
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <section className="py-16 border-b-8 border-black bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-yellow-500 border-4 border-black rotate-12 z-0"></div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 bg-blue-600 border-4 border-black -rotate-12 z-0"></div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-4 relative z-10">{title}</h1>
          </motion.div>
          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
