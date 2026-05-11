import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

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
    <html
      lang="en"
      className={`${geologica.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
