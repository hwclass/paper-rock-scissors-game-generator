const DOM = (() => {
  const handleOnRunGameClick = (entityIds) => {
    document.querySelector('#run-game').addEventListener('click', () => {
      App.init(entityIds, countdown)
    })
  }
  const attachEvents = () => {
    handleOnRunGameClick(entityIds)
  }

  return {
    attachEvents
  }
})()