"use client";

import { motion, animate } from "motion/react";
import React, { useEffect, useMemo } from "react";
import { useAnimatedCounter } from "@/hooks";
import { calculateTimePassed } from "@/lib/utils";

const AgeCounter = () => {
  // Create animated counter for the total time value
  const totalTimeCounter = useAnimatedCounter(0);

  // Memoize the birth date calculation
  const birthDate = useMemo(() => new Date(2002, 5, 4), []);

  useEffect(() => {
    const calculateTotalTime = () => {
      // Use the utility function instead of duplicating the calculation
      return calculateTimePassed(4, 6, 2002); // day, month, year
    };

    // Set initial value
    const initialTime = calculateTotalTime();
    totalTimeCounter.motionValue.set(initialTime);

    // Update every 16ms (60fps) for smooth animation
    const interval = setInterval(() => {
      const currentTime = calculateTotalTime();

      // Animate the total time value smoothly
      animate(totalTimeCounter.motionValue, currentTime, { duration: 0.016 });
    }, 16);

    return () => clearInterval(interval);
  }, [birthDate, totalTimeCounter.motionValue]);

  return (
    <motion.div>
      <motion.div
        className="text-xs font-medium font-mono mb-1"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {totalTimeCounter.displayValue.toFixed(20)}
      </motion.div>
    </motion.div>
  );
};

export default AgeCounter;
