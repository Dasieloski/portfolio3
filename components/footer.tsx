"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black text-white py-12 border-t-8 border-primary dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-yellow-500 border-4 border-white rotate-12"></div>
              <div className="h-12 w-12 bg-blue-600 border-4 border-white -ml-6 -rotate-12"></div>
              <span className="font-black text-2xl tracking-tighter ml-4 text-white">DASIEL.DEV</span>
            </div>
            <p className="text-lg mb-6 max-w-md">{t.footer.description}</p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-black text-white border-4 border-white flex items-center justify-center shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-blue-600 text-white border-4 border-white flex items-center justify-center shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contacto@ejemplo.com"
                className="h-12 w-12 bg-yellow-500 border-4 border-white flex items-center justify-center shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/34600123456"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 bg-green-500 text-white border-4 border-white flex items-center justify-center shadow-brutal-white hover:translate-y-1 hover:shadow-none transition-all"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase border-b-2 border-primary pb-2">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-500 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-500 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-yellow-500 transition-colors">
                  {t.nav.skills}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-yellow-500 transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-yellow-500 transition-colors">
                  {t.nav.experience}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-500 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase border-b-2 border-primary pb-2">{t.footer.contactInfo}</h3>
            <ul className="space-y-3">
              <li>
                <span className="block text-gray-400">{t.footer.email}:</span>
                <a href="mailto:dasieldev@gmail.com" className="hover:text-yellow-500 transition-colors">
                  dasieldev@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-gray-400">{t.footer.phone}:</span>
                <a href="tel:+5354710329" className="hover:text-yellow-500 transition-colors">
                  +53 5 4710329
                </a>
              </li>
              <li>
                <span className="block text-gray-400">{t.footer.location}:</span>
                <span>Habana, Cuba</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} - {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
           {/*  <p className="text-sm text-gray-400">
              {t.footer.designedWith} ❤️ {t.footer.andStyle}
            </p> */}
            <Button
              onClick={scrollToTop}
              className="h-10 w-10 bg-primary text-white border-4 border-white flex items-center justify-center hover:bg-red-700 transition-colors ml-4"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
