import "./globals.css";
import { metadata } from "./metadata";
import { hostGrotesk, martianMono, charmonman } from "./fonts";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${martianMono.variable} ${charmonman.variable}`}
    >
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
