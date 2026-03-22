import { useEffect, useRef } from 'react';

interface ScrollIntoViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  animationClass?: string;
}

/**
 * Hook to apply animation class when element scrolls into view
 * @param options - IntersectionObserver options and animation class
 */
export function useScrollIntoView(options: ScrollIntoViewOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', animationClass = 'animate-fade-in-up' } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            entry.target.classList.add(animationClass);
            // Optionally stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, animationClass]);

  return ref;
}
