'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useFloatingMenuAnimation } from '../../hooks/useFloatingMenuAnimation';

interface FloatingMenuButtonProps {
  isOpenNavDialog: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export default function FloatingMenuButton({
  onOpenChange,
  isOpenNavDialog,
}: FloatingMenuButtonProps) {
  const { isOpen, isHovered, setIsHovered, toggleMenu, closeMenu } =
    useFloatingMenuAnimation();
  // const [isIconX, setIsIconX] = useState(false);

  const handleClick = () => {
    toggleMenu();
    // setIsIconX(!isIconX);
    onOpenChange?.(!isOpen);
  };

  useEffect(() => {
    if (!isOpenNavDialog) {
      closeMenu();
      // setIsIconX(false);
    }
  }, [isOpenNavDialog]);

  return (
    <motion.button
      initial={{ scale: 1 }}
      animate={{
        scale: isHovered ? 1.15 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="fixed top-[50px] right-8 w-16 h-16 bg-sat-school-primary-yellow rounded-full flex items-center justify-center z-40 cursor-pointer group"
      style={{
        boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 0 0 4px rgba(244, 226, 138, 0.3)',
      }}
    >
      {/* Shining effect on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full border-2 border-white"
        />
      )}

      {/* Hamburger/X Icon */}
      <motion.div
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-black"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </motion.div>
    </motion.button>
  );
}
