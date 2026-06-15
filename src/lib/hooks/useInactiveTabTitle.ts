"use client";

import { useEffect } from "react";

const titles = [
  "Your audit is waiting",
  "Still losing leads?",
  "Finish your audit booking",
  "Customer journey leak?",
];

export function useInactiveTabTitle() {
  useEffect(() => {
    const original = document.title;
    const onVisibilityChange = () => {
      document.title = document.hidden
        ? titles[Math.floor(Math.random() * titles.length)]
        : original;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.title = original;
    };
  }, []);
}
