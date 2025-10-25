import { Host_Grotesk, Martian_Mono, Charmonman, Oswald } from "next/font/google";

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
export const inter = Oswald({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});
