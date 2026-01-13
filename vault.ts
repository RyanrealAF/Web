
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
];
