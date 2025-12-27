import "./globals.css";
import Providers from "./Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Smart City",
  description: "Smart City Information Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="main-wrapper">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
