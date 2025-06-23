
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const portalVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      boxShadow: "0 0 40px rgba(147, 51, 234, 0.3), 0 0 80px rgba(59, 130, 246, 0.2), inset 0 0 60px rgba(168, 85, 247, 0.1)",
    },
    hover: {
      scale: 1.06,
      rotate: 5,
      boxShadow: "0 0 60px rgba(147, 51, 234, 0.5), 0 0 120px rgba(59, 130, 246, 0.4), inset 0 0 80px rgba(168, 85, 247, 0.2)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      rotate: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const ringVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    animate: {
      rotate: 360,
      scale: [1, 1.02, 1],
      transition: {
        rotate: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
        scale: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }
      }
    }
  };

  const innerGlowVariants = {
    initial: {
      opacity: 0.6,
    },
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/30 to-indigo-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900" />
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Tagline */}
        <motion.h1 
          className="text-6xl md:text-7xl font-extrabold tracking-tight text-white text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Building AI Experiments.
        </motion.h1>

        {/* Portal Container */}
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
            style={{
              width: "320px",
              height: "320px",
            }}
            variants={ringVariants}
            initial="initial"
            animate="animate"
          />

          {/* Main Portal */}
          <motion.div
            variants={portalVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="cursor-pointer"
          >
            <Card className="w-80 h-80 rounded-full border-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-indigo-600/20 backdrop-blur-sm relative overflow-hidden">
              {/* Inner Glow */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/30 via-blue-400/20 to-indigo-500/30"
                variants={innerGlowVariants}
                initial="initial"
                animate="animate"
              />
              
              {/* Core */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-300/40 via-blue-300/30 to-indigo-400/40 backdrop-blur-md" />
              
              {/* Center Orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-white/80 via-purple-200/60 to-blue-200/60"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              {/* Ripple Effects */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"
                  animate={{
                    width: [0, 240],
                    height: [0, 240],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeOut",
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                />
              ))}
            </Card>
          </motion.div>

          {/* Portal Text */}
          <motion.div
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-purple-200/80 text-lg font-medium tracking-wide">
              Enter the Gateway
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
