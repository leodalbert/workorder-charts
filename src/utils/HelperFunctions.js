// function to check if in Dev
export const inDev = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return true;
  }
};
