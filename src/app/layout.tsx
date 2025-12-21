// src/app/layout.tsx
import "./globals.css";
import Providers from "./Provider"; // wraps Redux Provider
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthWrapper from "@/components/AuthWrapper";

export const metadata = {
  title: "Smart City",
  description: "Smart City Information Portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthWrapper>
            <Navbar />
            <main className="page-container">{children}</main>
            <Footer />
          </AuthWrapper>
        </Providers>
      </body>
    </html>
  );
}
