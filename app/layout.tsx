import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KarobarApp - By Abdul Rauf",
  description: "My first Next.js app - Made in Web Dev class",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}