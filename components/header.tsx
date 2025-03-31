"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DogIcon } from "./dog-icon"
import { scrollToSection } from "@/lib/scroll-utils"
import { useBetaSignupContext } from "./beta-signup-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openBetaSignup } = useBetaSignupContext()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    openBetaSignup("header-login")
  }

  const handleSignupClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    openBetaSignup("header-signup")
  }

  return (
    <header className="w-full border-b sticky top-0 bg-background z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <DogIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">DocsChat</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-4 sm:gap-6">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              ホーム
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              機能
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              料金プラン
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              よくある質問
            </a>
          </nav>
          <ModeToggle />
          <Button variant="outline" size="sm" onClick={handleLoginClick}>
            ログイン
          </Button>
          <Button size="sm" onClick={handleSignupClick}>
            無料で始める
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニュー">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              ホーム
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              機能
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "pricing")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              料金プラン
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              よくある質問
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" size="sm" className="w-full" onClick={handleLoginClick}>
                ログイン
              </Button>
              <Button size="sm" className="w-full" onClick={handleSignupClick}>
                無料で始める
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

