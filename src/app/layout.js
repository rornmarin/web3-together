import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "/favicon.png",
      href: "/favicon.png",
      type: "image/x-icon",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}
        className={`${inter.className} !overflow-x-hidden`}>
        <div className="w-full md:w-10/12 mx-auto px-5 md:px-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}