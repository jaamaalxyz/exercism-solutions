// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(item => item * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const newDeck = [];

  for (let item of deck) {
    if (item === 3) {
      newDeck.push(3, 3, 3)
    } else {
      newDeck.push(item)
    }
  }

  return newDeck
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middleItemIndex = (deck.length) / 2
  return [deck[middleItemIndex - 1], deck[middleItemIndex]]
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const length = deck.length;
  const isEven = length % 2 === 0;
  const middleIndex = (length - 1) / 2;
  
  const topCard = deck.shift();
  if (isEven) {
    deck.splice(middleIndex, 0, topCard);
  } else {
    deck.splice(middleIndex + 1, 0, topCard);
  }

  const bottomCard = deck.pop();
  if (isEven) {
    deck.splice(middleIndex, 0, bottomCard);
  } else {
    deck.splice(middleIndex + 1, 0, bottomCard);
  }

  return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(item => item === 2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b)
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
}
