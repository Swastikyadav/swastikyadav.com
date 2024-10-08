import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import { GoogleAnalytics } from "@next/third-parties/google";

import { Providers } from "@/components/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Swastik Yadav || Fullstack Software Engineer",
  description: "Writing about JavaScript and life. Building side projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col min-h-dvh bg-background">
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-FM9H9LFB2Q" />
    </html>
  );
}
