'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div className="flex items-center gap-2.5">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="back-to-top flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-purple-500/70 animate-bounce"
          >
            <span className="mt-[6px] h-4 w-4 rotate-45 border-l-2 border-t-2 border-white"></span>
          </div>
        )}
      </div>
    </div>
  );
}
