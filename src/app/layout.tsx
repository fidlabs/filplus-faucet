import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ModalProvider } from "@/lib/providers/modal.provider";
import Providers from "./providers";
import { Suspense } from "react";
import { LoadingProvider } from "@/lib/providers/loading.provider.client";

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Suspense>
          <ModalProvider>
            <LoadingProvider>
              <div className="flex flex-col">
                <Providers>{children}</Providers>
              </div>
            </LoadingProvider>
          </ModalProvider>
        </Suspense>
      </body>
    </html>
  );
}
