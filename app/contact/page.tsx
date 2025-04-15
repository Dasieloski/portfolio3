"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import PageTitle from "@/components/page-title"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Phone, Calendar, MessageSquare } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.contact.successTitle,
        description: t.contact.successMessage,
        variant: "default",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

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
      <PageTitle title={t.contact.title} />

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white border-8 border-black p-8 shadow-brutal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-black pb-2">{t.contact.formTitle}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-bold">
                    {t.contact.nameLabel}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-bold">
                    {t.contact.emailLabel}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-lg font-bold">
                    {t.contact.subjectLabel}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-bold">
                    {t.contact.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all w-full"
                >
                  {isSubmitting ? t.contact.submittingButton : t.contact.submitButton}
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-white pb-2">{t.contact.infoTitle}</h3>
              <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div className="space-y-6" variants={itemVariants}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-primary border-4 border-white flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.emailTitle}</h4>
                      <a href="mailto:dasieldev@gmail.com" className="text-lg hover:text-yellow-500 transition-colors">
                        dasieldev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-600 border-4 border-white flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.linkedinTitle}</h4>
                      <a
                        href="www.linkedin.com/in/dasieloski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-yellow-500 transition-colors"
                      >
                        www.linkedin.com/in/dasieloski
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-yellow-500 text-black border-4 border-white flex items-center justify-center flex-shrink-0">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.githubTitle}</h4>
                      <a
                        href="https://github.com/dasieloski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-yellow-500 transition-colors"
                      >
                        github.com/dasieloski
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-green-500 text-white border-4 border-white flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.whatsappTitle}</h4>
                      <a
                        href="https://wa.me/54710329"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-yellow-500 transition-colors"
                      >
                        +53 5 4710329
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-primary border-4 border-white flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.locationTitle}</h4>
                      <p className="text-lg">Habana, Cuba</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-blue-600 border-4 border-white flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.phoneTitle}</h4>
                      <p className="text-lg">+53 5 4710329</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-yellow-500 text-black border-4 border-white flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{t.contact.availabilityTitle}</h4>
                      <p className="text-lg">{t.contact.availabilityValue}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="pt-6 border-t-4 border-white" variants={itemVariants}>
                  <h4 className="text-lg font-bold mb-4">{t.contact.availableFor}:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary text-white px-3 py-1 text-sm font-bold border-2 border-white">
                      {t.contact.freelance}
                    </span>
                    <span className="bg-blue-600 text-white px-3 py-1 text-sm font-bold border-2 border-white">
                      {t.contact.fullTime}
                    </span>
                    <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-bold border-2 border-white">
                      {t.contact.consulting}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
     {/*  <section className="py-12">
        <div className="container">
          <div className="bg-white border-8 border-black p-0 shadow-brutal">
            <div className="h-96 w-full bg-gray-200 border-b-4 border-black relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-xl font-bold">{t.contact.mapPlaceholder}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black uppercase mb-2">{t.contact.officeTitle}</h3>
              <p>{t.contact.officeAddress}</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
