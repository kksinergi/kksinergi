"use client";

import { useEffect, useState } from "react";
import { sendMessageTemplate } from "@/app/utils/submitSchedule"; // pastikan path sesuai

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={sendMessageTemplate}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-500 text-white shadow-md transition-opacity duration-300 cursor-pointer ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Chat WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
        <path d="M20.52 3.48A11.76 11.76 0 0 0 12.01 0C5.37 0 .02 5.35.02 11.96c0 2.11.55 4.17 1.6 6L0 24l6.24-1.61a11.91 11.91 0 0 0 5.77 1.46h.01c6.64 0 12.03-5.35 12.03-11.96 0-3.19-1.24-6.18-3.53-8.41zM12.01 21.67a9.74 9.74 0 0 1-4.96-1.35l-.36-.21-3.7.96.99-3.61-.23-.37A9.87 9.87 0 0 1 2.3 11.96c0-5.39 4.39-9.78 9.78-9.78a9.75 9.75 0 0 1 6.94 2.86 9.71 9.71 0 0 1 2.85 6.92c0 5.4-4.39 9.78-9.78 9.78zm5.43-7.39c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.51a9.04 9.04 0 0 1-1.67-2.06c-.18-.3 0-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38 0-.53-.06-.15-.68-1.63-.93-2.23-.25-.6-.5-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.27.3-1.06 1.04-1.06 2.52s1.09 2.93 1.25 3.13c.15.2 2.14 3.28 5.19 4.6.73.31 1.3.49 1.75.63.74.24 1.42.21 1.96.13.6-.09 1.79-.73 2.04-1.43.25-.7.25-1.29.17-1.43-.07-.13-.27-.21-.56-.36z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
