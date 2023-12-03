import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/auth-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";


const inter = Inter({ subsets: ["latin"] });

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
