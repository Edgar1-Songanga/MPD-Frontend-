import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Magestade Platform",
  description: "Corporate Workforce & Digital Transformation"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
