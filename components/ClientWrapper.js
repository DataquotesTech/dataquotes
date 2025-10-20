"use client";

import dynamic from "next/dynamic";

const Dock = dynamic(() => import("./layouts/dock"), {
  ssr: false,
});
const Header = dynamic(() => import("./layouts/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("./layouts/Footer"), {
  ssr: false,
});
const ScrollRestoration = dynamic(() => import("./common/ScrollRestoration"), {
  ssr: false,
});
const LenisProvider = dynamic(() => import("./common/LenisProvider"), {
  ssr: false,
});
const ContactPage = dynamic(() => import("./common/Contact"), {
  ssr: false,
});

export { Dock, Header, Footer, ScrollRestoration, LenisProvider, ContactPage };
