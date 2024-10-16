import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true); // Show the install button when the event is fired
      handleInstallClick();
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
        setShowInstallButton(false); // Hide the install button after prompt
      });
    }
  };

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
