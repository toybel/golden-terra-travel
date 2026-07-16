import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}

        {process.env.NODE_ENV === "production" && (
          <Script id="register-service-worker" strategy="afterInteractive">
            {`
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker
                  .register("/sw.js")
                  .catch((error) => {
                    console.error("Service worker non registrato:", error);
                  });
              }
            `}
          </Script>
        )}
      </body>
    </html>
  );
}