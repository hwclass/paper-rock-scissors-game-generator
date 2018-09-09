const Game = (() => {
  const init = () => {
    loadJSON(function(response) {
      const data = JSON.parse(response)
      App.createGraph(data)
        .addEntitiesIntoGraph(data)
        .addConnections(data)
        .initDom(data)
     })
  }

  return {
    init
  }
})()