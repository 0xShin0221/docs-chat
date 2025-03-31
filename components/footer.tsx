import Link from "next/link"
import { DogIcon } from "./dog-icon"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <DogIcon className="h-6 w-6 text-primary" />
            <span>DocsChat</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4">
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
        <div className="text-xs md:text-sm text-muted-foreground">© 2025 DocsChat. All rights reserved.</div>
      </div>
    </footer>
  )
}

