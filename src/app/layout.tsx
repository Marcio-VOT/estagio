import Title from '@/components/Title/Title'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Github User Data From Name',
  description: 'created by Marcio-VOT',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex-1 bg-neutral-50 text-zinc-800`}>
        <Title />
        <div className="bg-zinc-200 max-w-2xl mt-4 sm:mx-auto sm:w-11/12 sm:rounded-lg p-6 shadow-2xl relative">
          {children}
        </div>
      </body>
    </html>
  )
}
