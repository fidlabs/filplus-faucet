import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ModalProvider } from "@/lib/providers/modal.provider";
import Providers from "./providers";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fil+ KYC",
  description: "filplus KYC portal"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <ModalProvider>
            <div className="flex flex-col">
              <Providers>{children}</Providers>
            </div>
          </ModalProvider>
        </Suspense>
      </body>
    </html>
  );
}
