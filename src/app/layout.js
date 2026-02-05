import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config/config";

export const metadata = {
  title: config.appName,
  description: "Electronics E-commerce, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
