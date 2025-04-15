"use client"
import { useLanguage } from "@/components/language-provider"
import { Circle, Square, Triangle } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectTimeline() {
  const { t } = useLanguage()

  // Timeline data
  const timelineItems = [
    {
      year: "2025",
      title:"PROFESSIONAL CHAUFFEUR SERVICE WEBSITE",
      description: "A professional chauffeur service website",
      icon: <Circle className="h-6 w-6" />,
      color: "bg-blue-600",
    },
    {
      year: "2025",
      title: "GYM TRAINER",
      description:"A gym trainer's website",
      icon: <Triangle className="h-6 w-6" />,
      color: "bg-primary",
    },
    {
      year: "2024",
      title: "MOTORCYCLE E-COMMERCE WITH INVENTORY AND POS SYSTEM",
      description: "A website for the sale of motorcycle products, inventory management, and a POS (Point of Sale) system",
      icon: <Square className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      year: "2024",
      title: "PHARMACY WEBSITE",
      description: "A pharmacy website for the sale of all types of veterinary products",
      icon: <Circle className="h-6 w-6" />,
      color: "bg-blue-600",
    },
    {
      year: "2024",
      title: "BASIC TASK APP",
      description: "A basic task management website",
      icon: <Square className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      year: "2024",
      title:"E-COMMERCE APP",
      description: "A 99-store website for a variety of products",
      icon: <Circle className="h-6 w-6" />,
      color: "bg-blue-600",
    },
    {
      year: "2024",
      title: "GYM MANAGEMENT WEBSITE",
      description: "A gym website that manages clients, trainers, and memberships",
      icon: <Triangle className="h-6 w-6" />,
      color: "bg-primary",
    },
    {
      year: "2024",
      title: "CLASSIC SUDOKU GAME",
      description: "A classic Sudoku game",
      icon: <Square className="h-6 w-6" />,
      color: "bg-yellow-500",
    },
    {
      year: "2024",
      title: "E-COMMERCE APP",
      description: "A web e-commerce application dedicated to tattoo supplies and equipment",
      icon: <Circle className="h-6 w-6" />,
      color: "bg-blue-600",
    },
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Year marker */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white bg-black transform -translate-x-1/2 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Content */}
            <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
              <div className={`${item.color} border-4 border-white p-6 shadow-brutal-white`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <span className="text-sm font-bold px-2 py-1 bg-black text-white">{item.year}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
