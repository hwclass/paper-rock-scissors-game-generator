### Instructions

#### Create a graph instance

```
var graph = new Graph()
```

#### Add game entities into the graph

```
graph.addNode('scissors')
graph.addNode('paper')
graph.addNode('rock')
graph.addNode('lizard')
graph.addNode('spock')
```

#### Find a specific node inside the graph

```
graph.find('scissors') // should return the scissors node
```

#### Add connections to each other (in terms of `which beats which`)

```
// Scissors
graph.addConnection('scissors', 'paper') // scissors beats paper
graph.addConnection('scissors', 'lizard') // scissors beats lizard

// Paper
graph.addConnection('paper', 'rock') // paper beats rock
graph.addConnection('paper', 'spock') // paper beats spock

// Rock
graph.addConnection('rock', 'lizard') // rock beats lizard
graph.addConnection('rock', 'scissors') // rock beats scissors

// Lizard
graph.addConnection('lizard', 'spock') // lizard beats spock
graph.addConnection('lizard', 'paper') // lizard beats paper

// Spock
graph.addConnection('spock', 'scissors') // spock beats scissors
graph.addConnection('spock', 'rock') // spock beats scissors
```


