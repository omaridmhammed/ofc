import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Futsal Ottawa | Official League",
  description: "Join the premier Futsal league in Ottawa. Competitive leagues, training, and tournaments.",
  icons: {
    icon: "/ofc/ofcnewlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

