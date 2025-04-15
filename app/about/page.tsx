"use client"

import { motion } from "framer-motion"
import { Download, Square, Circle, Triangle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import PageTitle from "@/components/page-title"

export default function AboutPage() {
  const { t } = useLanguage()

  // Animation variants
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

  return (
    <>
      <PageTitle title={t.about.title} />

      <section className="py-12">
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="bg-white border-8 border-black p-8 shadow-brutal" variants={itemVariants}>
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">{t.about.whoTitle}</h3>
              <div className="prose prose-lg">
                <p className="text-lg mb-6">{t.about.whoText1}</p>
                <p className="text-lg">{t.about.whoText2}</p>
              </div>
            </motion.div>
            <motion.div
              className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">
                {t.about.detailsTitle}
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <Square className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{t.about.name}:</strong> Dasiel Torres
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{t.about.location}:</strong> Habana, Cuba
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Triangle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{t.about.email}:</strong> dasieldev@ejemplo.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{t.about.availability}:</strong> {t.about.availabilityValue}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{t.about.languages}:</strong> {t.about.languagesValue}
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-yellow-500 text-black border-4 border-white px-6 py-3 font-bold text-lg shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-2"
                >
                  <a href="/cv.pdf" download>
                    <Download className="h-5 w-5" />
                    {t.about.downloadCV}
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12">
        <div className="container">
          <motion.div
            className="bg-yellow-500 border-8 border-black p-8 shadow-brutal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">{t.about.bioTitle}</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-4">{t.about.bioText1}</p>
              <p className="text-lg mb-4">{t.about.bioText2}</p>
              <p className="text-lg">{t.about.bioText3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block mb-12">
            {t.education.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-2xl font-black uppercase">{t.education.educationTitle}</h3>

              <motion.div
                className="bg-white border-8 border-black p-6 shadow-brutal"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-black">{t.education.degree1}</h4>
                  <div className="flex items-center gap-2">
                    <span className="bg-primary text-white px-3 py-1 text-sm font-bold border-2 border-black">
                      {t.education.period1}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-700 mb-2">{t.education.university1}</p>
                <p>{t.education.description1}</p>
              </motion.div>

          {/*     <motion.div
                className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-black">{t.education.degree2}</h4>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold border-2 border-black">
                      {t.education.period2}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">{t.education.university2}</p>
                <p>{t.education.description2}</p>
              </motion.div> */}
            </motion.div>

            {/* Certifications */}
           {/*  <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="text-2xl font-black uppercase">{t.education.certificationsTitle}</h3>

              <motion.div
                className="bg-primary text-white border-8 border-black p-6 shadow-brutal"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-black">{t.education.cert1}</h4>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold border-2 border-black">
                      {t.education.certDate1}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">{t.education.certIssuer1}</p>
                <p>{t.education.certDescription1}</p>
              </motion.div>

              <motion.div
                className="bg-black text-white border-8 border-black p-6 shadow-brutal-inverse"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-black">{t.education.cert2}</h4>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white px-3 py-1 text-sm font-bold border-2 border-white">
                      {t.education.certDate2}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">{t.education.certIssuer2}</p>
                <p>{t.education.certDescription2}</p>
              </motion.div>

              <motion.div
                className="bg-yellow-500 border-8 border-black p-6 shadow-brutal"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-black">{t.education.cert3}</h4>
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white px-3 py-1 text-sm font-bold border-2 border-black">
                      {t.education.certDate3}
                    </span>
                  </div>
                </div>
                <p className="text-lg font-bold mb-2">{t.education.certIssuer3}</p>
                <p>{t.education.certDescription3}</p>
              </motion.div>
            </motion.div> */}
          </div>
        </div>
      </section>
    </>
  )
}
