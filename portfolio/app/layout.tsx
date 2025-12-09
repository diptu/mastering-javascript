import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Ovo } from "next/font/google";

import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfit = Outfit({

  subsets: ["latin"], weight: "400"
});
const ovo = Ovo({

  subsets: ["latin"], weight: "400"
});


export const metadata: Metadata = {
  title: "Software Engineer & ML Specialist | Nazmul",
  description: "Expert portfolio showcasing advanced projects in Full-Stack Software Engineering, Data Engineering, and Applied Machine Learning (MLOps, Deep Learning, Scalable Web Applications).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
