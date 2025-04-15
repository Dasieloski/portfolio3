"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Square, Menu, Languages, Sun, Moon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export default function Navigation() {
  const pathname = usePathname()
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/skills", label: t.nav.skills },
    { href: "/projects", label: t.nav.projects },
  //  { href: "/experience", label: t.nav.experience },
    { href: "/contact", label: t.nav.contact },
  ]

  // Admin navigation
  const isAdmin = pathname?.startsWith("/admin")
  if (isAdmin) {
    return (
      <header
        className={`sticky top-0 z-40 w-full border-b-8 border-black bg-primary transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      >
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="flex items-center group">
              <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12 transition-transform group-hover:rotate-0"></div>
              <div className="h-12 w-12 bg-blue-600 border-4 border-black -ml-6 -rotate-12 transition-transform group-hover:rotate-0"></div>
              <span className="font-black text-2xl tracking-tighter ml-4 text-white">ADMIN PANEL</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={toggleLanguage}
              className="h-10 px-3 bg-blue-600 text-white border-4 border-black flex items-center justify-center hover:bg-blue-500 transition-colors font-bold"
            >
              <Languages className="h-5 w-5 mr-1" />
              {language === "es" ? "EN" : "ES"}
            </Button>

            <Button
              onClick={toggleTheme}
              className="h-10 w-10 bg-yellow-500 border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors dark:border-white dark:text-black"
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Link href="/">
              <Button className="h-10 px-3 bg-black text-white border-4 border-black flex items-center justify-center hover:bg-gray-800 transition-colors font-bold">
                {t.admin.backToSite}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button className="md:hidden h-10 w-10 bg-black text-white border-4 border-black flex items-center justify-center">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black text-white border-l-8 border-primary p-0 w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b-4 border-primary">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-yellow-500 border-4 border-white rotate-12"></div>
                      <div className="h-10 w-10 bg-blue-600 border-4 border-white -ml-5 -rotate-12"></div>
                      <span className="font-black text-xl tracking-tighter ml-3 text-white">ADMIN PANEL</span>
                    </div>
                  </div>

                  <nav className="flex-1 p-6">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/admin"
                          className={`text-xl font-bold hover:text-yellow-500 transition-colors flex items-center ${
                            pathname === "/admin" ? "text-yellow-500" : ""
                          }`}
                        >
                          {pathname === "/admin" && <Square className="h-4 w-4 mr-2 text-primary" />}
                          {t.admin.dashboard}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="text-xl font-bold hover:text-yellow-500 transition-colors flex items-center"
                        >
                          {t.admin.backToSite}
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="p-6 border-t-4 border-primary">
                    <div className="flex justify-between">
                      <Button
                        onClick={toggleLanguage}
                        className="h-12 px-4 bg-blue-600 text-white border-4 border-white flex items-center justify-center hover:bg-blue-500 transition-colors font-bold"
                      >
                        <Languages className="h-5 w-5 mr-2" />
                        {language === "es" ? "ENGLISH" : "ESPAÑOL"}
                      </Button>

                      <Button
                        onClick={toggleTheme}
                        className="h-12 w-12 bg-yellow-500 text-black border-4 border-white flex items-center justify-center hover:bg-yellow-400 transition-colors"
                      >
                        {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b-8 border-black bg-primary transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center group">
            <div className="h-12 w-12 bg-yellow-500 border-4 border-black rotate-12 transition-transform group-hover:rotate-0"></div>
            <div className="h-12 w-12 bg-blue-600 border-4 border-black -ml-6 -rotate-12 transition-transform group-hover:rotate-0"></div>
            <span className="font-black text-2xl tracking-tighter ml-4 text-white">DASIEL.DEV</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-white font-bold hover:text-yellow-500 transition-colors ${
                pathname === item.href ? "text-yellow-500" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={toggleLanguage}
            className="h-10 px-3 bg-blue-600 text-white border-4 border-black flex items-center justify-center hover:bg-blue-500 transition-colors font-bold"
          >
            <Languages className="h-5 w-5 mr-1" />
            {language === "es" ? "EN" : "ES"}
          </Button>

          <Button
            onClick={toggleTheme}
            className="h-10 w-10 bg-yellow-500 border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors dark:border-white dark:text-black"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden h-10 w-10 bg-black text-white border-4 border-black flex items-center justify-center">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-l-8 border-primary p-0 w-[300px]">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b-4 border-primary">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-yellow-500 border-4 border-white rotate-12"></div>
                    <div className="h-10 w-10 bg-blue-600 border-4 border-white -ml-5 -rotate-12"></div>
                    <span className="font-black text-xl tracking-tighter ml-3 text-white">DASIEL.DEV</span>
                  </div>
                </div>

                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`text-xl font-bold hover:text-yellow-500 transition-colors flex items-center ${
                            pathname === item.href ? "text-yellow-500" : ""
                          }`}
                        >
                          {pathname === item.href && <Square className="h-4 w-4 mr-2 text-primary" />}
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="p-6 border-t-4 border-primary">
                  <div className="flex justify-between">
                    <Button
                      onClick={toggleLanguage}
                      className="h-12 px-4 bg-blue-600 text-white border-4 border-white flex items-center justify-center hover:bg-blue-500 transition-colors font-bold"
                    >
                      <Languages className="h-5 w-5 mr-2" />
                      {language === "es" ? "ENGLISH" : "ESPAÑOL"}
                    </Button>

                    <Button
                      onClick={toggleTheme}
                      className="h-12 w-12 bg-yellow-500 text-black border-4 border-white flex items-center justify-center hover:bg-yellow-400 transition-colors"
                    >
                      {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
