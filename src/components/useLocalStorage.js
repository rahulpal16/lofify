import { useEffect, useState } from "react";

export const useLocalStorage = (key, InitialState) => {
  const get = () => {
    const storage = window.localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return InitialState;
  };
  const [value, setvalue] = useState(get());
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify({ value: value }));
  }, [value]);

  return [value, setvalue];
};
