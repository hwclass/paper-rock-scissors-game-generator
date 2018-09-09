let computerSelection
let yourSelection

const App = (() => {
  const init = (gameEntities) => {
    var entityId = Math.floor((Math.random() * Object.keys(gameEntities).length)) + 1
    // computerSelection = Object.keys(gameEntities)[entityId]
    computerSelection = entityId
    console.log(`computer: ${Object.keys(gameEntities)[entityId-1]}`)
    computeResult(yourSelection, computerSelection)
  }

  return {
    init
  }
})()
