"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export default function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const iosDevice =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1);

    const navigatorWithStandalone =
      window.navigator as NavigatorWithStandalone;

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      navigatorWithStandalone.standalone === true;

    setIsIOS(iosDevice);
    setIsStandalone(standalone);
    setIsReady(true);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsStandalone(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );

      window.removeEventListener(
        "appinstalled",
        handleAppInstalled
      );
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();

    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  if (!isReady || isStandalone) {
    return null;
  }

  /*
   * Su Android e sui browser compatibili il pulsante appare
   * soltanto quando l'installazione è realmente disponibile.
   */
  if (!isIOS && deferredPrompt) {
    return (
      <button
        type="button"
        onClick={installApp}
        className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#120A24] transition hover:scale-105"
      >
        📲 Installa l&apos;App
      </button>
    );
  }

  /*
   * Su iPhone e iPad Apple non permette l'installazione diretta:
   * il pulsante apre quindi le istruzioni.
   */
  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSInstructions(true)}
          className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#120A24] transition hover:scale-105"
        >
          🍎 Aggiungi alla Home
        </button>

        {showIOSInstructions && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5"
            onClick={() => setShowIOSInstructions(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ios-install-title"
              className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-[#120A24] p-6 text-center text-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Chiudi"
                onClick={() => setShowIOSInstructions(false)}
                className="absolute right-4 top-3 text-3xl leading-none text-white/70 transition hover:text-white"
              >
                ×
              </button>

              <div className="mb-3 text-4xl">📱</div>

              <h2
                id="ios-install-title"
                className="text-xl font-bold text-[#D4AF37]"
              >
                Aggiungi Golden Terra Travel
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                Per avere Golden Terra Travel sulla schermata Home del tuo
                iPhone:
              </p>

              <div className="mt-5 space-y-4 text-left">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">
                    1. Tocca Condividi
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Premi il quadrato con la freccia verso l&apos;alto nella
                    barra di Safari.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">
                    2. Scegli “Aggiungi alla schermata Home”
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Potrebbe essere necessario scorrere il menu verso il
                    basso.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="font-semibold">
                    3. Tocca “Aggiungi”
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    L&apos;icona comparirà sulla schermata Home come una vera
