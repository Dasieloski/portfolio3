"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface AdminLoginProps {
  onLogin: (success: boolean) => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication - in a real app, this would be a proper auth check
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        onLogin(true)
      } else {
        toast({
          title: "Error de autenticación",
          description: "Usuario o contraseña incorrectos",
          variant: "destructive",
        })
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="py-20">
      <div className="container max-w-md mx-auto">
        <motion.div
          className="bg-white border-8 border-black p-8 shadow-brutal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="relative inline-block">
              <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12 absolute -top-2 -left-2"></div>
              <div className="h-12 w-12 bg-blue-600 border-4 border-black -rotate-12 absolute -bottom-2 -right-2"></div>
              <h1 className="text-3xl font-black tracking-tighter uppercase relative z-10 px-4 py-2">
                {t.admin.loginTitle}
              </h1>
            </div>
          </div>
          <p className="text-center mb-8">{t.admin.loginDescription}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-lg font-bold">
                {t.admin.usernameLabel}
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg font-bold">
                {t.admin.passwordLabel}
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-4 border-black h-14 text-lg font-mono shadow-brutal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-blue-600"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white border-4 border-black px-6 py-3 font-bold text-lg shadow-brutal hover:translate-y-1 hover:shadow-none transition-all w-full"
            >
              {isLoading ? "..." : t.admin.loginButton}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Demo credentials: admin / admin123</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
