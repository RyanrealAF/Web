
import { IngestedDocument } from './types';

/**
 * DEVELOPMENT VAULT
 * To add a new document:
 * 1. Add a new object to the VAULT array.
 * 2. The constants.tsx ingestion engine will automatically map this into the graph on next hot-reload.
 */
export const VAULT: IngestedDocument[] = [
  {
    title: "The 2024 Displacement Log",
    type: "narrative",
    themes: ["eviction", "housing", "material-attrition"],
    excerpt: "A chronological record of structural instability and the weaponization of the domestic sphere.",
    linksTo: ["jess-forensic-analysis", "exploitation-cycle"],
    rawContent: `
      <h2>Log Entry: Dec 25, 2024</h2>
      <p>The tactical revocation of keys. Notice was served not through legal channels but through psychological pressure. 
      The goal was immediate displacement to trigger the Vulnerability State defined in the exploitation manual.</p>

      <h2>Observations on Material Attrition</h2>
      <p>By removing the physical sanctuary, the orchestrator forces the subject into public spaces where surveillance (Civilian Weaponization) is more effective.</p>
    `
  }
];
