import { useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

// Custom hook to use motion values with state
export const useAnimatedCounter = (initialValue: number) => {
  const motionValue = useMotionValue(initialValue);
  const [displayValue, setDisplayValue] = useState(initialValue);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [motionValue]);

  return { motionValue, displayValue };
};
