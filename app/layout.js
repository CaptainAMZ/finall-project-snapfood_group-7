import './globals.css'
import { Inter } from 'next/font/google'
import RestaurantInfo from '@/components/elements/RestaurantInfo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={inter.className}>
      <RestaurantInfo/>
        {children}
      </body>
    </html>
  )
}
