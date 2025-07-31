//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (duo) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  
  const value = COLORS.indexOf(duo[0])
  const value2 = COLORS.indexOf(duo[1])
  return value * 10 + value2
};
