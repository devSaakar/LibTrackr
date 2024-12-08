type TimeoutIdType = ReturnType<typeof setTimeout>;

export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) => {
  let timeoutId: TimeoutIdType = setTimeout(() => {}, 0);

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
