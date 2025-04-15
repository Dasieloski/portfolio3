"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Circle, Square, Triangle, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const { t } = useLanguage()
  const router = useRouter()

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const shapeVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 border-b-8 border-black">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex justify-center">
                <div className="relative inline-block">
                  <motion.div
                    className="absolute -top-6 -left-6 h-16 w-16 bg-yellow-500 border-4 border-black rotate-12 z-0"
                    whileHover="hover"
                    variants={shapeVariants}
                  ></motion.div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 h-16 w-16 bg-blue-600 border-4 border-black -rotate-12 z-0"
                    whileHover="hover"
                    variants={shapeVariants}
                  ></motion.div>
                  <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-4 relative z-10">
                    {t.hero.title}
                    <br />
                    <motion.span
                      className="text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {t.hero.subtitle}
                    </motion.span>
                  </h1>
                </div>
              </div>
              <motion.p className="text-xl md:text-2xl" variants={itemVariants}>
                {t.hero.description}
              </motion.p>
            </motion.div>
            <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
              <Button
                asChild
                size="lg"
                className="bg-primary text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Link href="/contact">{t.hero.contactButton}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Link href="/projects">{t.hero.projectsButton}</Link>
              </Button>
            </motion.div>
            <motion.div className="flex justify-center gap-4 pt-4" variants={itemVariants}>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-black text-white border-4 border-black flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-blue-600 text-white border-4 border-black flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:contacto@ejemplo.com"
                className="h-12 w-12 bg-yellow-500 border-4 border-black flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </motion.a>
              <motion.a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-green-500 text-white border-4 border-black flex items-center justify-center shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* About Me Preview */}
            <motion.div
              className="bg-white border-8 border-black p-8 shadow-brutal group dark:bg-gray-800 dark:text-white dark:border-gray-200"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Square className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-black uppercase">{t.nav.about}</h2>
              </div>
              <p className="mb-6">{t.home.aboutPreview}</p>
              <Button
                asChild
                variant="outline"
                className="bg-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all group-hover:bg-primary group-hover:text-white dark:bg-gray-700 dark:border-gray-200 dark:text-white"
              >
                <Link href="/about" className="flex items-center gap-2">
                  {t.home.learnMore} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal group dark:border-gray-200"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Circle className="h-8 w-8" />
                <h2 className="text-2xl font-black uppercase">{t.nav.skills}</h2>
              </div>
              <p className="mb-6">{t.home.skillsPreview}</p>
              <Button
                asChild
                variant="outline"
                className="bg-white text-blue-600 border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all group-hover:bg-yellow-500 group-hover:text-black"
              >
                <Link href="/skills" className="flex items-center gap-2">
                  {t.home.learnMore} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Projects Preview */}
            <motion.div
              className="bg-yellow-500 border-8 border-black p-8 shadow-brutal group dark:border-gray-200 dark:text-black"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Triangle className="h-8 w-8" />
                <h2 className="text-2xl font-black uppercase">{t.nav.projects}</h2>
              </div>
              <p className="mb-6">{t.home.projectsPreview}</p>
              <Button
                asChild
                variant="outline"
                className="bg-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all group-hover:bg-black group-hover:text-white"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  {t.home.learnMore} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 bg-black text-white border-y-8 border-primary">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black tracking-tighter uppercase inline-block border-b-4 border-white pb-2">
              {t.availability.title}
            </h2>
            <p className="text-xl">{t.availability.description}</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <motion.div
                className="bg-primary text-white border-4 border-white p-4 shadow-brutal-white"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2">{t.availability.status}</h3>
                <p className="text-3xl font-black">{t.availability.statusValue}</p>
              </motion.div>
              <motion.div
                className="bg-blue-600 text-white border-4 border-white p-4 shadow-brutal-white"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2">{t.availability.nextAvailable}</h3>
                <p className="text-3xl font-black">{t.availability.nextAvailableValue}</p>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all mt-6"
              >
                <Link href="/contact">{t.availability.contactButton}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="bg-primary text-white border-8 border-black p-8 md:p-12 shadow-brutal relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -top-12 -right-12 h-40 w-40 bg-yellow-500 border-4 border-black rotate-12 z-0"
              animate={{ rotate: [12, -12, 12] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            ></motion.div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">{t.cta.title}</h2>
              <p className="text-xl mb-8">{t.cta.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-500 text-black border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <Link href="/contact">{t.cta.primaryButton}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <Link href="/projects">{t.cta.secondaryButton}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
