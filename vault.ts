
import { IngestedDocument, File } from './types';

/**
 * FORENSIC VAULT: PRIMARY INGESTION POINT
 * 
 * VS CODE TIP: Use 'vault-entry' snippet to add new documents here.
 * Every entry here is automatically mapped into the D3 graph by the 
 * constants.tsx ingestion engine.
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
  },
  {
    title: "Gaslighter's Delight",
    type: "song",
    themes: ["music", "psychological-abuse", "forensic-audio"],
    excerpt: "A rhythmic dissection of the verbal loops and reality distortions used to erode a target's confidence.",
    linksTo: ["psych-warfare-manual", "jess-forensic-analysis", "inner-game"],
    rawContent: `
      <h2>Lyrical Analysis: The Mirror Phase</h2>
      <p>The track opens with a dissonant loop, mimicking the circular logic of a DARVO defense. The lyrics recount a series of "deniable events" where the speaker is told their memory is a "fractured lens."</p>

      <h3>Chorus</h3>
      <p>It's just a shadow in your mind, they say,</p>
      <p>While they move the furniture out the way.</p>
      <p>They paint the truth a darker shade of white,</p>
      <p>Welcome to the Gaslighter's Delight.</p>

      <h2>Reclaiming Ground</h2>
      <p>The bridge marks a sonic shift—a heavy, grounded bassline that represents the re-establishment of 
      <span data-concept="narrative-sovereignty" class="text-amber-500 underline cursor-help decoration-solid decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">Narrative Sovereignty</span>. 
      The subject stops arguing with the distortion and starts documenting the frequency.</p>
    `
  }
  // NEW ENTRIES START BELOW
];

export const FILES: File[] = [
  {
    id: 'doc-001',
    name: 'RyanrealAF_A_Multifaceted_Analysis_of_Brand_and_Persona.txt',
    path: 'add/notebooklm-import-raw/RyanrealAF_ A Multifaceted Analysis of Brand and Persona.txt',
    type: 'document',
    description: 'A deep dive into the online persona of "RyanrealAF," analyzing its construction and impact.',
    tags: ['persona-analysis', 'social-media', 'digital-identity'],
    provenance: 'NotebookLM Import',
  },
  {
    id: 'doc-002',
    name: 'The_Honeypot_Doctrine_(Bars).txt',
    path: 'add/notebooklm-import-raw/The Honeypot Doctrine (Bars).txt',
    type: 'document',
    description: 'A document outlining a strategy of using "honeypots" for intelligence gathering and manipulation.',
    tags: ['doctrine', 'intelligence', 'manipulation'],
    provenance: 'NotebookLM Import',
  },
  {
    id: 'doc-003',
    name: 'The_Infiltrators_Playbook.txt',
    path: 'add/notebooklm-import-raw/The Infiltrator\'s Playbook.txt',
    type: 'document',
    description: 'A guide for undercover operations, detailing methods of infiltration and deception.',
    tags: ['infiltration', 'deception', 'undercover'],
    provenance: 'NotebookLM Import',
  }
];
