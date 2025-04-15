"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import PageTitle from "@/components/page-title"
import { Square, Circle, Triangle } from "lucide-react"

export default function ExperiencePage() {
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
      <PageTitle title={t.experience.title} />

      <section className="py-12">
        <div className="container">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {/* Experience 1 */}
            <motion.div className="bg-white border-8 border-black p-8 shadow-brutal" variants={itemVariants}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black uppercase">{t.experience.job1.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-primary text-white px-3 py-1 text-sm font-bold border-2 border-black">
                    {t.experience.job1.period}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{t.experience.job1.company}</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <Square className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                  <span>{t.experience.job1.description1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                  <span>{t.experience.job1.description2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Square className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                  <span>{t.experience.job1.description3}</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <h5 className="font-bold mb-3">{t.experience.technologies}:</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-500 px-2 py-1 text-xs font-bold border-2 border-black">React</span>
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-bold border-2 border-black">
                    Node.js
                  </span>
                  <span className="bg-primary text-white px-2 py-1 text-xs font-bold border-2 border-black">
                    MongoDB
                  </span>
                  <span className="bg-black text-white px-2 py-1 text-xs font-bold border-2 border-black">AWS</span>
                  <span className="bg-yellow-500 px-2 py-1 text-xs font-bold border-2 border-black">TypeScript</span>
                </div>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black uppercase">{t.experience.job2.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold border-2 border-black">
                    {t.experience.job2.period}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{t.experience.job2.company}</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <Circle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>{t.experience.job2.description1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>{t.experience.job2.description2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <span>{t.experience.job2.description3}</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t-2 border-blue-500">
                <h5 className="font-bold mb-3">{t.experience.technologies}:</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold border-2 border-black">
                    Vue.js
                  </span>
                  <span className="bg-white text-blue-600 px-2 py-1 text-xs font-bold border-2 border-black">
                    Express
                  </span>
                  <span className="bg-primary text-white px-2 py-1 text-xs font-bold border-2 border-black">
                    PostgreSQL
                  </span>
                  <span className="bg-black text-white px-2 py-1 text-xs font-bold border-2 border-white">Docker</span>
                  <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold border-2 border-black">
                    GraphQL
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Experience 3 */}
            <motion.div className="bg-yellow-500 border-8 border-black p-8 shadow-brutal" variants={itemVariants}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black uppercase">{t.experience.job3.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-black text-white px-3 py-1 text-sm font-bold border-2 border-black">
                    {t.experience.job3.period}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{t.experience.job3.company}</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <Triangle className="h-6 w-6 mt-1 flex-shrink-0 text-black" />
                  <span>{t.experience.job3.description1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Triangle className="h-6 w-6 mt-1 flex-shrink-0 text-black" />
                  <span>{t.experience.job3.description2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Triangle className="h-6 w-6 mt-1 flex-shrink-0 text-black" />
                  <span>{t.experience.job3.description3}</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t-2 border-black">
                <h5 className="font-bold mb-3">{t.experience.technologies}:</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-2 py-1 text-xs font-bold border-2 border-black">HTML5/CSS3</span>
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-bold border-2 border-black">
                    JavaScript
                  </span>
                  <span className="bg-primary text-white px-2 py-1 text-xs font-bold border-2 border-black">SASS</span>
                  <span className="bg-black text-white px-2 py-1 text-xs font-bold border-2 border-white">jQuery</span>
                  <span className="bg-white px-2 py-1 text-xs font-bold border-2 border-black">Figma</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 bg-black text-white border-y-8 border-primary">
        <div className="container">
          <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-white pb-2 inline-block mb-12">
            {t.experience.achievementsTitle}
          </h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="bg-primary text-white border-4 border-white p-6 shadow-brutal-white"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Square className="h-8 w-8" />
                <h3 className="text-xl font-bold">{t.experience.achievement1.title}</h3>
              </div>
              <p>{t.experience.achievement1.description}</p>
            </motion.div>

            <motion.div
              className="bg-blue-600 text-white border-4 border-white p-6 shadow-brutal-white"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Circle className="h-8 w-8" />
                <h3 className="text-xl font-bold">{t.experience.achievement2.title}</h3>
              </div>
              <p>{t.experience.achievement2.description}</p>
            </motion.div>

            <motion.div
              className="bg-yellow-500 text-black border-4 border-white p-6 shadow-brutal-white"
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Triangle className="h-8 w-8" />
                <h3 className="text-xl font-bold">{t.experience.achievement3.title}</h3>
              </div>
              <p>{t.experience.achievement3.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block mb-12">
            {t.experience.testimonialsTitle}
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.div
              className="bg-white border-8 border-black p-8 shadow-brutal"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-primary text-white border-4 border-black flex items-center justify-center font-black text-2xl">
                  JD
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t.experience.testimonial1.name}</h3>
                  <p className="text-gray-600">{t.experience.testimonial1.position}</p>
                </div>
              </div>
              <p className="text-lg italic mb-4">"{t.experience.testimonial1.text}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#EAB308"
                    stroke="#EAB308"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-blue-600 text-white border-8 border-black p-8 shadow-brutal"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-yellow-500 text-black border-4 border-black flex items-center justify-center font-black text-2xl">
                  AS
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t.experience.testimonial2.name}</h3>
                  <p className="text-blue-200">{t.experience.testimonial2.position}</p>
                </div>
              </div>
              <p className="text-lg italic mb-4">"{t.experience.testimonial2.text}"</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#EAB308"
                    stroke="#EAB308"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
