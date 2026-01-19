import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { AuthProvider } from "./context/AuthContext";
import GTM from "@/lib/GTM";
import MetaPixel from "@/lib/MetaPixel";
import ChatlingWidget from "@/lib/ChatlingWidget";
import { FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", // You can use this in your Tailwind or CSS
  weight: ["300", "400", "500", "600", "700"], // Optional: choose desired weights
});

export const metadata = {
  title: "WeTechHouse",
  description: "Crafting Tomorrow's Solutions Today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9H1Q63GHRE"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${poppins.variable} font-sans overflow-x-hidden`}>
        <GTM />
        <MetaPixel />
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
        <div className="fixed z-99 bottom-4 right-4">
          <FaWhatsapp size={32} color="#25D366" />
        </div>
      </body>
    </html>
  );
}
