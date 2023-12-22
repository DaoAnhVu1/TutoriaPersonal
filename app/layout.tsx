import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/auth-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tutoria",
  description: "Online tutor finder",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./online-learning.png" />
      </head>
      <AuthProvider>
        <EdgeStoreProvider>
          <ModalProvider />
          <body className={inter.className}>
            <main>{children}</main>
          </body>
        </EdgeStoreProvider>
      </AuthProvider>
    </html>
  );
}
