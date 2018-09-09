const entityIdsMap = {
  paper: new Paper().id,
  rock: new Rock().id,
  scissors: new Scissors().id
}

App.init(entityIdsMap, 3000)