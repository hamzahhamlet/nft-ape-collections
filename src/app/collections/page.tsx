"use client";

import dynamic from "next/dynamic";

const CollectionsClient = dynamic(() => import("./CollectionsClient"), {
  ssr: false,
});

export default function CollectionsPage() {
  return <CollectionsClient />;
}
