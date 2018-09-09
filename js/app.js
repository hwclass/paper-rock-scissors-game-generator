const App = (() => {
  const init = (gameEntities, countdownValue) => {
    setTimeout(() => {
      var entityId = Math.floor((Math.random() * Object.keys(gameEntities).length))
      console.log(Object.keys(gameEntities)[entityId])
    }, countdownValue)
  }

  return {
    init
  }
})()
