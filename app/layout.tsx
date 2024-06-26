import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/global/MainNavbar'
import Favicon from '@/public/favicon.ico'

import { Manrope } from 'next/font/google'
import Footer from '@/app/components/global/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from './components/global/PreLoader'
import Head from 'next/head'
import Sidebar from './components/global/Sidebar'

export const metadata: Metadata = {
  title: 'eTranBiz',
  description: 'eTranBiz is a IT Consulting Organization offering High-End Expertise, Solutions and Services based on Oracle Products and Technologies especially in the areas of Oracle Fusion Middleware, Oracle eBusiness Suite, Oracle Database and Enterprise Systems, Data warehouse and BI and Java/Web/Mobile Solution Development Technologies.',
  // icons: [{ rel: 'icon', url: Favicon.src }],
  // s
  icons: {
    icon: ['/etranbiz-favicon-1.svg'],
  },
}

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: '--font-manrope',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={manrope.className}>
        <PreLoader />
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
