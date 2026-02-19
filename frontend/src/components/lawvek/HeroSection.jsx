import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { NetworkBackground } from './NetworkBackground';

export const HeroSection = ({ onOpenModal }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Network Background - Only in Hero */}
      <NetworkBackground />
      {/* Premium Depth Gradient Layers - Royal & Lively */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Top atmospheric depth - soft royal blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0FA]/40 via-transparent to-transparent" />

        {/* Warm golden horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#FFF8E8]/50 via-[#FFFBF0]/30 to-transparent" />

        {/* Central focus glow - warm ivory */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-white/60 via-[#FFFEF5]/30 to-transparent rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Floating depth layers - Royal elegance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left - soft royal blue cloud */}
        <motion.div
          className="absolute -top-20 -left-20 w-[450px] h-[350px] rounded-full bg-gradient-to-br from-[#C5D8F0]/40 via-[#D8E8FA]/20 to-transparent blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Top right - golden warmth */}
        <motion.div
          className="absolute -top-10 right-0 w-[400px] h-[320px] rounded-full bg-gradient-to-bl from-[#FFF0D4]/50 via-[#FFE8C0]/25 to-transparent blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Center floating orb - premium glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[380px] rounded-full bg-gradient-to-b from-white/50 via-[#FFFEF8]/25 to-transparent blur-2xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Bottom golden accent */}
        <motion.div
          className="absolute bottom-10 left-1/4 w-[400px] h-[280px] rounded-full bg-gradient-to-t from-[#FFE4A8]/35 via-[#FFF0C8]/20 to-transparent blur-3xl"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Right side royal blue accent */}
        <motion.div
          className="absolute bottom-1/4 right-10 w-[300px] h-[250px] rounded-full bg-gradient-to-l from-[#B8D0F0]/30 via-[#D0E4FA]/15 to-transparent blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Light rays - more prominent & colorful */}
        <div className="absolute top-0 left-[12%] w-[3px] h-[480px] bg-gradient-to-b from-[#A8C8E8]/55 via-[#C5DAF0]/30 to-transparent transform -rotate-12 blur-[2px]" />
        <div className="absolute top-0 left-[32%] w-[2px] h-[520px] bg-gradient-to-b from-[#FFD070]/40 via-[#FFE8A8]/20 to-transparent blur-[1px]" />
        <div className="absolute top-0 left-[52%] w-[2px] h-[400px] bg-gradient-to-b from-[#D4AF37]/35 via-[#E8C860]/15 to-transparent transform rotate-5 blur-[1px]" />
        <div className="absolute top-0 right-[22%] w-[3px] h-[450px] bg-gradient-to-b from-[#B0D0F0]/50 via-[#D0E8FA]/25 to-transparent transform rotate-10 blur-[2px]" />
        <div className="absolute top-0 right-[8%] w-[2px] h-[380px] bg-gradient-to-b from-[#FFD890]/45 to-transparent transform rotate-15 blur-[1px]" />
      </div>

      {/* Geometric accent shapes - Royal & Premium */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rotating hexagonal glow - gold */}
        <motion.div
          className="absolute top-1/4 -left-16 w-[280px] h-[280px] opacity-25"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(218, 165, 32, 0.5), transparent, rgba(65, 105, 180, 0.3), transparent)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />

        {/* Right organic blob - royal blue */}
        <motion.div
          className="absolute top-1/3 -right-8 w-[220px] h-[220px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(65, 105, 180, 0.5) 0%, rgba(218, 165, 32, 0.3) 50%, transparent 70%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom accent ring - golden */}
        <motion.div
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[120px] opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.6), rgba(65, 105, 180, 0.4), rgba(218, 165, 32, 0.6), transparent)',
            borderRadius: '50%',
          }}
          animate={{
            scaleX: [1, 1.15, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sparkle dots */}
        <motion.div
          className="absolute top-[20%] left-[25%] w-3 h-3 rounded-full bg-[#FFD700]"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-[#4169B4]"
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#DAA520]"
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </div>

      {/* Bottom fade for seamless transition to ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent pointer-events-none" />

      {/* Content - Centered with protective backdrop - Judicial breathing room */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center -mt-20 md:-mt-32"
        style={{ y: textY, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Subtle protective backdrop for readability - 6% overlay */}
        <div className="absolute inset-0 -mx-24 -my-16 bg-white/[0.06] backdrop-blur-[2px] rounded-[100px] pointer-events-none" />

        {/* Badge - Premium Navigation feel */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <span className="text-[14px] font-medium text-[#0E5A45] tracking-[0.06em] uppercase">
            Lawyer Assisted AI
          </span>
        </motion.div>

        {/* Headline - Editorial Rhythm (88px -> 96px) */}
        <motion.h1
          className="relative font-serif tracking-[-1.5px] leading-[1.02] text-[#0F0F0F] mb-10"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[72px] md:text-[88px] font-medium leading-[1.05]">
            Contract review
          </div>
          <div className="text-[80px] md:text-[96px] font-medium -mt-2">
            <span className="text-[#0F0F0F]">without </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E5A45] via-[#124E3B] to-[#0E5A45] inline-block font-medium"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% auto' }}
            >
              hourly billing.
            </motion.span>
          </div>
        </motion.h1>

        {/* Description - Focused & Confident */}
        <motion.p
          className="relative text-[20px] md:text-[22px] font-sans leading-[1.6] text-[#444444] max-w-[600px] mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          AI-powered contract review with the right level of human legal oversight. Standardized pricing from $250.
        </motion.p>

        {/* CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.6 }}
          className="relative flex flex-col items-center gap-6"
        >
          <motion.button
            onClick={onOpenModal}
            className="relative group inline-flex items-center gap-4 px-10 py-5 bg-[#111111] text-white rounded-full font-medium text-[18px] transition-all duration-500 shadow-xl hover:shadow-[#0E5A45]/20"
            whileHover={{
              scale: 1.03,
              backgroundColor: "#0E5A45",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-primary-cta"
          >
            <span className="relative z-10">Talk to Us</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </motion.div>
          </motion.button>

          {/* Micro-copy - Friction reduction */}
          <p className="text-[14px] text-[#666666] tracking-wide font-medium">
            No commitment. Flat pricing. Confidential.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};
