class Graph {
  constructor() {
    this.nodes = []
  }

/**
 * @param {Object} node - A node to be added into Graph.nodes.
 * @return {Array} Node array contaned by Graph.nodes
 */
  addNode(value) {
    return this.nodes.push({
      value,
      beats: []
    })
  }

  /**
   * @param {string}  value - A value supposedly contained by a node 
   * @return {Object} node - A node which has the specified value inside
   */
  find(value) {
    return this.nodes.find(node => {
      return node.value === value
    })
  }

  /**
   * @param {Object} startValue - A node value to have reference from.
   * @param {Object} endValue - A node value to have reference to.
   */
  addConnection(startValue, endValue) {
    let startNode = this.find(startValue)
    let endNode = this.find(endValue)

    if (!startNode || !endNode) {
      throw new Error('Please give an existing node to create a connection')
    }
    
    startNode.beats.push(endNode)
  }
}