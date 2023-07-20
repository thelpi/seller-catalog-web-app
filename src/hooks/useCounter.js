import { useState } from "react";

/**
 * @param {number} initValue
 * @param {number} step
 * @returns {[number, { increment: () => void, decrement: () => void }]}
 */
export default function useCounter(initValue, step) {
  const [counter, setCounter] = useState(initValue);

  const decrement = () => setCounter(counter - step);
  const increment = () => setCounter(counter + step);

  return [counter, { increment, decrement }];
}
