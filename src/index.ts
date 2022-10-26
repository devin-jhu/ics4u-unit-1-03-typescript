/**
 * The HelloWorld program implements an application that
 * simply displays "Hello World!" to the standard output.
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-10-25
 */

import promptSync from 'prompt-sync'

// The program will stop with an incorrect user input
const prompt = promptSync()
const soup = 105
const sub = 60
const pizza = 45
const twoFoods = 1.5
const threeFoods = 2
let totalTime = 0
let seconds = 0

// input
const userInput = prompt('What food (sub, pizza, or soup): ')
const userAmount = prompt('How many (max 3): ')
const amount = parseFloat(userAmount)
// process & output
if (userInput === 'soup' || userInput === 'sub' || userInput === 'pizza') {
  if (userInput === 'soup') {
    totalTime = soup
  } else if (userInput === 'pizza') {
    totalTime = pizza
  } else if (userInput === 'sub') {
    totalTime = sub
  }

  if (amount === 1 || amount === 2 || amount === 3) {
    if (amount === 2) {
      seconds = totalTime * twoFoods
    } else if (amount === 3) {
      seconds = totalTime * threeFoods
    } else if (amount === 1) { 
      seconds = totalTime
    }
    console.log(`it will take ${seconds} seconds.`)
  } else {
    console.log('not a number')
  }
} else {
  console.log('That is an invalid input.')
}
console.log('\nDone.')
