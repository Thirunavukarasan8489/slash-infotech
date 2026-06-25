'use client';

import { useSyncExternalStore } from "react";

const key = "slash-cookie-consent";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot() {
  return localStorage.getItem(key) === "accepted";
}

function getServerSnapshot() {
  return true;
}

export function CookieBanner() {
  const accepted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-lg border border-white/20 bg-[#111827]/95 p-4 text-white shadow-2xl backdrop-blur md:flex md:items-center md:justify-between md:gap-6">
      <p className="text-sm leading-6 text-white/75">We use essential cookies and privacy-respecting analytics to improve this UK website experience.</p>
      <button className="mt-3 rounded-md bg-[#2563EB] px-4 py-2 text-sm font-bold text-white md:mt-0" onClick={() => { localStorage.setItem(key, "accepted"); window.dispatchEvent(new StorageEvent("storage")); }}>Accept</button>
    </div>
  );
}

