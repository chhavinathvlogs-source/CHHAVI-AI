    export const metadata = {
      title: 'CHHAVI AI STUDIO',
      description: 'Transform the World with AI',
    }

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      )
    }
