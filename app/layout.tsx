import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "A.Noukta Portfolio",
  description:
    "Hi! My name is Ahmed Noukta, I'm a mobile & front-end developer. You can see my skills in mobile and web technologies throught various projects in this portfolio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntu.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
