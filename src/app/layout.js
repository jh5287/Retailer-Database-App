

export const metadata = {
  title: 'This is the name of your app',
  description: 'I created dis app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
