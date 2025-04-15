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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminEducationForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [items, setItems] = useState([
    {
      id: 1,
      type: "education",
      title: "Ingeniería Informática",
      institution: "Universidad Politécnica de Madrid",
      period: "2012 - 2016",
      description: "Especialización en Desarrollo de Software y Sistemas Inteligentes.",
    },
    {
      id: 2,
      type: "certification",
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2022",
      description:
        "Certificación que valida la experiencia en desarrollo, despliegue y depuración de aplicaciones basadas en AWS.",
    },
  ])

  const [formData, setFormData] = useState({
    id: 0,
    type: "education",
    title: "",
    institution: "",
    period: "",
    description: "",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newItem = {
      ...formData,
      id: isEditing ? formData.id : Date.now(),
    }

    if (isEditing) {
      setItems(items.map((item) => (item.id === newItem.id ? newItem : item)))
      toast({
        title: `${newItem.type === "education" ? "Education" : "Certification"} updated`,
        description: `"${newItem.title}" has been updated successfully.`,
      })
    } else {
      setItems([...items, newItem])
      toast({
        title: `${newItem.type === "education" ? "Education" : "Certification"} added`,
        description: `"${newItem.title}" has been added successfully.`,
      })
    }

    setFormData({
      id: 0,
      type: "education",
      title: "",
      institution: "",
      period: "",
      description: "",
    })
    setIsEditing(false)
  }

  const handleEdit = (item: any) => {
    setFormData(item)
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
    toast({
      title: "Item deleted",
      description: "The item has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white border-8 border-black p-8 shadow-brutal">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
          {isEditing ? "EDIT ITEM" : "ADD NEW ITEM"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="type" className="text-lg font-bold">
              Type
            </Label>
            <Select value={formData.type} onValueChange={handleTypeChange}>
              <SelectTrigger className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="certification">Certification</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-lg font-bold">
                Title
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
              <Label htmlFor="institution" className="text-lg font-bold">
                {formData.type === "education" ? "University/School" : "Issuing Organization"}
              </Label>
              <Input
                id="institution"
                name="institution"
                value={formData.institution}
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
              placeholder={formData.type === "education" ? "2018 - 2022" : "2023"}
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-lg font-bold">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
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
                  type: "education",
                  title: "",
                  institution: "",
                  period: "",
                  description: "",
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
              {isEditing ? "Update Item" : "Add Item"}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-white pb-2">EDUCATION & CERTIFICATIONS</h2>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-gray-900 border-4 border-white p-4 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 ${
                      item.type === "education" ? "bg-yellow-500 text-black" : "bg-blue-600 text-white"
                    } border border-white`}
                  >
                    {item.type.toUpperCase()}
                  </span>
                  <span className="text-gray-400">{item.period}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.institution}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-600 text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Edit className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="bg-primary text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
