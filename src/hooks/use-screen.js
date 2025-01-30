import { useEffect, useState } from 'react'

const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver((([entry] ) => {
      setIsOnScreen(entry.isIntersecting)
    }),{
      threshold: [0.3],
    });
    const refCurrent = ref.current;
    observer.observe(refCurrent);
    return () => {
        observer.unobserve(refCurrent);
    }
}, [ref])
  
  return isOnScreen;
}

export default useOnScreen