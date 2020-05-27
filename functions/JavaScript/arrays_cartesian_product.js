const cartesianFunction = (array1, array2) =>
  [].concat(
    ...array1.map((array1Item) =>
      array2.map((array2Items) => [].concat(array1Item, array2Items))
    )
  );
const cartesianProduct = (array1, array2, ...otherArrays) =>
  array2
    ? cartesianProduct(cartesianFunction(array1, array2), ...otherArrays)
    : array1;
