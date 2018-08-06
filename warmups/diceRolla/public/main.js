createListItem = (content) => {
  const newLi = document.createElement('li')
  newLi.textContent = content
  document.querySelector('#output').appendChild(newLi)
}

rollDice = (numberOfSides, multiplier, modifier) => {
  if (!numberOfSides && !multiplier && !modifier) {
    const numOfSides = parseInt(document.querySelector(numberOfSides).value)
    const multi = parseInt(document.querySelector(multiplier).value)
    const mod = parseInt(document.querySelector(modifier).value)
    const rollOutcome = Math.ceil(Math.random() * numOfSides)
    console.log(rollOutcome, multi, mod)
    console.log((rollOutcome * multi) + mod)
    const rollOutcomeMore = ((rollOutcome * multi) + mod)
    createListItem(rollOutcomeMore)
  }
  else {
    const errorMessage = 'Please enter a value into all of the text boxes above!'
    createListItem(errorMessage)
  }
}

document.querySelector('.dice-button').addEventListener('click', () => rollDice('#number-of-sides', '#multiplier', '#modifier'))
