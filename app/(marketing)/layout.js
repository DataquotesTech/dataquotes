import "../globals.css";
import { hostGrotesk, martianMono, charmonman } from "@/app/fonts";
import {
  Dock,
  Header,
  Footer,
  ScrollRestoration,
  LenisProvider,
  ContactPage,
} from "@/components/ClientWrapper";

export default function MarketingLayout({ children }) {
  return (
    <LenisProvider>
      <ScrollRestoration />
      <Header />
      {children}
      <Dock />
      <ContactPage />
      <Footer />
    </LenisProvider>
  );
}
