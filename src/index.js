const arrayHasLength = (array) => {
  return !!(array && Array.isArray(array) && array?.length);
};

module.exports = arrayHasLength;
