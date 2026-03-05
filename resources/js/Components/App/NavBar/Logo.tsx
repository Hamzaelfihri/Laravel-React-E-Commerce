import React from "react";
import { Link } from "@inertiajs/react";

export default function Logo() {
  return (
    <Link href="/" className="flex-shrink-0">
      <img
        src="/images/shop-hero.png"
        alt="HEELECTRONIC"
        className="h-32 w-32 object-contain"

      />
    </Link>
  );
}
