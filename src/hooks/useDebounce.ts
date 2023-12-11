import { useEffect, useState } from "react";

export const useDebounce = <T>(searchValue: T, delay = 1000): T => {
  const [value, setValue] = useState<T>(searchValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, delay]);

  return value;
};

export {};
