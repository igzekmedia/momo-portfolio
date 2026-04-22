import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamza Güneş | Tattoo Artist",
  description: "Hamza Güneş — International award-winning realism tattoo artist based in Denver, Colorado.",
  openGraph: {
    title: "Hamza Güneş | Tattoo Artist",
    description: "International award-winning realism tattoo artist based in Denver, Colorado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
