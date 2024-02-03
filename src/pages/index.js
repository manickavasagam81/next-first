import Image from 'next/image'
import { Inter } from 'next/font/google'

import Slider from '@/components/Slider'
import Featured from '@/components/Featured'
import Offer from '@/components/Offer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
