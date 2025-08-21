'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FB</span>
              </div>
              <span className="font-bold text-xl">FBMC</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/upload"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/upload" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Upload
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}