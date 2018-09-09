const computeResult = (firstSelection, secondSelection) => {
  if (firstSelection === secondSelection) {
    console.log('tie!')
  } else if (firstSelection === 1) {
    if (secondSelection === 2) {
      console.log('You win!')
    } else if (secondSelection === 3) {
      console.log('Computer wins!')
    }
  } else if (firstSelection === 2) {
    if (secondSelection === 1) {
      console.log('Computer wins!')
    } else if (secondSelection === 3) {
      console.log('You win!')
    }
  } else if (firstSelection === 3) {
    if (secondSelection === 1) {
      console.log('You win!')
    } else if (secondSelection === 2) {
      console.log('Computer wins!')
    }
  }
}