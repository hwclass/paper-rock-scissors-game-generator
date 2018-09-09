const DOM = (() => {
  const handleOnRunGameClick = (entityIds) => {
    document.querySelector('#run-game').addEventListener('click', () => {
      App.init(entityIds, 3000)
    })
  }
  const attachEvents = () => {
    handleOnRunGameClick(entityIds)
  }

  return {
    attachEvents
  }
})()