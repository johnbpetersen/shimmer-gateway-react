// src/hooks/useIsDesktop.ts
import { useState, useEffect } from 'react';

const useIsDesktop = (breakpoint = 768) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Set the initial value after the component mounts
    // to ensure window is available (client-side only)
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };
    
    checkScreenSize(); // Initial check
    
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;