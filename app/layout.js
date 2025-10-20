import "./globals.css";
import { metadata } from "./metadata";
import { hostGrotesk, martianMono, charmonman } from "./fonts";
import {
  Dock,
  Header,
  Footer,
  ScrollRestoration,
  LenisProvider,
  ContactPage,
} from "../components/ClientWrapper";

export { metadata };

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
          <ContactPage />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
