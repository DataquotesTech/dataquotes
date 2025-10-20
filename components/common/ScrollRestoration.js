"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side after hydration
    setIsClient(true);

    // Restore scroll position on page load
    const handleLoad = () => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    // Only run on initial page load, not on client-side navigation
    handleLoad();
  }, [pathname]);

  // Don't render anything during SSR to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return null;
}
