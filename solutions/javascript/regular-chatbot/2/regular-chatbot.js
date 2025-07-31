// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const chatbot = 'chatbot'
  return command.slice(0, chatbot.length).toLowerCase() === chatbot;
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const words = message.split(' ')
  const filteredWords = words.map(word => {
    if (word.includes('emoji')) {
      return ''
    } else {
      return word
    }
  })
  const newMessage = filteredWords.join(' ')
  return newMessage
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const re = /\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}/
  const isPass = re.test(number)
  if (isPass) {
    return "Thanks! You can now download me to your phone."
  } else {
    return `Oops, it seems like I can't reach out to ${number}`
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const arr = userInput.split(' ')
  return arr.filter(word => word.includes('.'))
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  return `Nice to meet you, ${fullName.split(', ').reverse().join(' ')}`
}
