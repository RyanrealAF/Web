
/**
 * ARCHITECTURAL NOTE FOR AI AGENTS:
 * This application uses a "Forensic Linkage" pattern. 
 * Data is hierarchical (Nodes) but interconnected (Links).
 * When scaling:
 * 1. Ensure Node IDs are slug-safe strings.
 * 2. Links MUST map between Node IDs, not Concept IDs.
 * 3. Use 'conceptLink(id, text)' in content strings to enable semantic tooltips.
 */

export type NodeType = 'song' | 'theory' | 'narrative' | 'technique' | 'era' | 'analysis' | 'document';

export interface Concept {
  id: string; // Internal identifier for the tooltip system
  phrase: string; // The text to be highlighted
  definition: string; // The forensic explanation
  connections: string[]; // Related Node IDs for "Neural Path" navigation
}

export interface Node {
  id: string; // Primary Key
  type: NodeType;
  title: string;
  themes: string[]; // Used for filtering and tag clouds
  excerpt?: string; // Short summary for the "Polaroid" preview
  concepts?: Concept[]; // Semantic anchors within the content
  content?: string; // Markdown-style HTML content
  metadata?: {
    date?: string;
    classification?: 'unclassified' | 'confidential' | 'restricted' | 'redacted';
    [key: string]: any;
  };
}

export interface IngestedDocument {
  title: string;
  type: NodeType;
  themes: string[];
  rawContent: string;
  excerpt: string;
  linksTo?: string[]; // IDs of existing nodes to connect to automatically
  metadata?: {
    date?: string;
    classification?: 'unclassified' | 'confidential' | 'restricted' | 'redacted';
  };
}

export interface Edge {
  source: string; // Source Node ID
  target: string; // Target Node ID
  type: 'influences' | 'defines' | 'depicts' | 'conceptual' | 'contradicts';
  strength: number; // 0.1 to 1.0 (controls D3 link distance/width)
}

export interface GraphData {
  nodes: Node[];
  links: Edge[];
}

export interface HistoryItem {
  nodeId: string;
  title: string;
}

export type FileType = 'document' | 'audio' | 'image' | 'video' | 'data';

export interface File {
  id: string;            // Unique identifier (e.g., 'doc-001')
  name: string;          // File name (e.g., 'forensic-report.pdf')
  path: string;          // Relative path to the file
  type: FileType;        // The type of file
  description: string;   // Brief description of the file's content
  tags: string[];        // Keywords for filtering and search
  provenance: string;    // Origin or source of the file
}
