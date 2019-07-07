const delTypeName = (array, disableKey = '__typename') => {
  console.log(array);
  console.log(disableKey);
  const keys = Object.keys(array[0] || {});
  const newArray = array.map((item) => {
    const newObj = {};

    keys.forEach((key) => {
      if (key !== disableKey) {
        newObj[key] = item[key];
      }
    });

    return newObj;
  });
  console.log('new', newArray);
  return newArray;
};

export { delTypeName };
