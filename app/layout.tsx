import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Terra Travel | Tour in Uzbekistan",
  description:
    "Golden Terra Travel è un tour operator locale specializzato in viaggi e itinerari in Uzbekistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
