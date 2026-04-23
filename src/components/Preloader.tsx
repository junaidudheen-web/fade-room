"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    let progressInterval: NodeJS.Timeout;

    const incrementProgress = () => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    };

    progressInterval = setInterval(incrementProgress, 200);

    const handleLoad = () => {
      setProgress(100);
      clearInterval(progressInterval);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "";
      }, 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-matteBlack text-subtleGold"
        >
          <motion.div
            animate={{
              rotate: [0, 45, 0, -45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <Scissors size={64} strokeWidth={1} />
          </motion.div>

          <div className="w-64 space-y-4">
            <div className="flex justify-between text-platinumSilver text-sm font-sans tracking-widest uppercase">
              <span>Loading</span>
              <span>{Math.min(100, Math.floor(progress))}%</span>
            </div>
            <div className="h-[2px] w-full bg-darkCharcoal overflow-hidden">
              <motion.div
                className="h-full bg-subtleGold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
