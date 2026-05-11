import type { Metadata } from "next";
import { Geologica, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geologica = Geologica({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Community",
  description: "A community for developers to share their projects and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geologica.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
