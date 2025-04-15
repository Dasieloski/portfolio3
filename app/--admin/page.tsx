"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Upload, Save } from "lucide-react"
import AdminLogin from "@/components/admin/admin-login"
import AdminProjectForm from "@/components/admin/admin-project-form"
import AdminSkillForm from "@/components/admin/admin-skill-form"
import AdminEducationForm from "@/components/admin/admin-education-form"
import AdminExperienceForm from "@/components/admin/admin-experience-form"

export default function AdminPage() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true)
      toast({
        title: t.admin.loginSuccess,
        description: t.admin.welcomeMessage,
      })
    }
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />
  }

  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          className="bg-white border-8 border-black p-8 shadow-brutal mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-4">{t.admin.dashboardTitle}</h1>
          <p className="text-lg">{t.admin.dashboardDescription}</p>
        </motion.div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 h-16 bg-transparent gap-4">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
              bg-white border-4 border-black text-lg font-bold h-full"
            >
              {t.admin.projectsTab}
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
              bg-white border-4 border-black text-lg font-bold h-full"
            >
              {t.admin.skillsTab}
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
              bg-white border-4 border-black text-lg font-bold h-full"
            >
              {t.admin.educationTab}
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
              bg-white border-4 border-black text-lg font-bold h-full"
            >
              {t.admin.experienceTab}
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
              bg-white border-4 border-black text-lg font-bold h-full"
            >
              {t.admin.settingsTab}
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <AdminProjectForm />
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <AdminSkillForm />
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <AdminEducationForm />
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <AdminExperienceForm />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="bg-white border-8 border-black p-8 shadow-brutal">
              <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">
                {t.admin.settingsTitle}
              </h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{t.admin.profileSettings}</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-bold">
                        {t.admin.nameLabel}
                      </Label>
                      <Input
                        id="name"
                        defaultValue="Juan Desarrollador"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-bold">
                        {t.admin.emailLabel}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="contacto@ejemplo.com"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-lg font-bold">
                        {t.admin.locationLabel}
                      </Label>
                      <Input
                        id="location"
                        defaultValue="Madrid, España"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-lg font-bold">
                        {t.admin.phoneLabel}
                      </Label>
                      <Input
                        id="phone"
                        defaultValue="+34 600 123 456"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-lg font-bold">
                      {t.admin.bioLabel}
                    </Label>
                    <Textarea
                      id="bio"
                      rows={5}
                      defaultValue={t.about.bioText1}
                      className="border-4 border-black text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cv" className="text-lg font-bold">
                      {t.admin.cvLabel}
                    </Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="cv"
                        type="file"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                      <Button className="bg-blue-600 text-white border-4 border-black h-14 px-4 font-bold shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                        <Upload className="h-5 w-5 mr-2" />
                        {t.admin.uploadButton}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{t.admin.socialSettings}</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="github" className="text-lg font-bold">
                        GitHub
                      </Label>
                      <Input
                        id="github"
                        defaultValue="https://github.com/ejemplo"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="text-lg font-bold">
                        LinkedIn
                      </Label>
                      <Input
                        id="linkedin"
                        defaultValue="https://linkedin.com/in/ejemplo"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="twitter" className="text-lg font-bold">
                        Twitter
                      </Label>
                      <Input
                        id="twitter"
                        defaultValue="https://twitter.com/ejemplo"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="text-lg font-bold">
                        Instagram
                      </Label>
                      <Input
                        id="instagram"
                        defaultValue="https://instagram.com/ejemplo"
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{t.admin.availabilitySettings}</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-lg font-bold">
                        {t.admin.availabilityLabel}
                      </Label>
                      <Input
                        id="availability"
                        defaultValue={t.contact.availabilityValue}
                        className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button className="bg-yellow-500 text-black border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                    {t.admin.resetButton}
                  </Button>
                  <Button className="bg-primary text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all">
                    <Save className="h-5 w-5 mr-2" />
                    {t.admin.saveButton}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
