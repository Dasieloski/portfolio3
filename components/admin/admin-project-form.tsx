"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useLanguage } from "@/components/language-provider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Trash2, Save, Edit, ImageIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminProjectForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-COMMERCE APP",
      description: 'Una aplicación web e-commerce dedicado a articulos y suplementos para tatuar.',
      image: "/nk.png?height=300&width=500",
      tags: ['NextJS', 'Node.js', 'Strapi', 'JavaScript', 'Typescript', 'Tailwind-CSS', 'shadcn/ui'],
      github: "https://github.com/Dasieloski/MK-ecommerce.git",
      demo:  "mktattoo.vercel.app",
      category: "web",
    },
    {
      id: 2,
      title: "CLASIC",
      description: "Task management application with drag and drop functionality, tags, and filters.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["VUE.JS", "EXPRESS", "POSTGRESQL"],
      github: "https://github.com",
      demo: "https://example.com",
      category: "web",
    },
  ])

  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    image: "",
    tags: "",
    github: "",
    demo: "",
    category: "web",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a preview URL for the selected image
      const imageUrl = URL.createObjectURL(file)
      setPreviewImage(imageUrl)
      setFormData((prev) => ({ ...prev, image: file.name }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newProject = {
      ...formData,
      id: isEditing ? formData.id : Date.now(),
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      image: previewImage || formData.image,
    }

    if (isEditing) {
      setProjects(projects.map((project) => (project.id === newProject.id ? newProject : project)))
      toast({
        title: "Project updated",
        description: `Project "${newProject.title}" has been updated successfully.`,
      })
    } else {
      setProjects([...projects, newProject])
      toast({
        title: "Project added",
        description: `Project "${newProject.title}" has been added successfully.`,
      })
    }

    setFormData({
      id: 0,
      title: "",
      description: "",
      image: "",
      tags: "",
      github: "",
      demo: "",
      category: "web",
    })
    setPreviewImage(null)
    setIsEditing(false)
  }

  const handleEdit = (project: any) => {
    setFormData({
      ...project,
      tags: project.tags.join(", "),
    })
    setPreviewImage(project.image)
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
    toast({
      title: "Project deleted",
      description: "The project has been deleted successfully.",
    })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white border-8 border-black p-8 shadow-brutal dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2 dark:border-white">
          {isEditing ? "EDIT PROJECT" : "ADD NEW PROJECT"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-lg font-bold">
                Project Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 dark:bg-gray-700 dark:border-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-lg font-bold">
                Category
              </Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
                <SelectTrigger className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 dark:bg-gray-700 dark:border-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
              className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 dark:bg-gray-700 dark:border-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-lg font-bold">
              Project Image
            </Label>
            <div className="flex flex-col gap-4">
              <div
                onClick={handleImageClick}
                className="border-4 border-dashed border-black h-40 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors dark:border-white dark:hover:bg-gray-700"
              >
                {previewImage ? (
                  <img src={previewImage || "/placeholder.svg"} alt="Preview" className="h-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <ImageIcon className="h-10 w-10" />
                    <span>Click to upload image</span>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              {previewImage && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPreviewImage(null)
                    setFormData((prev) => ({ ...prev, image: "" }))
                  }}
                  className="bg-white border-4 border-black px-4 py-2 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all dark:bg-gray-700 dark:border-white dark:text-white"
                >
                  Remove Image
                </Button>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="github" className="text-lg font-bold">
                GitHub URL
              </Label>
              <Input
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 dark:bg-gray-700 dark:border-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo" className="text-lg font-bold">
                Demo URL
              </Label>
              <Input
                id="demo"
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 dark:bg-gray-700 dark:border-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags" className="text-lg font-bold">
              Tags (comma separated)
            </Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="REACT, NODE.JS, MONGODB"
              className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600 dark:bg-gray-700 dark:border-white"
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
                  description: "",
                  image: "",
                  tags: "",
                  github: "",
                  demo: "",
                  category: "web",
                })
                setPreviewImage(null)
                setIsEditing(false)
              }}
              className="bg-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all dark:bg-gray-700 dark:border-white dark:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all"
            >
              <Save className="h-5 w-5 mr-2" />
              {isEditing ? "Update Project" : "Add Project"}
            </Button>
          </div>
        </form>
      </div>

      <div className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse dark:bg-gray-900">
        <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-white pb-2">EXISTING PROJECTS</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border-4 border-white p-4 flex justify-between items-center dark:bg-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-800 flex-shrink-0 overflow-hidden dark:bg-gray-700">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400">Category: {project.category.toUpperCase()}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(project)}
                  className="bg-blue-600 text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Edit className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleDelete(project.id)}
                  className="bg-primary text-white border-2 border-white h-10 w-10 p-0 flex items-center justify-center"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}

          {projects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No projects yet. Add your first project above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
