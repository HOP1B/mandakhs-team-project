import type React from "react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "./components/layout/Navbar"


export const metadata = {
      generator: 'v0.dev'
    };
