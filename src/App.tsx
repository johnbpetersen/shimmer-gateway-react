import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Balatro from "@/components/SwirlingBackground";
import SplashCursor from "@/components/SplashCursor";
import useIsDesktop from "@/hooks/useIsDesktop";

const portalTargetUrl = "https://www.linkedin.com/in/johnbpetersen/";
const portalPreviewImageUrl = "/linkedin-preview.png";

const portalTransitionVariants: Variants = {
  initial: {
    clipPath: "circle(15% at 50% 50%)",
  },
  animate: {
    clipPath: "circle(150% at 50% 50%)",
    transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] },
  },
};

const App = () => {
  const isDesktop = useIsDesktop();
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    if (isDesktop) {
      setIsTransitioning(true);
    } else {
      window.open(portalTargetUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleAnimationComplete = () => {
    window.open(portalTargetUrl, "_blank", "noopener,noreferrer");
    setIsTransitioning(false);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4 overflow-hidden ${
        isDesktop ? "cursor-none" : ""
      }`}
    >
      {isDesktop && <SplashCursor />}

      <div className="text-center mb-24 z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 [text-shadow:_0_2px_10px_rgba(168,85,247,0.5)] py-2 leading-snug">
          "Any sufficiently advanced technology is indistinguishable from magic."
        </h1>
        <a
          href="https://en.wikipedia.org/wiki/Clarke%27s_three_laws"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-purple-300/70 mt-3 inline-block hover:text-purple-200 transition-colors duration-300"
        >
          — Clarke's Third Law
        </a>
      </div>

      <div
        className="relative flex flex-col items-center group cursor-pointer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          id="magic-portal"
          className="w-64 h-64 md:w-80 md:h-80 bg-black/20 rounded-full border-2 border-purple-400/30 shadow-xl relative overflow-hidden"
          whileHover={{ scale: isDesktop ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {isDesktop && !isHovering ? (
              <motion.div
                key="swirl"
                className="absolute inset-0"
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={{
                  clipPath: "circle(100% at 50% 50%)",
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                exit={{
                  clipPath: "circle(0% at 50% 50%)",
                  transition: { duration: 0.6, ease: "easeIn" },
                }}
              >
                <Balatro color1="#a855f7" color2="#4f46e5" color3="#1e1b4b" />
              </motion.div>
            ) : isDesktop && isHovering ? (
              <motion.img
                key="preview"
                src={portalPreviewImageUrl}
                alt="LinkedIn Preview"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.1 },
                }}
                exit={{ opacity: 0, scale: 0.9 }}
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {isDesktop && isTransitioning && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-50"
            variants={portalTransitionVariants}
            initial="initial"
            animate="animate"
            onAnimationComplete={handleAnimationComplete}
          >
            <Balatro color1="#a855f7" color2="#4f46e5" color3="#1e1b4b" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
