import { useEffect, useState } from 'react';

const useIntersectionObserver = (elements: (Element | null)[], options: IntersectionObserverInit) => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
        } else {
          setVisibleSections((prev) => prev.filter((id) => id !== entry.target.id));
        }
      });
    }, options);

    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, [elements, options]);

  return visibleSections;
};

export default useIntersectionObserver;
