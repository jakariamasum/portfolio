import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";
import profileImage from "../assets/images/profile.jpg";

export default function ScrollPopup({
  scrollThreshold = 300,
  dismissTimeout = 30000,
  onMessageClick = () => (window.location.href = "/contact"),
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const dismissTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= scrollThreshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dismissTimeoutRef.current) {
        clearTimeout(dismissTimeoutRef.current);
      }
    };
  }, [isDismissed, scrollThreshold]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);

    dismissTimeoutRef.current = setTimeout(() => {
      setIsDismissed(false);
    }, dismissTimeout);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-xs animate-popup">
      <div className="flex rounded-xl border-l-4 border-r-4 border-l-blue-500 border-r-[#3BCBA9] bg-black/95 p-4 shadow-lg backdrop-blur-sm">
        <div className="relative mr-4">
          <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-[#3EC7B0] shadow-inner ">
            <img
              src={profileImage || "/placeholder.svg?height=56&width=56"}
              alt="Profile"
              width={56}
              height={56}
              className="h-full w-full object-top"
            />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            Having new ideas?
          </h3>
          <button
            onClick={onMessageClick}
            className="mt-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-[#3BCBA9] px-4 py-2 font-medium text-white transition-all hover:shadow-lg hover:translate-y-[-2px]"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Send message
          </button>
        </div>

        <div className="ml-2 flex flex-col items-center gap-2">
          <button
            onClick={handleDismiss}
            className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
