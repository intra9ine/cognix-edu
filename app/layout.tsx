import type { Metadata } from "next";
import {  Poppins, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  variable:'--font-roboto',
  display: 'swap',
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  variable:'--font-poppins',
  display: 'swap',
  subsets: ["latin"],
});
export const metadata: Metadata = {
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: `https://www.learnovateedu.com/`,
    siteName: "LEARNOVATE EDUCATION",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${roboto.variable} ${poppins.variable} `}>{children}</body>
    </html>
  );
}
