"use client";
// Equivalent of the old main.jsx providers + Layout.jsx.
import { ToastContainer } from "react-toastify";
import SCrollToTop from "@/utilities/ScrollToTo";
import Footer from "@/utilities/footer/Footer";
import ScrollToTopButton from "@/components/scrolltotop/ScrollToTop";

export default function SiteShell({ children }) {
  return (
    <>
      <SCrollToTop />
      {children}
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </>
  );
}
