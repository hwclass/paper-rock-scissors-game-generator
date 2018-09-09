const DOM = (() => {
  const selectors = {
    entityButtons: '.choices button',
    runGameButton: '#run-game',
    result: '#result span'
  }

  const generateAutoSelection = (graph) => {
    const nodeId = generateNodeId(graph)
    autoSelection = graph.nodes[nodeId].value
    log('computer', autoSelection)
  }

  const handleOnRunGameClick = (graph) => {
    document.querySelector(selectors.runGameButton).addEventListener('click', () => {
      generateAutoSelection(graph)
      message = computeResult(graph, yourSelection, autoSelection)
      updateResult(message)
    })
  }

  const handleOnEntityClick = (selector) => {
    Array.from(document.querySelectorAll(selector)).map(function(button) {
      button.addEventListener('click', function(evt) {
        cleanResult()
        yourSelection = evt.target.dataset.id
        console.log(`you: ${yourSelection}`)
      })
   })
  }

  const cleanResult = () => {
    document.querySelector(selectors.result).innerHTML = ''
  }

  const updateResult = message => {
    document.querySelector(selectors.result).innerHTML = message
  }

  const attachEvents = graph => {
    handleOnEntityClick(selectors.entityButtons)
    handleOnRunGameClick(graph)
  }

  const popuplateChoicesIntoView = buttons => {
    buttons.map((buttonInfo) => {
      button = document.createElement('button')
      button.id = buttonInfo.name
      button.setAttribute('data-id', buttonInfo.name)
      button.innerHTML = buttonInfo.name
      document.querySelector('.choices').appendChild(button)
    })
  }

  const init = (data, graph) => {
    DOM.popuplateChoicesIntoView(data)
    DOM.attachEvents(graph)
  }

  return {
    attachEvents,
    updateResult,
    popuplateChoicesIntoView,
    init
  }
})()