//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (name, num) => {
  const earthSeconds = 31557600
  
  const getEarthSeconds = (period) => {
    return period * earthSeconds
  }

  const getSeconds = (sec) => {
    return Number((num / getEarthSeconds(sec)).toFixed(2))
  }
  
  switch(name) {
    case 'earth':
    return Number((num / earthSeconds).toFixed(2))
      
    case 'mercury':
      return getSeconds(0.2408467)
      
    case 'venus':
      return getSeconds(0.61519726)
      
    case 'mars':
      return getSeconds(1.8808158)
      
    case 'jupiter':
      return getSeconds(11.862615)
      
    case 'saturn':
      return getSeconds(29.447498)
      
    case 'uranus':
      return getSeconds(84.016846)
      
    case 'neptune':
      return getSeconds(164.79132)

    default:
      return
  }
};
