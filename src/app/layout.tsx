import Title from '@/components/Title/Title'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Github User Data From Name',
  description: 'created by Marcio-VOT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex-1 bg-neutral-900 text-zinc-200 `}>
        <Title />
        <div className='bg-[#22272E] max-w-2xl border-y-[1px] sm:border-[1px] border-gray-600 my-4 sm:mx-auto sm:w-11/12 sm:rounded-lg p-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
