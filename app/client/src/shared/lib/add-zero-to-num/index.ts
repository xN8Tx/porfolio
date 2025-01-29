const addZeroToNum = (number: number): string => {
  if (number >= 10) return `${number}`;
  return `0${number}`;
};

export { addZeroToNum };
