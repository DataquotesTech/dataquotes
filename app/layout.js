import "./globals.css";
import { Host_Grotesk, Martian_Mono, Charmonman } from "next/font/google";
import Dock from "../components/layouts/dock";
import Header from "../components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ScrollRestoration from "@/components/common/ScrollRestoration";
import LenisProvider from "@/components/common/LenisProvider";
import ContactPage from "@/components/common/Contact";

export const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const martianMono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian-mono",
  display: "swap",
});

export const charmonman = Charmonman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-charmonman",
  display: "swap",
});

// export const metadata = {
//   title: "DataQuotes", // tab title
//   description: "A clean Next.js setup with minimal SEO and custom favicon.", // meta description
//   keywords: ["Next.js", "Tailwind", "SEO", "React"], // keyword list
//   authors: [{ name: "Your Name" }], // optional author info
//   icons: {
//     icon: "/dataquotes.svg", // custom favicon
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${martianMono.variable} ${charmonman.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <LenisProvider>
          <ScrollRestoration />
          <Header />
          {children}
          <Dock />
          <ContactPage/>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
