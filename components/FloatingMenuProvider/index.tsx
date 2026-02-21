'use client';

import { useState } from 'react';
import FloatingMenuButton from '../FloatingMenuButton';
import NavigationDialog from '../NavigationDialog';

export default function FloatingMenuProvider() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingMenuButton onOpenChange={setIsOpen} isOpenNavDialog={isOpen} />
      <NavigationDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
