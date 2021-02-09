// function to check if in Dev
export const inDev = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return true;
  }
};

// function to generate color from array by index
export const colorSelector = (i) => {
  return [
    '#174656',
    '#779966',
    '#930900',
    '#ffa47a',
    '#00897a',
    '#aa9977',
    '#e5ee99',
    '#bbbb77',
    '#fff993',
    '#ffaa66',
    '#557755',
    '#bbffee',
    '#58a184',
    '#f0caa2',
    '#115500',
  ][i];
};
