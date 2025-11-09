'use client'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'
import { Meteors } from './components/ui/meteors'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            enableSystem={false}
            defaultTheme='light'>
            {/* Meteor Shower Effect - Global */}
            <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
              <Meteors number={30} />
            </div>
            
            {/* ---------------------Header Starts-----------------  */}
            <Header />
            {/* ---------------------Header Ends-------------------  */}
            {children}
            {/* ---------------------Footer Starts-----------------  */}
            <Footer />
            {/* ---------------------Footer Ends-----------------  */}
            <ScrollToTop />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
