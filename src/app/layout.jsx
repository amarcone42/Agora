import './globals.css'
import './home.scss'
import { Open_Sans } from 'next/font/google'
import MainPanel from '../components/mainpanel/MainPanel'
import SidePanel from '../components/appbar/SidePanel'
import ButtonCreate from '../components/buttoncreate/ButtonCreate'



const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </head>
      <body className={font.className}>
        <MainPanel name="Home"/>
        <div id="central-panel">
          {children}
          <ButtonCreate/>
        </div>
        <SidePanel/>
      </body>
    </html>
  )
}
