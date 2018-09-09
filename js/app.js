const App = (() => {
  let graph
  const createGraph = () => {
    graph = new Graph()
    return App
  }

  const addEntitiesIntoGraph = data => {
    data.map((entity) => {
      graph.addNode(entity.name)
    })
    return App
  }

  const addConnections = data => {
    data.map((entity) => {
      entity.beats.map((toBeBeaten) => {
         console.log(entity.name, toBeBeaten)
         graph.addConnection(entity.name, toBeBeaten)
      })
    })
    return App
  }

  const initDom = data => {
    DOM.init(data, graph)
  }

  return {
    createGraph,
    addEntitiesIntoGraph,
    addConnections,
    initDom
  }
})()
