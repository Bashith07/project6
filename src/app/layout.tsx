// src/app/layout.tsx
import "./globals.css";
import Providers from "./Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Smart City",
  description: "Smart City Information Portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="page-container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
