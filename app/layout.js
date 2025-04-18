import './globals.css'

export const metadata = {
  title: 'Actnow4family',
  description: 'Specialized virtual consultations for epilepsy,<br>stroke recovery, headaches,<br>movement disorders, and dementia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}