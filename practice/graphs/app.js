class Person {
  constructor(name, adjacent = new Set()) {
    this.name = name;
    this.adjacent = adjacent;
  }
}

const homer = new Person("Homer");
const marge = new Person("Marge");
const maggie = new Person("Maggie");
const lisa = new Person("Lisa");
const bart = new Person("Bart");
const grandpa = new Person("Grandpa");
const krusty = new Person("Krusty");

class FriendGraph {
  constructor() {
    this.nodes = new Set();
  }
  addPerson(node) {
    this.nodes.add(node);
  }
  addPeople(nodeList) {
    for (let node of nodeList) {
      this.nodes.add(node);
    }
  }
  setFriends(node1, node2) {
    node1.adjacent.add(node2);
    node2.adjacent.add(node1);
  }
  areConnectedBFS(node1, node2) {
    let queue = [node1];
    const visited = new Set();
    while (queue.length) {
      const current = queue.shift();
      console.log(`BFS visiting: ${current.name}`);
      visited.add(current);
      if (current === node2) return true;

      for (let neighbour of current.adjacent) {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }
    return false;
  }
  areConnectedDFS(node1, node2) {
    let stack = [node1];
    const visited = new Set();
    while (stack.length) {
      const current = stack.pop();
      console.log(`DFS visiting: ${current.name}`);
      visited.add(current);
      if (current === node2) return true;

      for (let neighbour of current.adjacent) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
    return false;
  }
  areConnectedRecursive(node1, node2, seen = new Set([node1])) {
    if (node1 === node2) return true;
    for (let neighbour of node1.adjacent) {
      if (!seen.has(neighbour)) {
        seen.add(neighbour);
        if (this.areConnectedRecursive(neighbour, node2, seen)) {
          return true;
        }
      }
    }
    return false;
  }
}

const simpsons = new FriendGraph();
simpsons.addPeople([homer, marge, lisa, bart, maggie]);

simpsons.addPerson(grandpa);
simpsons.addPerson(krusty);

simpsons.setFriends(bart, lisa);
simpsons.setFriends(homer, marge);
simpsons.setFriends(marge, maggie);
simpsons.setFriends(bart, grandpa);
simpsons.setFriends(grandpa, krusty);

const moe = new Person("Moe");
const barney = new Person("Barney");
const lenny = new Person("Lenny");

simpsons.addPeople([moe, barney, lenny]);
simpsons.setFriends(moe, barney);
simpsons.setFriends(barney, lenny);
