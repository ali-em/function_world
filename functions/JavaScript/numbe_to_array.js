// convert a number to array of it , ex : 4 => [1,2,3,4]
// used because we cant use for loop inside jsx
// you can use underscore library instead of this

export const number2array = (num) => {
  let generatedArray = [];
  let i = 0;
  while (++i <= num) generatedArray.push(i);
  return generatedArray;
};
