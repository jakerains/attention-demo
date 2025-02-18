import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Attention Explorer",
  description:
    "Discover how AI understands ambiguous language through an interactive exploration of attention mechanisms.",
  openGraph: {
    title: "AI Attention Explorer",
    description:
      "Discover how AI understands ambiguous language through an interactive exploration of attention mechanisms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Attention Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Attention Explorer",
    description:
      "Discover how AI understands ambiguous language through an interactive exploration of attention mechanisms.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

