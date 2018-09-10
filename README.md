### Paper - Rock - Scissors Game Generator

### General Information

This tiny app is a lovely "Paper - Rock - Scissors Game Generator" which sees the data.json file as the foundation of the game. You can extend with whatever else you want by adding new types of choices to be used inside the game like the following:

```
{
  name: "Pillow",
  beats: [
    "Rock", "Spock" // ...
  ]
}
```

### Technical Overview
`./seed/data.json`: This file keeps data to be server from our custom server locally
`./index.js`: The first foundation file for fetching the data to be served for the client-sidde
`./app.js`: Initial start point for making some app-specific executions like putting the data into the view. etc.
`./graph.js`: The graph object which is used to keep the choices data (Paper, Scissors, Rock, etc.) inside with connections to each other. (Paper beats Rock, and etc.).

### Setup

#### Check whether nvm is installed
```
nvm -c
nvm list
```

#### Install Node.js version 10
```
nvm install 10
```

#### Switch to Node.js version 10
```
nvm use 10
```

#### Install dependencies
```
npm install
```

#### Start the server for data (=> /data)
```
npm start
```

#### Open "index.html" in your browser

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


