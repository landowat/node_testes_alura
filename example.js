const extraHourSum = (salary, extraHourValue) => salary + extraHourValue;

const calculateDiscounts = (salary, discount) => salary - discount;

console.log(extraHourSum(2200, 400))

export {
  extraHourSum,
  calculateDiscounts,
};

// const checkIf = (value) => {
//   const assertions = {
//     exactlyEquals (expected) {
//       if (value !== expected) {
//         throw {};
//       };
//     },
//   };
//   return assertions;
// };

// const test = (titulo, testFunction) => {
//   try {
//     testFunction();
//     console.log(`${titulo} passou!`);
//   } 
//   catch {
//     console.log(`${titulo} não passou!`);
//   }
// };

// test('sumExtraHours', () => {
//   const expected = 2500;
//   const returnedValue = extraHourSum(2100, 500);

//   checkIf(returnedValue).exactlyEquals(expected);
// });

// test('calculateDiscount', () => {
//   const expected = 2200;
//   const returnedValue = calculateDiscounts(2500, 300);

//   checkIf(returnedValue).exactlyEquals(expected);
// });