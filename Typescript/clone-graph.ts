interface UndirectedGraphNode {
    label: number;
    neighbors: UndirectedGraphNode[];
  }
  
  function cloneGraph(graph: UndirectedGraphNode | null): UndirectedGraphNode | null {
    if (!graph) return null;
  
    const visited: Map<number, UndirectedGraphNode> = new Map();
    return cloneNode(graph, visited);
  }
  
  function cloneNode(
    node: UndirectedGraphNode,
    visited: Map<number, UndirectedGraphNode>
  ): UndirectedGraphNode {
    if (!node) return null;
  
    if (visited.has(node.label)) {
      return visited.get(node.label)!; 
    }
  
    const clone = new UndirectedGraphNode(node.label);
    visited.set(clone.label, clone);
  
    clone.neighbors = node.neighbors.map((neighbor) => cloneNode(neighbor, visited));
  
    return clone;
  }
  