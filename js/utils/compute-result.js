const computeResult = (graph, firstSelection, secondSelection) => {
  // let message = ''
  // if (firstSelection === secondSelection) {
  //   message = 'tie!'
  // } else if (firstSelection === 1) {
  //   if (secondSelection === 2) {
  //     message = 'You win!'
  //   } else if (secondSelection === 3) {
  //     message = 'Computer wins!'
  //   }
  // } else if (firstSelection === 2) {
  //   if (secondSelection === 1) {
  //     message = 'Computer wins!'
  //   } else if (secondSelection === 3) {
  //     message = 'You win!'
  //   }
  // } else if (firstSelection === 3) {
  //   if (secondSelection === 1) {
  //     message = 'You win!'
  //   } else if (secondSelection === 2) {
  //     message = 'Computer wins!'
  //   }
  // }

  // return message
  let message
  if (firstSelection === secondSelection) {
    message = 'You tie!'
  } else {
    graph.find(firstSelection).beats.filter((beat) => {
      if (beat.value === secondSelection) {
        message = 'You win!'
      } else {
        graph.find(secondSelection).beats.filter((beat) => {
          if (beat.value === firstSelection) {
            message = 'Computer wins!'
          }
        })
      }
    })
  }
  return message
}