import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ModalProvider } from "@/lib/providers/modal.provider";
import Providers from "./providers";
import { Suspense } from "react";
import { LoadingProvider } from "@/lib/providers/loading.provider.client";
import { GoogleAnalytics } from "@next/third-parties/google";
import { env } from "@/env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fil+ AutoAllocator",
  description: "filplus auto allocator app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content={env.NEXT_PUBLIC_GSV_ID}
        />
      </head>
      <body className={inter.className}>
        <Suspense>
          <ModalProvider>
            <LoadingProvider>
              <div className="flex flex-col">
                <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
                <Providers>{children}</Providers>
              </div>
            </LoadingProvider>
          </ModalProvider>
        </Suspense>
      </body>
    </html>
  );
}
