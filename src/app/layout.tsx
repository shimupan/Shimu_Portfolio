import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: ['900']});

export const metadata: Metadata = {
   title: 'Shimu Pan',
   description: "Shimu Pan's Portfolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={lato.className} suppressHydrationWarning={true}>
            {children}
         </body>
      </html>
   );
}
