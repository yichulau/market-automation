import { useState, useEffect } from 'react';


export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const innerWidth = hasWindow ? window.innerWidth : null;
    const innerHeight = hasWindow ? window.innerHeight : null;
    return {
      innerWidth,
      innerHeight
    };
  }

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if(hasWindow){
 
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

  }, [hasWindow]);

  return windowDimensions;
}