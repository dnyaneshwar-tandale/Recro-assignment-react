export const isEmpty = (obj: Object) => {
  if (Object.keys(obj).length <= 0 || !obj) {
    return true;
  }
  return false;
};
