'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { floatingMenuItems } from '../../lib/constant';

interface NavigationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const menus = floatingMenuItems;

export default function NavigationDialog({ isOpen, onClose }: NavigationDialogProps) {
  const containerVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 100,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 100,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.025,
        type: 'spring' as const,
        stiffness: 500,
        damping: 20,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-30"
          />

          {/* Navigation Dialog */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 h-screen w-full max-w-sm bg-sat-school-primary-yellow shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-8 pt-24">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-black hover:text-sat-school-dark-blue transition-colors"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Navigation Menu */}
              <nav className="flex flex-col gap-8">
                {Object.entries(menus).map(([title, items], categoryIndex) => (
                  <motion.div key={title} custom={categoryIndex} variants={itemVariants}>
                    <h3 className="text-2xl font-bold text-black mb-4 [text-shadow:1px_1px_0_rgba(0,0,0,0.1)]">
                      {title}
                    </h3>
                    <ul className="flex flex-col gap-3 ml-4">
                      {items.map(([link, label], itemIndex) => (
                        <motion.li
                          key={link}
                          custom={categoryIndex * 10 + itemIndex}
                          variants={itemVariants}
                        >
                          <Link
                            href={link}
                            onClick={onClose}
                            className="text-lg font-semibold text-black hover:text-sat-school-dark-blue hover:underline underline-offset-4 transition-colors block"
                          >
                            {label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
