"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export default function InstallAppButton() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIOSHelp, setShowIOSHelp] = useState(false);

  useEffect(() => {
    const navigatorWithStandalone =
      window.navigator as NavigatorWithStandalone;

    const iosDevice =
      /iphone|ipad|ipod/i.test(window.navigator.userAgent);

    const installed =
      window.matchMedia("(display-mode: standalone)").matches ||
      navigatorWithStandalone.standalone === true;

    setIsIOS(iosDevice);
    setIsInstalled(installed);

    const handler = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  if (isInstalled) return null;

  if (!isIOS && !deferredPrompt) return null;

  return (
    <>
      <button
        type="button"
        onClick={isIOS ? () => setShowIOSHelp(true) : installApp}
        className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#120A24] transition hover:scale-105"
      >
        {isIOS
          ? isEnglish
            ? "📲 How to install the App"
            : "📲 Come installare l’App"
          : isEnglish
            ? "📲 Install the App"
            : "📲 Installa l’App"}
      </button>

      {showIOSHelp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setShowIOSHelp(false)}
        >
          <div
            className="w-full max-w-md rounded-[1.75rem] border border-[#D4AF37]/40 bg-[#16072F] p-6 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.25em] text-[#D4AF37]">
                  GOLDEN TERRA TRAVEL
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {isEnglish
                    ? "Install the App on iPhone"
                    : "Installa l’App su iPhone"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowIOSHelp(false)}
                className="rounded-full bg-white/10 px-3 py-1 text-xl text-white"
                aria-label={isEnglish ? "Close" : "Chiudi"}
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/80">
              {isEnglish
                ? "Open this page in Safari, then follow these steps:"
                : "Apri questa pagina con Safari, poi segui questi passaggi:"}
            </p>

            <div className="mt-5 space-y-4 text-left">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">
                  {isEnglish
                    ? "1. Tap Share"
                    : "1. Tocca Condividi"}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {isEnglish
                    ? "Tap the square with the upward arrow in Safari."
                    : "Premi il quadrato con la freccia verso l’alto nella barra di Safari."}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">
                  {isEnglish
                    ? "2. Select “Add to Home Screen”"
                    : "2. Scegli “Aggiungi alla schermata Home”"}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {isEnglish
                    ? "You may need to scroll down in the menu."
                    : "Potrebbe essere necessario scorrere il menu verso il basso."}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">
                  {isEnglish
                    ? "3. Tap “Add”"
                    : "3. Tocca “Aggiungi”"}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {isEnglish
                    ? "The Golden Terra Travel icon will appear on your Home Screen."
                    : "L’icona di Golden Terra Travel comparirà sulla schermata Home."}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowIOSHelp(false)}
              className="mt-6 w-full rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-[#120A24]"
            >
              {isEnglish ? "Got it" : "Ho capito"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}