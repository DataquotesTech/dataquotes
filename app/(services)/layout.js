import "../globals.css";
import { LenisProvider, ScrollRestoration, Dock } from "@/components/ClientWrapper";

export default function ServicesLayout({ children }) {
  return (
    <LenisProvider>
      <ScrollRestoration />
      {children}
      <Dock />
    </LenisProvider>
  );
}
