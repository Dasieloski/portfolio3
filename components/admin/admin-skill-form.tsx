"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Save, Trash2, Edit } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminSkillForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML5 / CSS3", value: 95, category: "frontend" },
    { id: 2, name: "JavaScript / TypeScript", value: 90, category: "frontend" },
    { id: 3, name: "Node.js / Express", value: 88, category: "backend" },
    { id: 4, name: "Git / GitHub", value: 92, category: "tools" },
  ])

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    value: 80,
    category: "frontend",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: name === "value" ? Number(value) : value }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newSkill = {
      ...formData,
      id: isEditing ? formData.id : Date.now(),
    }

    if (isEditing) {
      setSkills(skills.map((skill) => (skill.id === newSkill.id ? newSkill : skill)))
      toast({
        title: "Skill updated",
        description: `Skill "${newSkill.name}" has been updated successfully.`,
      })
    } else {
      setSkills([...skills, newSkill])
      toast({
        title: "Skill added",
        description: `Skill "${newSkill.name}" has been added successfully.`,
      })
    }

    setFormData({
      id: 0,
      name: "",
      value: 80,
      category: "frontend",
    })
    setIsEditing(false)
  }

  const handleEdit = (skill: any) => {
    setFormData(skill)
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id))
    toast({
      title: "Skill deleted",
      description: "The skill has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white border-8 border-black p-8 shadow-brutal">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
          {isEditing ? "EDIT SKILL" : "ADD NEW SKILL"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-bold">
                Skill Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-lg font-bold">
                Category
              </Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
                <SelectTrigger className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="value" className="text-lg font-bold">
              Proficiency Level ({formData.value}%)
            </Label>
            <Input
              id="value"
              name="value"
              type="range"
              min="0"
              max="100"
              value={formData.value}
              onChange={handleChange}
              className="h-3 appearance-none bg-gray-200 rounded-full outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData({
                  id: 0,
                  name: "",
                  value: 80,
                  category: "frontend",
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
              {isEditing ? "Update Skill" : "Add Skill"}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-white pb-2">EXISTING SKILLS</h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-gray-900 border-4 border-white p-4 flex justify-between items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-400 uppercase">{skill.category}</p>
                  <div className="flex-1 h-2 bg-gray-700 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        skill.category === "frontend"
                          ? "bg-yellow-500"
                          : skill.category === "backend"
                            ? "bg-primary"
                            : "bg-blue-600"
                      }`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold">{skill.value}%</span>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <Button
                  onClick={() => handleEdit(skill)}
                  className="bg-blue-600 text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Edit className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleDelete(skill.id)}
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
