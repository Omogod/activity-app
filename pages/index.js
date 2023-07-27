import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>gt activity app</title>
        <meta name="description" content="Generated" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>

    </div>
  )
}
