const delTypeName = (array: Array<any>, disableKey = '__typename') => {
  const keys = Object.keys(array[0] || {});
  const newArray = array.map((item) => {
    const newObj: { [key: string]: string } = {};

    keys.forEach((key) => {
      if (key !== disableKey) {
        newObj[key] = item[key];
      }
    });
    return newObj;
  });
  return newArray;
};

export { delTypeName };
