import type { Metadata } from "next";
import "./globals.css";
import Spotlight from "./components/Stars";
import { Crimson_Pro } from 'next/font/google';

const crimson = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: "Willis Cao",
  description: "Willis Cao's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={crimson.variable}>
      <body className="min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24">
        <Spotlight />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
