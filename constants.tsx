
import { GraphData, Node, Edge } from './types';
import { VAULT } from './vault';

/**
 * AI SYSTEM INSTRUCTIONS (VS CODE / LLM):
 * 1. NEURAL RESONANCE: Every document must contain at least two conceptLink() calls to sibling nodes.
 * 2. FORENSIC INTEGRITY: Links are the lifeblood. When adding nodes, use CORE_LINKS to map logical dependencies.
 * 3. INGESTION FLOW: The VAULT is for staging; CORE_NODES is for the permanent archive. 
 * 4. INTERACTION: Concept links trigger a "Zoom to Web" selection phase before document entry.
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
          definition: "Achieving strategic objectives without physical force, using human vulnerabilities as the primary battlespace.",
          connections: ["asymmetric-threat-model", "authenticity-manifesto", "exploitation-cycle"]
        },
        {
          id: "plausible-deniability",
          phrase: "Plausible Deniability",
          definition: "Designing actions to have a benign alternative explanation, granting the orchestrator total impunity.",
          connections: ["civilian-weaponization-doc", "exploitation-cycle", "the-smear"]
        },
        {
          id: "gray-space",
          phrase: "Gray Space",
          definition: "The operational zone between legal and illegal, where rules are fluid and morality is weaponized.",
          connections: ["social-test-narrative", "the-smear"]
        }
      ],
      content: `<h2>Preface: The War on Perception</h2>
<p>The core doctrine of this discipline is ${conceptLink("non-kinetic-maneuver", "Non-Kinetic Maneuver")}, which dictates that strategic objectives are achieved without direct confrontation. This is a war on perception.</p>

<h3>Strategic Components</h3>
<p>Psychological Attrition: Systematic application of stress to deplete cognitive resources.</p>
<p>${conceptLink("gray-space", "Gray Space Operations")}: Operating in the shadows, using ${conceptLink("plausible-deniability", "Plausible Deniability")} as a shield.</p>
<p>Alternative Narratives: Fabricated explanations that frame aggressive actions as innocent events.</p>`
    },
    {
      id: "civilian-weaponization-doc",
      type: "theory",
      title: "Civilians as Weapons",
      themes: ["social-engineering", "surveillance", "echo-chambers"],
      excerpt: "Analyzing the Silent Soldiers—neighbors and baristas unknowingly enlisted into surveillance networks.",
      concepts: [
        {
          id: "civilian-weaponization",
          phrase: "Civilian Weaponization",
          definition: "The systematic manipulation of everyday individuals into performing roles in a defamation campaign.",
          connections: ["asymmetric-threat-model", "the-smear", "social-test-narrative"]
        },
        {
          id: "narrative-entrapment",
          phrase: "Narrative Entrapment",
          definition: "Reinterpreting benign actions through a pre-established lens of suspicion.",
          connections: ["inner-game", "social-test-narrative", "jess-forensic-analysis"]
        }
      ],
      content: `<h2>The Silent Soldiers</h2>
<p>In hyper-connected societies, smear campaigns move beyond bots and media. They rely on local faces—trusted neighbors and familiar baristas—to engineer perception.</p>

<h3>Mechanisms of Conscription</h3>
<p>Authenticity Leverage: Neighbors are seen as neutral observers.</p>
<p>${conceptLink("civilian-weaponization", "Deniable Diffusion")}: Decentralized spreading of suspicion via civilian networks.</p>
<p>${conceptLink("narrative-entrapment", "Narrative Entrapment")}: Common behaviors are pre-branded as odd or suspicious, a technique frequently used in ${conceptLink("civilian-weaponization", "Street-Level Operative Deployment")}.</p>`
    },
    {
      id: "jess-forensic-analysis",
      type: "narrative",
      title: "Jess: Relational Duality",
      themes: ["accountability-disorder", "darvo", "eviction"],
      excerpt: "Forensic analysis of a bond defined by lifelong friendship and the weaponization of housing dependency.",
      concepts: [
        {
          id: "asymmetric-loyalty",
          phrase: "Asymmetric Loyalty",
          definition: "A structural imbalance where one party provides years of support without reciprocation.",
          connections: ["lacey-relationship", "authenticity-manifesto", "prison-experience", "asymmetric-threat-model"]
        },
        {
          id: "darvo",
          phrase: "DARVO",
          definition: "Deny, Attack, and Reverse Victim and Offender.",
          connections: ["inner-game", "the-smear", "psych-warfare-manual", "exploitation-cycle"]
        }
      ],
      content: `<h2>The Christmas Eve Escalation</h2>
<p>The relationship with Jess reveals a core paradox: a foundational friend who consistently employed ${conceptLink("darvo", "DARVO")} tactics to evade responsibility.</p>

<h3>The Material Turn</h3>
<p>The Christmas Eve 2024 eviction represents a shift from psychological harm to material punishment. When the subject refused a direct lie, Jess deployed the ultimate weapon: revoking housing, a classic ${conceptLink("darvo", "Reversal Strategy")}.</p>

<h3>Forensic Findings</h3>
<p>${conceptLink("asymmetric-loyalty", "Asymmetric Loyalty")}: The subject carried the bond for years, never once kicking Jess out despite repeated betrayals.</p>
<p>Strategic Amnesia: Documented text exchanges show Jess asking "Get over what exactly?"—a hallmark of ${conceptLink("darvo", "Gaslighting")} protocol.</p>`
    },
    {
      id: "asymmetric-threat-model",
      type: "theory",
      title: "The HUMINT Network",
      themes: ["C2", "intelligence", "handlers"],
      excerpt: "Deconstructing the tiered structure of modern psychological operations.",
      concepts: [
        {
          id: "tier-structure",
          phrase: "Tiered Structure",
          definition: "The layered command and control model used to insulate the primary architect.",
          connections: ["psych-warfare-manual", "civilian-weaponization-doc", "exploitation-cycle"]
        },
        {
          id: "access-agent",
          phrase: "Access Agent",
          definition: "A person with pre-existing emotional proximity to the target who is co-opted for surveillance.",
          connections: ["jess-forensic-analysis", "lacey-relationship"]
        }
      ],
      content: `<h2>Tiered Command and Control</h2>
<p>Psychological operations are never the work of a lone actor. They require a networked HUMINT unit with a ${conceptLink("tier-structure", "Tiered Structure")}.</p>

<h3>The Hierarchy</h3>
<p>Tier 0 Architect: The strategic visionary who design the operation.</p>
<p>Tier 1 Orchestrator: Commands via insinuation and plausible deniability.</p>
<p>Tier 2 ${conceptLink("access-agent", "Access Agents")}: Use Rapport as a Weapon to gain proximity.</p>
<p>Tier 3 Operatives: Witting or Unwitting Operatives performing street-level maneuvers.</p>`
    },
    {
      id: "lacey-relationship",
      type: "narrative",
      title: "Lacey: Pure Gold to Streets",
      themes: ["foundational-bedrock", "CPS-trauma", "recovery"],
      excerpt: "The ultimate benchmark for connection, lost to systemic pressure.",
      concepts: [
        {
          id: "recovery-vision",
          phrase: "Recovery Vision",
          definition: "A collaborative framework for stability built on mutual trust and shared growth.",
          connections: ["authenticity-manifesto", "still-here", "prison-experience"]
        }
      ],
      content: `<h2>The Foundational Bedrock</h2>
<p>Ryan's relationship with Lacey was the Ultimate Benchmark. They built a ${conceptLink("recovery-vision", "Recovery Vision")} together that was 80% pure gold.</p>

<h3>Systemic Shattering</h3>
<p>Past CPS trauma forced a flee to California. Stability evaporated, ending in a suicidal full kamikaze incident. This loss directly informs the urgency of the ${conceptLink("recovery-vision", "Authenticity Mandate")}.</p>`
    },
    {
      id: "social-test-narrative",
      type: "narrative",
      title: "The Social Test",
      themes: ["San-Diego", "loyalty-test", "survival"],
      excerpt: "A firsthand account of predetermined narratives and the weaponization of basic honesty.",
      concepts: [
        {
          id: "forced-failure",
          phrase: "Forced Failure",
          definition: "Designing a situation where any response from the target is framed as a negative outcome.",
          connections: ["soft-probe", "exploitation-cycle", "the-smear"]
        }
      ],
      content: `<h2>The Debit-Card Probe</h2>
<p>In San Diego, a woman gave me her debit card for an errand, then sent a suspicious text. My honest return was met with fury.</p>

<h3>The Goal: ${conceptLink("forced-failure", "Forced Failure")}</h3>
<p>I realized the point wasn't for me to succeed; it was to fit a pre-written story used to frame honest behavior as malice, a typical ${conceptLink("forced-failure", "Social Test Strategy")}.</p>`
    },
    {
      id: "prison-experience",
      type: "narrative",
      title: "The Cage as a Classroom",
      themes: ["GED-tutor", "leadership", "transformation"],
      excerpt: "How Ryan transformed incarceration into a platform for academic leadership.",
      concepts: [
        {
          id: "transformation-logic",
          phrase: "Academic Leadership",
          definition: "Utilizing institutional constraints to foster intellectual growth and community sovereignty.",
          connections: ["authenticity-manifesto", "recovery-vision", "inner-game"]
        }
      ],
      content: `<h2>Turning the Cage into a Classroom</h2>
<p>Ryan served three prison terms, turning the time into a job site. As a GED tutor, he outperformed credentialed teachers by speaking the language of the guys.</p>
<p>This period of ${conceptLink("transformation-logic", "Academic Leadership")} laid the groundwork for a broader philosophical shift toward radical honesty and the development of the ${conceptLink("transformation-logic", "Inner Game")}.</p>`
    },
    {
      id: "authenticity-manifesto",
      type: "theory",
      title: "Authenticity Ain't Optional",
      themes: ["sovereignty", "manifesto", "street-ethics"],
      excerpt: "The philosophical mandate for radical honesty as a necessary survival mechanism.",
      content: `<h2>Narrative Sovereignty</h2>
<p>In the concrete canyons of Southern California, authenticity is not a choice—it is a survival mechanism. If we don't write our story, the city paints it over.</p>`
    },
    {
      id: "exploitation-cycle",
      type: "theory",
      title: "The Exploitation Cycle",
      themes: ["reconnaissance", "profiling", "cascade"],
      excerpt: "Deconstructing the three-stage feedback loop of psychological attrition.",
      content: `<h2>The Feedback Loop</h2>
<p>A continuous cycle of reconnaissance, exploitation, and suppression. Triggering a predictable response to feed the Justification Engine, directly feeding into the ${conceptLink("tier-structure", "Command Hierarchy")}.</p>`
    },
    {
      id: "soft-probe",
      type: "technique",
      title: "The Soft Probe",
      themes: ["recon", "boundaries", "psych-soft-spots"],
      excerpt: "Benign interactions designed to gather intelligence without alerting the target.",
      content: `<h2>Reconnaissance in the Gray</h2>
<p>Psychological probes, often disguised as casual questions, collect data on psychological soft spots for future ${conceptLink("narrative-entrapment", "Entrapment")}.</p>`
    },
    {
      id: "inner-game",
      type: "theory",
      title: "The Inner Game",
      themes: ["intuition", "gaslighting", "mental-warfare"],
      excerpt: "The final battlefield: weaponizing the target's emotions against them.",
      content: `<h2>Internal Sovereignty</h2>
<p>The mind is the final battlespace. Orchestrators use Gaslighting to sow seeds of doubt. Survival requires transitioning from victim to analyst, a lesson learned in ${conceptLink("transformation-logic", "The Cage")}.</p>`
    },
    {
      id: "the-smear",
      type: "technique",
      title: "The Smear: Social Exile",
      themes: ["disinformation", "reputation", "sabotage"],
      excerpt: "The systematic destruction of public image through rumor dusting.",
      content: `<h2>Reputation Assassination</h2>
<p>A pervasive dissemination of negative information. Components include Rumor Dusting and Folk Devil Construction, often facilitated by ${conceptLink("access-agent", "Unwitting Access Agents")}.</p>`
    },
    {
      id: "still-here",
      type: "song",
      title: "Still Here",
      themes: ["sonic-weapon", "memory", "rhythm"],
      excerpt: "A sonic signature designed to anchor the subject's narrative sovereignty.",
      content: `<h3>Verse 1</h3>
<p>Concrete skin and a heart of lead,</p>
<p>Remembering the words that the old head said.</p>
<p>They can paint the wall, they can clear the lane,</p>
<p>But they can't scrub the rhythm out of the rain.</p>
<p>This is the anthem of ${conceptLink("narrative-sovereignty", "Sovereignty")}.</p>`
    }
];

const CORE_LINKS: Edge[] = [
    { source: "psych-warfare-manual", target: "asymmetric-threat-model", type: "defines", strength: 0.9 },
    { source: "psych-warfare-manual", target: "exploitation-cycle", type: "defines", strength: 0.8 },
    { source: "psych-warfare-manual", target: "the-smear", type: "defines", strength: 0.7 },
    { source: "civilian-weaponization-doc", target: "the-smear", type: "defines", strength: 0.8 },
    { source: "civilian-weaponization-doc", target: "social-test-narrative", type: "depicts", strength: 0.75 },
    { source: "civilian-weaponization-doc", target: "exploitation-cycle", type: "influences", strength: 0.65 },
    { source: "asymmetric-threat-model", target: "civilian-weaponization-doc", type: "conceptual", strength: 0.9 },
    { source: "asymmetric-threat-model", target: "jess-forensic-analysis", type: "depicts", strength: 0.85 },
    { source: "asymmetric-threat-model", target: "exploitation-cycle", type: "conceptual", strength: 0.8 },
    { source: "asymmetric-threat-model", target: "soft-probe", type: "defines", strength: 0.7 },
    { source: "jess-forensic-analysis", target: "the-smear", type: "depicts", strength: 0.8 },
    { source: "jess-forensic-analysis", target: "inner-game", type: "conceptual", strength: 0.8 },
    { source: "jess-forensic-analysis", target: "lacey-relationship", type: "conceptual", strength: 0.7 },
    { source: "jess-forensic-analysis", target: "asymmetric-threat-model", type: "depicts", strength: 0.9 },
    { source: "jess-forensic-analysis", target: "authenticity-manifesto", type: "contradicts", strength: 0.6 },
    { source: "lacey-relationship", target: "prison-experience", type: "conceptual", strength: 0.6 },
    { source: "lacey-relationship", target: "authenticity-manifesto", type: "conceptual", strength: 0.8 },
    { source: "prison-experience", target: "authenticity-manifesto", type: "influences", strength: 0.7 },
    { source: "prison-experience", target: "inner-game", type: "influences", strength: 0.75 },
    { source: "prison-experience", target: "still-here", type: "influences", strength: 0.55 },
    { source: "social-test-narrative", target: "soft-probe", type: "depicts", strength: 0.9 },
    { source: "social-test-narrative", target: "exploitation-cycle", type: "depicts", strength: 0.7 },
    { source: "inner-game", target: "still-here", type: "influences", strength: 0.6 },
    { source: "inner-game", target: "prison-experience", type: "conceptual", strength: 0.65 },
    { source: "inner-game", target: "psych-warfare-manual", type: "contradicts", strength: 0.5 },
    { source: "the-smear", target: "social-test-narrative", type: "depicts", strength: 0.8 },
    { source: "the-smear", target: "soft-probe", type: "conceptual", strength: 0.6 },
    { source: "the-smear", target: "asymmetric-threat-model", type: "conceptual", strength: 0.7 },
    { source: "exploitation-cycle", target: "soft-probe", type: "defines", strength: 0.7 },
    { source: "exploitation-cycle", target: "asymmetric-threat-model", type: "conceptual", strength: 0.8 },
    { source: "exploitation-cycle", target: "jess-forensic-analysis", type: "depicts", strength: 0.6 },
    { source: "authenticity-manifesto", target: "still-here", type: "conceptual", strength: 0.9 },
    { source: "still-here", target: "lacey-relationship", type: "depicts", strength: 0.5 },
    { source: "still-here", target: "authenticity-manifesto", type: "conceptual", strength: 0.85 },
    { source: "soft-probe", target: "the-smear", type: "conceptual", strength: 0.55 },
    { source: "soft-probe", target: "asymmetric-threat-model", type: "conceptual", strength: 0.6 }
];

/**
 * INGESTION ENGINE
 * Transforms VAULT entries into Graph Nodes and Edges automatically.
 */
function processVault(): { nodes: Node[], links: Edge[] } {
  const nodes: Node[] = [];
  const links: Edge[] = [];

  VAULT.forEach(doc => {
    const id = doc.title.toLowerCase().replace(/\s+/g, '-');
    nodes.push({
      id,
      type: doc.type,
      title: doc.title,
      themes: [...doc.themes, 'ingested'],
      excerpt: doc.excerpt,
      content: doc.rawContent
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

const vaultIngestion = processVault();

export const INITIAL_GRAPH: GraphData = {
  nodes: [...CORE_NODES, ...vaultIngestion.nodes],
  links: [...CORE_LINKS, ...vaultIngestion.links]
};

export const COLORS = {
  song: "#06b6d4",
  theory: "#f97316",
  narrative: "#f5f5f5",
  technique: "#84cc16",
  era: "#a855f7",
  background: "#080808",
  connection: "rgba(249, 115, 22, 0.2)"
};
