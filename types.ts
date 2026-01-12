
export type NodeType = 'song' | 'theory' | 'narrative' | 'framework' | 'collaboration';

export interface Concept {
  id: string;
  phrase: string;
  definition: string;
  connections: string[];
}

export interface Node {
  id: string;
  type: NodeType;
  title: string;
  themes: string[];
  excerpt?: string;
  concepts?: Concept[];
  content?: string;
}

export interface Edge {
  source: string;
  target: string;
  type: 'implements' | 'references' | 'themes' | 'conceptual';
  strength: number;
}

export interface GraphData {
  nodes: Node[];
  links: Edge[];
}

export interface HistoryItem {
  nodeId: string;
  title: string;
}
