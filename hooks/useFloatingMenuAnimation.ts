import { useState } from 'react';

export function useFloatingMenuAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    isHovered,
    setIsHovered,
    toggleMenu,
    closeMenu,
  };
}
