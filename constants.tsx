import { GraphData, Node, Edge, NodeType } from './types';
import { VAULT, FILES } from './vault';

/**
 * AI SYSTEM INSTRUCTIONS (FORENSIC ARCHITECTURE):
 * 1. NEURAL RESONANCE: Every document MUST contain at least two conceptLink() calls to sibling nodes. 
 * 2. LINK CATEGORIZATION: Use 'defines' for theory, 'depicts' for evidence.
 * 3. STYLISTIC MANTRA: "Forensic, Brutalist, Authentic." 
 */

const conceptLink = (id: string, text: string) => 
  `<span data-concept="${id}" class="text-amber-500 underline cursor-help decoration-solid decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">${text}</span>`;

const CORE_NODES: Node[] = [
    {
      id: "psych-warfare-manual",
      type: "theory",
      title: "Psychological Warfare Manual",
      themes: ["doctrine", "non-kinetic", "gray-space"],
      excerpt: "A tactical guide to non-kinetic maneuver and the systematic compromise of a target's reality.",
      concepts: [
        {
          id: "non-kinetic-maneuver",
          phrase: "Non-Kinetic Maneuver",
          definition: "Achieving strategic objectives without physical force.",
          connections: ["asymmetric-threat-model", "authenticity-manifesto", "exploitation-cycle"]
        },
        {
          id: "plausible-deniability",
          phrase: "Plausible Deniability",
          definition: "Designing actions to have a benign alternative explanation.",
          connections: ["civilian-weaponization-doc", "exploitation-cycle", "the-smear"]
        },
        {
          id: "gray-space",
          phrase: "Gray Space",
          definition: "The operational zone between legal and illegal.",
          connections: ["social-test-narrative", "the-smear"]
        }
      ],
      content: `<h2>Preface: The War on Perception</h2>
<p>The core doctrine of this discipline is ${conceptLink("non-kinetic-maneuver", "Non-Kinetic Maneuver")}.</p>
<h3>Strategic Components</h3>
<p>${conceptLink("gray-space", "Gray Space Operations")}: Operating in the shadows, using ${conceptLink("plausible-deniability", "Plausible Deniability")} as a shield.</p>`
    },
    {
      id: "civilian-weaponization-doc",
      type: "theory",
      title: "Civilians as Weapons",
      themes: ["social-engineering", "surveillance", "echo-chambers"],
      excerpt: "Analyzing the Silent Soldiers—neighbors and baristas unknowingly enlisted into surveillance networks.",
      content: `<h2>The Silent Soldiers</h2>
<p>In hyper-connected societies, smear campaigns rely on local faces—trusted neighbors and familiar baristas.</p>`
    },
    {
      id: "jess-forensic-analysis",
      type: "narrative",
      title: "Jess: Relational Duality",
      themes: ["accountability-disorder", "darvo", "eviction"],
      excerpt: "Forensic analysis of a bond defined by lifelong friendship and the weaponization of housing dependency.",
      content: `<h2>The Christmas Eve Escalation</h2>
<p>The relationship with Jess reveals a core paradox: a foundational friend who consistently employed DARVO tactics.</p>`
    },
    {
      id: "asymmetric-threat-model",
      type: "theory",
      title: "The HUMINT Network",
      themes: ["C2", "intelligence", "handlers"],
      excerpt: "Deconstructing the tiered structure of modern psychological operations.",
      content: `<h2>Tiered Command and Control</h2>
<p>Psychological operations require a networked HUMINT unit with a Tiered Structure.</p>`
    },
    {
      id: "lacey-relationship",
      type: "narrative",
      title: "Lacey: Pure Gold to Streets",
      themes: ["foundational-bedrock", "CPS-trauma", "recovery"],
      excerpt: "The ultimate benchmark for connection, lost to systemic pressure.",
      content: `<h2>The Foundational Bedrock</h2>
<p>Ryan's relationship with Lacey was the Ultimate Benchmark.</p>`
    },
    {
      id: "social-test-narrative",
      type: "narrative",
      title: "The Social Test",
      themes: ["San-Diego", "loyalty-test", "survival"],
      excerpt: "A firsthand account of predetermined narratives and the weaponization of basic honesty.",
      content: `<h2>The Debit-Card Probe</h2>
<p>In San Diego, a woman gave me her debit card for an errand, then sent a suspicious text.</p>`
    },
    {
      id: "prison-experience",
      type: "narrative",
      title: "The Cage as a Classroom",
      themes: ["GED-tutor", "leadership", "transformation"],
      excerpt: "How Ryan transformed incarceration into a platform for academic leadership.",
      content: `<h2>Turning the Cage into a Classroom</h2>
<p>Ryan served three prison terms, turning the time into a job site as a GED tutor.</p>`
    },
    {
      id: "authenticity-manifesto",
      type: "theory",
      title: "Authenticity Ain't Optional",
      themes: ["sovereignty", "manifesto", "street-ethics"],
      excerpt: "The philosophical mandate for radical honesty as a necessary survival mechanism.",
      content: `<h2>Narrative Sovereignty</h2>
<p>In the concrete canyons of Southern California, authenticity is a survival mechanism.</p>`
    },
    {
      id: "exploitation-cycle",
      type: "theory",
      title: "The Exploitation Cycle",
      themes: ["reconnaissance", "profiling", "cascade"],
      excerpt: "Deconstructing the three-stage feedback loop of psychological attrition.",
      content: `<h2>The Feedback Loop</h2>
<p>A continuous cycle of reconnaissance, exploitation, and suppression.</p>`
    },
    {
      id: "soft-probe",
      type: "technique",
      title: "The Soft Probe",
      themes: ["recon", "boundaries", "psych-soft-spots"],
      excerpt: "Benign interactions designed to gather intelligence without alerting the target.",
      content: `<h2>Reconnaissance in the Gray</h2>
<p>Psychological probes, often disguised as casual questions, collect data on soft spots.</p>`
    },
    {
      id: "inner-game",
      type: "theory",
      title: "The Inner Game",
      themes: ["intuition", "gaslighting", "mental-warfare"],
      excerpt: "The final battlefield: weaponizing the target's emotions against them.",
      content: `<h2>Internal Sovereignty</h2>
<p>The mind is the final battlespace. Orchestrators use Gaslighting to sow seeds of doubt.</p>`
    },
    {
      id: "the-smear",
      type: "technique",
      title: "The Smear: Social Exile",
      themes: ["disinformation", "reputation", "sabotage"],
      excerpt: "The systematic destruction of public image through rumor dusting.",
      content: `<h2>Reputation Assassination</h2>
<p>A pervasive dissemination of negative information.</p>`
    },
    {
      id: "still-here",
      type: "song",
      title: "Still Here",
      themes: ["sonic-weapon", "memory", "rhythm"],
      excerpt: "A sonic signature designed to anchor the subject's narrative sovereignty.",
      content: `<h3>Verse 1</h3>
<p>Concrete skin and a heart of lead, Remembering the words that the old head said.</p>`
    }
];

