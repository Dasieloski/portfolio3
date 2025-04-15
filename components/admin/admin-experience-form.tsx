"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Save, Trash2, Edit } from "lucide-react"

export default function AdminExperienceForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "SENIOR FULL STACK DEVELOPER",
      company: "Tech Innovations Inc.",
      period: "2021 - PRESENTE",
      description1:
        "Lideré el desarrollo de una plataforma SaaS para gestión de proyectos utilizada por más de 10,000 usuarios.",
      description2: "Implementé una arquitectura de microservicios que mejoró el rendimiento del sistema en un 40%.",
      description3:
        "Supervisé un equipo de 5 desarrolladores y establecí prácticas de CI/CD que redujeron el tiempo de despliegue en un 60%.",
      technologies: "React, Node.js, MongoDB, AWS, TypeScript",
    },
    {
      id: 2,
      title: "FULL STACK DEVELOPER",
      company: "Digital Solutions Co.",
      period: "2018 - 2021",
      description1: "Desarrollé aplicaciones web y móviles para clientes en sectores de finanzas, salud y educación.",
      description2:
        "Creé una API RESTful que procesaba más de 1 millón de solicitudes diarias con un tiempo de respuesta promedio de 50ms.",
      description3:
        "Implementé soluciones de autenticación y autorización seguras para aplicaciones con datos sensibles.",
      technologies: "Vue.js, Express, PostgreSQL, Docker, GraphQL",
    },
  ])

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    company: "",
    period: "",
    description1: "",
    description2: "",
    description3: "",
    technologies: "",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newExperience = {
      ...formData,
      id: isEditing ? formData.id : Date.now(),
    }

    if (isEditing) {
      setExperiences(experiences.map((exp) => (exp.id === newExperience.id ? newExperience : exp)))
      toast({
        title: "Experience updated",
        description: `Experience at "${newExperience.company}" has been updated successfully.`,
      })
    } else {
      setExperiences([...experiences, newExperience])
      toast({
        title: "Experience added",
        description: `Experience at "${newExperience.company}" has been added successfully.`,
      })
    }

    setFormData({
      id: 0,
      title: "",
      company: "",
      period: "",
      description1: "",
      description2: "",
      description3: "",
      technologies: "",
    })
    setIsEditing(false)
  }

  const handleEdit = (experience: any) => {
    setFormData(experience)
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
    toast({
      title: "Experience deleted",
      description: "The experience has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white border-8 border-black p-8 shadow-brutal">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
          {isEditing ? "EDIT EXPERIENCE" : "ADD NEW EXPERIENCE"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-lg font-bold">
                Job Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-lg font-bold">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="period" className="text-lg font-bold">
              Period
            </Label>
            <Input
              id="period"
              name="period"
              value={formData.period}
              onChange={handleChange}
              placeholder="2021 - PRESENT"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description1" className="text-lg font-bold">
              Key Responsibility 1
            </Label>
            <Textarea
              id="description1"
              name="description1"
              value={formData.description1}
              onChange={handleChange}
              rows={2}
              className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description2" className="text-lg font-bold">
              Key Responsibility 2
            </Label>
            <Textarea
              id="description2"
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              rows={2}
              className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description3" className="text-lg font-bold">
              Key Responsibility 3
            </Label>
            <Textarea
              id="description3"
              name="description3"
              value={formData.description3}
              onChange={handleChange}
              rows={2}
              className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies" className="text-lg font-bold">
              Technologies Used
            </Label>
            <Input
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB, AWS, TypeScript"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData({
                  id: 0,
                  title: "",
                  company: "",
                  period: "",
                  description1: "",
                  description2: "",
                  description3: "",
                  technologies: "",
                })
                setIsEditing(false)
              }}
              className="bg-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
            >
              <Save className="h-5 w-5 mr-2" />
              {isEditing ? "Update Experience" : "Add Experience"}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-white pb-2">WORK EXPERIENCE</h2>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-gray-900 border-4 border-white p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-300">{experience.company}</p>
                    <span className="text-xs bg-primary text-white px-2 py-0.5">{experience.period}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(experience)}
                    className="bg-blue-600 text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(experience.id)}
                    className="bg-primary text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p>• {experience.description1}</p>
                <p>• {experience.description2}</p>
                <p>• {experience.description3}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <span className="font-bold">Technologies:</span> {experience.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
