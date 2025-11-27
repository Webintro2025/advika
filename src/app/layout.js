import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import GetInTouch from "@/components/GetInTouch";
import ReduxProvider from '@/components/ReduxProvider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roasted & Flavoured Makhana Suppliers and Manufacturers in Patna | Advika Naturals LLP",
  description:
    "Advika Naturals LLP is a leading Roasted and Flavoured Makhana manufacturer and supplier in Patna, offering premium variants like Black Pepper, Classic Salted, Cheese, Pudina, Peri Peri, and innovative Makhana Cookies and Drinks.",
  keywords:[
    "Roasted Makhana Suppliers in Patna, Flavoured Makhana Suppliers in Patna, Roasted Makhana Manufacturer in Patna, Flavoured Makhana Manufacturer in Patna, Black Pepper Makhana Suppliers in Patna, Classic Salted Makhana Suppliers in Patna, Cheese Makhana Suppliers in Patna, Pudina Makhana Suppliers in Patna, Peri Peri Makhana Suppliers in Patna, Makhana Cookies And Drinks Suppliers And Manufacturer in Patna, Flavoured Makhana Suppliers And Manufacturer in Patna, Roasted Makhana Suppliers And Manufacturer in Patna"],
    verification:{
      google: "MxaomQx-nTXcJy3aBPAAXjaN4qjDr35sySBEmcsq1dg"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <Navbar />
          {children}
        
          
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