const CORE_LINKS: Edge[] = [
    { source: "psych-warfare-manual", target: "asymmetric-threat-model", type: "defines", strength: 0.9 },
    { source: "psych-warfare-manual", target: "exploitation-cycle", type: "defines", strength: 0.8 },
    { source: "psych-warfare-manual", target: "the-smear", type: "defines", strength: 0.7 },
    { source: "psych-warfare-manual", target: "soft-probe", type: "defines", strength: 0.65 },
    { source: "psych-warfare-manual", target: "authenticity-manifesto", type: "contradicts", strength: 0.5 },
    { source: "civilian-weaponization-doc", target: "the-smear", type: "defines", strength: 0.8 },
    { source: "civilian-weaponization-doc", target: "social-test-narrative", type: "depicts", strength: 0.75 },
    { source: "civilian-weaponization-doc", target: "exploitation-cycle", type: "influences", strength: 0.65 },
    { source: "civilian-weaponization-doc", target: "jess-forensic-analysis", type: "conceptual", strength: 0.6 },
    { source: "asymmetric-threat-model", target: "civilian-weaponization-doc", type: "conceptual", strength: 0.9 },
    { source: "asymmetric-threat-model", target: "jess-forensic-analysis", type: "depicts", strength: 0.85 },
    { source: "asymmetric-threat-model", target: "exploitation-cycle", type: "conceptual", strength: 0.8 },
    { source: "asymmetric-threat-model", target: "soft-probe", type: "defines", strength: 0.7 },
    { source: "asymmetric-threat-model", target: "social-test-narrative", type: "conceptual", strength: 0.6 },
    { source: "asymmetric-threat-model", target: "still-here", type: "influences", strength: 0.4 },
    { source: "asymmetric-threat-model", target: "inner-game", type: "influences", strength: 0.5 },
    { source: "jess-forensic-analysis", target: "the-smear", type: "depicts", strength: 0.8 },
    { source: "jess-forensic-analysis", target: "inner-game", type: "conceptual", strength: 0.8 },
    { source: "jess-forensic-analysis", target: "lacey-relationship", type: "conceptual", strength: 0.7 },
    { source: "jess-forensic-analysis", target: "asymmetric-threat-model", type: "depicts", strength: 0.9 },
    { source: "jess-forensic-analysis", target: "authenticity-manifesto", type: "contradicts", strength: 0.6 },
    { source: "jess-forensic-analysis", target: "prison-experience", type: "influences", strength: 0.5 },
    { source: "jess-forensic-analysis", target: "civilian-weaponization-doc", type: "depicts", strength: 0.7 },
    { source: "lacey-relationship", target: "prison-experience", type: "conceptual", strength: 0.6 },
    { source: "lacey-relationship", target: "authenticity-manifesto", type: "conceptual", strength: 0.8 },
    { source: "lacey-relationship", target: "inner-game", type: "influences", strength: 0.7 },
    { source: "prison-experience", target: "authenticity-manifesto", type: "influences", strength: 0.7 },
    { source: "prison-experience", target: "inner-game", type: "influences", strength: 0.75 },
    { source: "prison-experience", target: "still-here", type: "influences", strength: 0.55 },
    { source: "prison-experience", target: "psych-warfare-manual", type: "contradicts", strength: 0.5 },
    { source: "social-test-narrative", target: "soft-probe", type: "depicts", strength: 0.9 },
    { source: "social-test-narrative", target: "exploitation-cycle", type: "depicts", strength: 0.7 },
    { source: "social-test-narrative", target: "authenticity-manifesto", type: "contradicts", strength: 0.6 },
    { source: "inner-game", target: "still-here", type: "influences", strength: 0.6 },
    { source: "inner-game", target: "prison-experience", type: "conceptual", strength: 0.65 },
    { source: "inner-game", target: "psych-warfare-manual", type: "contradicts", strength: 0.5 },
    { source: "inner-game", target: "soft-probe", type: "conceptual", strength: 0.6 },
    { source: "the-smear", target: "social-test-narrative", type: "depicts", strength: 0.8 },
    { source: "the-smear", target: "soft-probe", type: "conceptual", strength: 0.6 },
    { source: "the-smear", target: "asymmetric-threat-model", type: "conceptual", strength: 0.7 },
    { source: "the-smear", target: "jess-forensic-analysis", type: "conceptual", strength: 0.65 },
    { source: "the-smear", target: "exploitation-cycle", type: "influences", strength: 0.6 },
    { source: "exploitation-cycle", target: "soft-probe", type: "defines", strength: 0.7 },
    { source: "exploitation-cycle", target: "asymmetric-threat-model", type: "conceptual", strength: 0.8 },
    { source: "exploitation-cycle", target: "jess-forensic-analysis", type: "depicts", strength: 0.6 },
    { source: "exploitation-cycle", target: "the-smear", type: "influences", strength: 0.7 },
    { source: "authenticity-manifesto", target: "still-here", type: "conceptual", strength: 0.9 },
    { source: "authenticity-manifesto", target: "social-test-narrative", type: "contradicts", strength: 0.5 },
    { source: "authenticity-manifesto", target: "psych-warfare-manual", type: "contradicts", strength: 0.7 },
    { source: "authenticity-manifesto", target: "prison-experience", type: "influences", strength: 0.6 },
    { source: "still-here", target: "lacey-relationship", type: "depicts", strength: 0.5 },
    { source: "still-here", target: "authenticity-manifesto", type: "conceptual", strength: 0.85 },
    { source: "still-here", target: "prison-experience", type: "depicts", strength: 0.6 },
    { source: "soft-probe", target: "the-smear", type: "conceptual", strength: 0.55 },
    { source: "soft-probe", target: "asymmetric-threat-model", type: "conceptual", strength: 0.6 },
    { source: "soft-probe", target: "inner-game", type: "conceptual", strength: 0.7 },
    { source: "soft-probe", target: "jess-forensic-analysis", type: "depicts", strength: 0.5 }
];

