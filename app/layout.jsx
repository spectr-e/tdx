import { poppins } from '@/utils/fonts'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Tatua | An Interactive Learning App',
  description:
    'Contains interactive learning activities such as quizzes, flashcards and others engaging activities related to book content',
  keywords: 'Interactive Learning, quizzes, flashcards, engaging learning',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <script
          type='module'
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        ></script>
        <script
          noModule={true}
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        ></script>
      </head>
      <body className={`${poppins}`}>{children}</body>
    </html>
  )
}

export default RootLayout
