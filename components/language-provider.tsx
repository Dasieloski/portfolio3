"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type LanguageContextType = {
  language: "es" | "en"
  toggleLanguage: () => void
  t: typeof translations.es
}

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  toggleLanguage: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"es" | "en">("es")

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const t = translations[language]

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
