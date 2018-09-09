const computeResult = (firstSelection, secondSelection) => {
  let message = ''
  if (firstSelection === secondSelection) {
    message = 'tie!'
  } else if (firstSelection === 1) {
    if (secondSelection === 2) {
      message = 'You win!'
    } else if (secondSelection === 3) {
      message = 'Computer wins!'
    }
  } else if (firstSelection === 2) {
    if (secondSelection === 1) {
      message = 'Computer wins!'
    } else if (secondSelection === 3) {
      message = 'You win!'
    }
  } else if (firstSelection === 3) {
    if (secondSelection === 1) {
      message = 'You win!'
    } else if (secondSelection === 2) {
      message = 'Computer wins!'
    }
  }

  return message
}