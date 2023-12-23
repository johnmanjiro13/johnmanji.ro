import { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { SITE_URL, TITLE } from "@/constants/global";

import "./global.css";

const description = "The page about Johnmanjiro";

export const metadata: Metadata = {
  title: TITLE,
  description: description,
  openGraph: {
    title: TITLE,
    description: description,
    siteName: TITLE,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: "@johnmanjiro13",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
