import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/navigation/navigation";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "The Anchorage Group",
  description:
    "Agritech, Mining, Logistics, Autoshop, Motors, Communications, Voyages, Outlet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}