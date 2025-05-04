export const getValueDeepKey = (object: any, key: string) => {
  if (!key) return null;
  const deepKeys = key.split(".");
  let obj = { ...object };
  for (let i = 0; i < deepKeys.length; i++) {
    obj = obj[deepKeys[i]];
  }
  return obj;
};

export const debounce = (delay: number, cb: any) => {
  let timer: number;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
