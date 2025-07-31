/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === '' || time === undefined) {
    return 'You forgot to set the timer.'
  }
  
  if (time === 0) {
    return 'Lasagna is done.'
  } else if (time > 0) {
    return 'Not done, please wait.'
  }
  
}

export function preparationTime(layers, time) {
  const min = time ?? 2
  return layers.length * min;
}

export function quantities(layers) {
  const obj = {
    'noodles': 0,
    'sauce': 0
  }

  layers.forEach(item => {
    if (item === 'noodles') {
      obj['noodles'] = obj['noodles'] + 50
    } else if (item === 'sauce') {
      obj['sauce'] = obj['sauce'] + 0.2
    }
  })

  return obj
}

export function addSecretIngredient(friendsList, myList) {
  const item = friendsList[friendsList.length-1]
  myList.push(item)
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  for (const ingredient in recipe) {
    const scaledAmount = recipe[ingredient] * portions / 2;
    scaledRecipe[ingredient] = scaledAmount;
  }
  
  return scaledRecipe;
}