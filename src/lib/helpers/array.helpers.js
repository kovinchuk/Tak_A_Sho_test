export const sortArrayOfObjectsByFields = (array, field) => {
  if (Array.isArray(array)) {
    const shallowCopy = [...array];

    shallowCopy.sort((a, b) => {
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }

      return 0;
    });

    return shallowCopy;
  }

  return array;
};
