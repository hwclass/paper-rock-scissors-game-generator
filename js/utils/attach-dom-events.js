const DOM = (() => {
  const selectors = {
    entityButtons: '.entities button',
    runGameButton: '#run-game',
    result: '#result span'
  }

  const handleOnRunGameClick = (entityIds) => {
    document.querySelector(selectors.runGameButton).addEventListener('click', () => {
      App.init(entityIds)
    })
  }

  const handleOnEntityClick = (selector) => {
    Array.from(document.querySelectorAll(selector)).map(function(button) {
      button.addEventListener('click', function(evt) {
        cleanResult()
        entityId = parseInt(evt.target.dataset.id)
        // yourSelection = Object.keys(entityIds)[entityId-1]
        yourSelection = entityId
        console.log(`you: ${Object.keys(entityIds)[entityId-1]}`)
      })
   })
  }

  const cleanResult = () => {
    document.querySelector(selectors.result).innerHTML = ''
  }

  const updateResult = (message) => {
    document.querySelector(selectors.result).innerHTML = message
  }

  const attachEvents = () => {
    handleOnEntityClick(selectors.entityButtons)
    handleOnRunGameClick(entityIds)
  }

  return {
    attachEvents,
    updateResult
  }
})()