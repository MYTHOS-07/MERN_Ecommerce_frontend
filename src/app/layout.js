import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config/config";
import AppProvider from "@/redux/provider";
import MainLayout from "@/layouts/MainLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: config.appName,
  description: "Electronics E-commerce, online shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body suppressHydrationWarning>
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-screen dark:bg-gray-900 dark:text-white">
              {children}
            </main>
            <Footer />
            <ToastContainer position="top-right" autoClose="2500" />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
