export const metadata = {
  metadataBase: new URL("https://www.dataquotes.in"),
  title: {
    default: "DataQuotes | Learn what companies demand",
    template: "%s | DataQuotes",
  },
  description:
    "Hands-on, mentor-led courses in Data Science, Analytics and Full‑Stack development. Build projects, get career support and become job‑ready.",
  keywords: [
    "DataQuotes",
    "Data Science",
    "Data Analytics",
    "Full Stack",
    "Python",
    "Django",
    "React",
    "Bootcamp",
  ],
  authors: [{ name: "DataQuotes" }],
  openGraph: {
    title: "DataQuotes | Learn what companies demand",
    description:
      "Mentor-led, project-first learning to make you job‑ready in data and development.",
    url: "/",
    siteName: "DataQuotes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataQuotes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataQuotes | Learn what companies demand",
    description:
      "Mentor-led, project-first learning to make you job‑ready in data and development.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};
