import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let deferredPrompt: any;

    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent the mini info bar from appearing
      e.preventDefault();
      deferredPrompt = e; // Stash the event

      // Here, instead of showing a button, you can log or handle silently
      console.log("Install prompt available");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 xl:px-48 my-14 sm:px-20 md:px-32 lg:px-20">
        <div className=" lg:col-span-3 p-4 text-center bg-white dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark rounded-2xl col-span-12">
          {/* //sidebar  */}
          <Sidebar />
        </div>
        <div className="lg:col-span-9 bg-white dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark rounded-2xl col-span-12 flex flex-col overflow-hidden">
          {/* //navbar  */}
          <Navbar />

          {/* //component */}
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
