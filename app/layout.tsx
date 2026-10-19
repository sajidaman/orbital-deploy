import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBITAL - A field guide to elsewhere",
  description:
    "A small invitation to look beyond the usual. Explore the ORBITAL field guide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
