//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (name, num) => {
  const earthSeconds = 31557600
  const getEarthSeconds = (period) => {
    return period * earthSeconds
  }
  switch(name) {
    case 'earth':
    return Number((num / earthSeconds).toFixed(2))
      
    case 'mercury':
      return Number((num / getEarthSeconds(0.2408467)).toFixed(2))
      
    case 'venus':
      return Number((num / getEarthSeconds(0.61519726)).toFixed(2))
      
    case 'mars':
      return Number((num / getEarthSeconds(1.8808158)).toFixed(2))
      
    case 'jupiter':
      return Number((num / getEarthSeconds(11.862615)).toFixed(2))
      
    case 'saturn':
      return Number((num / getEarthSeconds(29.447498)).toFixed(2))
      
    case 'uranus':
      return Number((num / getEarthSeconds(84.016846)).toFixed(2))
      
    case 'neptune':
      return Number((num / getEarthSeconds(164.79132)).toFixed(2))

    default:
      return
  }
};