function processVault(): { nodes: Node[], links: Edge[] } {
  const nodes: Node[] = [];
  const links: Edge[] = [];

  VAULT.forEach(doc => {
    const id = doc.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
    nodes.push({
      id,
      type: doc.type,
      title: doc.title,
      themes: [...doc.themes, 'ingested'],
      excerpt: doc.excerpt,
      content: doc.rawContent,
      metadata: doc.metadata // Map metadata here
    });

    if (doc.linksTo) {
      doc.linksTo.forEach(targetId => {
        links.push({
          source: id,
          target: targetId,
          type: 'conceptual',
          strength: 0.5
        });
      });
    }
  });

  return { nodes, links };
}

function processFiles(): { nodes: Node[] } {
    const nodes: Node[] = [];
  
    FILES.forEach(file => {
      nodes.push({
        id: file.id,
        type: file.type as NodeType,
        title: file.name,
        themes: file.tags,
        excerpt: file.description,
        content: `<p>Provenance: ${file.provenance}</p><a href="${file.path}" target="_blank" rel="noopener noreferrer">Open File</a>`,
        metadata: {
          filePath: file.path,
        }
      });
    });
  
    return { nodes };
  }

const vaultIngestion = processVault();
const fileIngestion = processFiles();

export const INITIAL_GRAPH: GraphData = {
  nodes: [...CORE_NODES, ...vaultIngestion.nodes, ...fileIngestion.nodes],
  links: [...CORE_LINKS, ...vaultIngestion.links]
};

export const COLORS = {
  song: "#06b6d4",
  theory: "#f97316",
  narrative: "#f5f5f5",
  technique: "#84cc16",
  era: "#a855f7",
  analysis: "#e879f9",
  background: "#080808",
  connection: "rgba(249, 115, 22, 0.2)",
  document: "#facc15",
  audio: "#06b6d4",     // Cyan (reusing song color)
  image: "#a855f7",     // Purple
  video: "#ef4444",     // Red
  data: "#10b981"       // Emerald
};