import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import GTM from "@/lib/GTM";
import ChatlingWidget from "@/lib/ChatlingWidget";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", // You can use this in your Tailwind or CSS
  weight: ["300", "400", "500", "600", "700"], // Optional: choose desired weights
});

export const metadata = {
  title: "Vveba",
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
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
        <ChatlingWidget />
      </body>
    </html>
  );
}
