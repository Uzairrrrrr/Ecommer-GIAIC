import Link from "next/link"
import { Search } from 'lucide-react'

import { Input } from "@/components/ui/input"

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Exclusive
        </Link>
        <nav className="mx-6 flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
          <Link href="/sign-up" className="text-sm font-medium">
            Sign Up
          </Link>
        </nav>
        <div className="relative w-80">
          <Input
            type="search"
            placeholder="What are you looking for?"
            className="pr-8"
          />
          <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  )
}

