import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.4,
          },
        },
        hidden: {},
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))
        : <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {children}
        </motion.div>}
    </motion.div>
  );
}
