
import { GraphData } from './types';

// Helper for consistent hyperlink styling
const conceptLink = (id: string, text: string) => 
  `<span data-concept="${id}" class="text-amber-500 underline cursor-help decoration-solid decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">${text}</span>`;

export const INITIAL_GRAPH: GraphData = {
  nodes: [
    {
      id: "psych-warfare-manual",
      type: "theory",
      title: "Psychological Warfare Manual",
      themes: ["doctrine", "non-kinetic", "strategy"],
      excerpt: "The comprehensive tactical guide for understanding and countering coordinated manipulation operations.",
      concepts: [
        {
          id: "non-kinetic-maneuver",
          phrase: "Non-Kinetic Maneuver",
          definition: "Achieving strategic objectives without direct physical confrontation, utilizing human and social vulnerabilities as the primary battlespace.",
          connections: ["asymmetric-threat-model", "authenticity-manifesto"]
        },
        {
          id: "plausible-deniability",
          phrase: "Plausible Deniability",
          definition: "A core principle where every aggressive action is designed to have a benign alternative explanation, granting the orchestrator impunity.",
          connections: ["soft-probe", "legitimacy-proxy"]
        }
      ],
      content: `## 0.0 Preface: Doctrine of Non-Kinetic Warfare
This manual serves as a comprehensive tactical guide. The core doctrine is ${conceptLink("non-kinetic-maneuver", "Non-Kinetic Maneuver")}, which dictates that strategic objectives are achieved through psychosocial contexts.

### A War on Perception
It operates in the gray space of social interaction and ${conceptLink("plausible-deniability", "Plausible Deniability")}. The ultimate objective is to compromise a target's reality, reputation, and support network through psychological attrition rather than physical force.`
    },
    {
      id: "civilian-weaponization-doc",
      type: "theory",
      title: "Civilians as Weapons: Silent Soldiers",
      themes: ["social-engineering", "surveillance", "asymmetrical-warfare"],
      excerpt: "Examining how everyday individuals—often unknowingly—are enlisted into roles of surveillance, signal-boosting, and provocation.",
      concepts: [
        {
          id: "civilian-weaponization",
          phrase: "Civilian Weaponization",
          definition: "The systematic manipulation of everyday individuals into performing roles within a disinformation or defamation campaign.",
          connections: ["asymmetric-threat-model", "the-smear"]
        },
        {
          id: "narrative-entrapment",
          phrase: "Narrative Entrapment",
          definition: "A process where unrelated or benign behaviors are reinterpreted through the lens of pre-established suspicion.",
          connections: ["inner-game", "social-test-narrative"]
        }
      ],
      content: `## The Silent Soldiers of a Setup
In hyper-connected societies, orchestrated smear campaigns often rely on local faces—neighbors, baristas, activists—who become tactical assets.

### Key Mechanisms
1. ${conceptLink("civilian-weaponization", "Authenticity Leverage")}: Neighbors are seen as neutral observers, holding more social weight than digital bots.
2. **Deniable Diffusion**: A decentralized spread of suspicion allows orchestrators to remain hidden while the collective impact is overwhelming.
3. ${conceptLink("narrative-entrapment", "Narrative Entrapment")}: Common behaviors (note-taking, pacing) are pre-branded as 'odd', triggering community alarm.`
    },
    {
      id: "jess-forensic-analysis",
      type: "narrative",
      title: "Jess: A Study in Relational Duality",
      themes: ["accountability-disorder", "asymmetric-loyalty", "eviction"],
      excerpt: "Deconstructing a bond defined by lifelong friendship and severe patterns of alleged psychological manipulation and material harm.",
      concepts: [
        {
          id: "asymmetric-loyalty",
          phrase: "Asymmetric Loyalty",
          definition: "A structural imbalance where one party provides consistent material/emotional support without equivalent reciprocation when roles reverse.",
          connections: ["lacey-relationship", "authenticity-manifesto"]
        },
        {
          id: "darvo",
          phrase: "DARVO",
          definition: "Deny, Attack, and Reverse Victim and Offender. A maneuver used to evade responsibility by positioning the perpetrator as the victim.",
          connections: ["inner-game", "the-smear"]
        }
      ],
      content: `## The Central Paradox
The relationship with Jess reveals two irreconcilable portraits: a 'friends for a lifetime' foundational figure and an alleged manipulator employing ${conceptLink("darvo", "DARVO")} tactics to evade responsibility.

### The Christmas Eve 2024 Escalation
The most severe escalation to date: a Christmas Eve eviction triggered by the Speaker's refusal to accept a direct, provable lie. This represents the weaponization of housing dependency—a material shift from psychological harm to overt punishment.

### The Soul's Veto
Despite years of ${conceptLink("asymmetric-loyalty", "carrying the bond")}, the Speaker describes a 'soul's veto'—a deep-seated, non-negotiable refusal to trust, born from a lifetime of documented accountability failures.`
    },
    {
      id: "asymmetric-threat-model",
      type: "theory",
      title: "The Asymmetric Threat Model",
      themes: ["HUMINT", "tiers", "network"],
      excerpt: "Analysis of the networked human intelligence unit: from the unseen Architect to the Unwitting Operative.",
      concepts: [
        {
          id: "rapport-as-a-weapon",
          phrase: "Rapport-as-a-Weapon",
          definition: "The deliberate building of emotional intimacy to compromise a target's defensive perimeter for intelligence gathering.",
          connections: ["soft-probe", "social-test-narrative"]
        },
        {
          id: "unwitting-operative",
          phrase: "Unwitting Operative",
          definition: "An ordinary civilian manipulated to unknowingly participate in a campaign, lending an air of authenticity to fabricated narratives.",
          connections: ["civilian-weaponization-doc", "the-smear"]
        }
      ],
      content: `## The HUMINT Network
Systematic psychological campaigns are executed by a networked human intelligence unit.

### Tiered Command Structure
* **Tier 0: The Architect**: The strategic visionary who remains detached.
* **Tier 1: The Orchestrator**: The central commander operating via insinuation.
* **Tier 2: Access Agents**: Individuals who build ${conceptLink("rapport-as-a-weapon", "Rapport-as-a-Weapon")} to collect intelligence.
* **Tier 3: Operatives**: Both witting and ${conceptLink("unwitting-operative", "Unwitting Operatives")} who execute tactical actions.`
    },
    {
      id: "exploitation-cycle",
      type: "theory",
      title: "The Exploitation Cycle",
      themes: ["reconnaissance", "profiling", "suppression"],
      excerpt: "Deconstructing the three-stage cycle: Vectoring & Profiling, The Exploitation Cascade, and Suppression.",
      content: `## The Feedback Loop of Attrition
A continuous cycle of reconnaissance, exploitation, and suppression.

### Stage 1: Vectoring
The Triangulation Protocol: OSINT scans combined with **Access Agent Infiltration** to extract triggers and relationship fault lines.

### Stage 2: The Cascade
The First Strike Protocol triggers a predictable response, weaponized through the **Justification Engine**.`
    },
    {
      id: "social-test-narrative",
      type: "narrative",
      title: "The Social Test: A Narrative of Survival",
      themes: ["case-study", "ryan-borland", "street-survival"],
      excerpt: "A firsthand account of manipulation, from the debit-card loyalty test in San Diego to the final shopping cart escalation.",
      concepts: [
        {
          id: "predetermined-narrative",
          phrase: "Predetermined Narrative",
          definition: "A fabricated story about a target that orchestrators attempt to validate by provoking specific failures or reactions.",
          connections: ["inner-game", "the-smear"]
        }
      ],
      content: `## The Orbit of Coincidence
It began with strangers entering my orbit in different cities—Gina, Mike, and the 'homies'. They were tracking mannerisms and testing my boundaries.

### The San Diego Probe
The first major test: a woman gave me her debit card for an errand. Upon my honest return, she was furious. It dawned on me: the point wasn't for me to succeed, but to fail and fit their ${conceptLink("predetermined-narrative", "Predetermined Narrative")}.

### The Consequence
Rumors spread. Donations stopped. I was forced to eat from the trash while the streets provided a never-ending supply of drugs—the one thing designed for my downfall.`
    },
    {
      id: "authenticity-manifesto",
      type: "theory",
      title: "Authenticity Ain't Optional",
      themes: ["philosophy", "sovereignty", "street-ethics"],
      excerpt: "The central hub of the archive. A manifesto on 'narrative sovereignty' and the price of 'faith in the filth'.",
      concepts: [
        {
          id: "narrative-sovereignty",
          phrase: "Narrative Sovereignty",
          definition: "The absolute right of a community to define its own history and aesthetic without outside validation.",
          connections: ["psych-warfare-manual", "asymmetric-threat-model"]
        },
        {
          id: "faith-in-the-filth",
          phrase: "Faith in the Filth",
          definition: "Finding sacred value and truth in the discarded, the profane, and the industrial margins.",
          connections: ["social-test-narrative", "still-here"]
        }
      ],
      content: `## The Manifesto of the Marginal
This document serves as the philosophical center of gravity. In the concrete canyons of Southern California, **authenticity is survival**.

### Core Tenets
1. ${conceptLink("narrative-sovereignty", "Narrative Sovereignty")}: Reclaiming our story before the city paints it over.
2. **The Kinetic Truth**: Truth is found in action, not static archives.
3. ${conceptLink("faith-in-the-filth", "Faith in the Filth")}: The sacred drama played out on the tracks.`
    },
    {
      id: "lacey-relationship",
      type: "narrative",
      title: "Lacey: Pure Gold to Betrayal",
      themes: ["foundational-bedrock", "trauma", "recovery"],
      excerpt: "The ultimate benchmark for connection, and the tragic descent into street life following a shared dream of recovery.",
      concepts: [
        {
          id: "recovery-vision",
          phrase: "Recovery Vision",
          definition: "A shared dream of fitness-centered sobriety that was eventually abandoned under systemic pressure.",
          connections: ["authenticity-manifesto", "prison-experience"]
        }
      ],
      content: `## The Foundational Bedrock
Ryan's relationship with Lacey was ${conceptLink("recovery-vision", "Pure Gold")}. Together they built a recovery house, but past trauma from Child Protective Services (CPS) forced a relocation to California that shattered their stability.

### The Ultimatum
Lacey's mental health crisis culminated in a flat-voiced ultimatum: *"I want to go be bad like you talked about."* Ryan chose commitment over comfort, turning in his keys to join her on the streets.`
    },
    {
      id: "prison-experience",
      type: "narrative",
      title: "The Cage as a Classroom",
      themes: ["GED-tutor", "math", "leadership"],
      excerpt: "How Ryan transformed his prison terms into a high-performance leadership role as a GED tutor.",
      concepts: [
        {
          id: "strategic-vigilance",
          phrase: "Strategic Vigilance",
          definition: "Forced hyper-awareness developed through trauma, allowing one to analyze complex social data and identify threats.",
          connections: ["inner-game", "breadcrumb-web"]
        }
      ],
      content: `## Dominating the GED Platform
Ryan served three prison terms, turning the cage into a classroom. He excelled as a tutor, outperforming credentialed teachers by speaking the inmates' language.

### Fuck Fractions
His pragmatic approach: *"If they suck at fractions, fuck fractions. Focus on other shit."* This high-performance leadership shifted his mindset from dropout to a lifelong lover of learning, fueled by ${conceptLink("strategic-vigilance", "Strategic Vigilance")}.`
    },
    {
      id: "soft-probe",
      type: "technique",
      title: "The Soft Probe & Loyalty Tests",
      themes: ["reconnaissance", "manipulation", "recon"],
      excerpt: "Benign interactions designed to gather intelligence and assess psychological boundaries.",
      concepts: [
        {
          id: "atmospheric-shifts",
          phrase: "Atmospheric Shifts",
          definition: "Subtle pre-cognitive warning signals detecting incongruities and anomalies in the environment.",
          connections: ["inner-game", "breadcrumb-web"]
        }
      ],
      content: `## The Opening Move
Surreptitious data collection on behavior patterns.

### The Debit-Card Loyalty Test
Explicitly illustrated in ${conceptLink("social-test-narrative", "The Social Test")}, this is a simple favor followed by a subtly suspicious text. These ${conceptLink("atmospheric-shifts", "Atmospheric Shifts")} signal a forensic setup.`
    },
    {
      id: "the-smear",
      type: "technique",
      title: "The Smear: Social Exile",
      themes: ["reputation", "civilian-weaponization", "disinformation"],
      excerpt: "Orchestrating reputation assassination through rumor dusting and the weaponization of 'concern'.",
      content: `## The Architecture of Destruction
Systematic destruction of public image through **Civilian Weaponization**.

### Tactics
- **Rumor Dusting**: Seeding ambiguous falsehoods into trusted channels.
- **Fake Compassion**: Exiling the target while publicly 'expressing worry' for their mental state—a tactic that effectively starved the subject in ${conceptLink("social-test-narrative", "The Social Test")}.`
    },
    {
      id: "inner-game",
      type: "theory",
      title: "The Inner Game: The Mind",
      themes: ["intuition", "gaslighting", "perception"],
      excerpt: "The final battlefield. Weaponizing the target's premonitions and emotions against them.",
      content: `## The Battle for the Mind
Subtle pre-cognitive signals detecting incongruities. Trusting the ${conceptLink("atmospheric-shifts", "Atmospheric Shifts")} as valid data.

### Setup by Reaction
Prohibiting authentic expression by reframing it. *"He says he's spiritual—why is he so angry?"*
Honest offense is reframed as 'instability' to validate the ${conceptLink("predetermined-narrative", "Predetermined Narrative")}.`
    },
    {
      id: "still-here",
      type: "song",
      title: "Still Here",
      themes: ["memory", "survival", "rhythm"],
      excerpt: "A sonic response to narrative trauma. Uses a chant-like hook as a memory retention weapon.",
      content: `### Verse 1
Concrete skin and a heart of lead,
Remembering the words that the old head said.
They can paint the wall, they can clear the lane,
But they can't scrub the rhythm out of the rain.

### Chorus
I'm still here, in the static and the smoke,
Still standing where the promises broke.
Still here, with a ${conceptLink("narrative-sovereignty", "Narrative Sovereignty")} in my chest.`
    }
  ],
  links: [
    { source: "psych-warfare-manual", target: "authenticity-manifesto", type: "defines", strength: 0.8 },
    { source: "psych-warfare-manual", target: "asymmetric-threat-model", type: "defines", strength: 0.9 },
    { source: "psych-warfare-manual", target: "exploitation-cycle", type: "defines", strength: 0.8 },
    { source: "asymmetric-threat-model", target: "exploitation-cycle", type: "influences", strength: 0.8 },
    { source: "asymmetric-threat-model", target: "civilian-weaponization-doc", type: "conceptual", strength: 0.9 },
    { source: "civilian-weaponization-doc", target: "the-smear", type: "defines", strength: 0.8 },
    { source: "jess-forensic-analysis", target: "the-smear", type: "depicts", strength: 0.7 },
    { source: "jess-forensic-analysis", target: "inner-game", type: "conceptual", strength: 0.8 },
    { source: "jess-forensic-analysis", target: "asymmetric-threat-model", type: "conceptual", strength: 0.6 },
    { source: "exploitation-cycle", target: "soft-probe", type: "defines", strength: 0.7 },
    { source: "exploitation-cycle", target: "the-smear", type: "defines", strength: 0.7 },
    { source: "social-test-narrative", target: "soft-probe", type: "depicts", strength: 0.9 },
    { source: "lacey-relationship", target: "authenticity-manifesto", type: "influences", strength: 0.7 },
    { source: "prison-experience", target: "asymmetric-threat-model", type: "conceptual", strength: 0.5 },
    { source: "inner-game", target: "social-test-narrative", type: "influences", strength: 0.6 },
    { source: "social-test-narrative", target: "still-here", type: "influences", strength: 0.7 }
  ]
};

export const COLORS = {
  song: "#06b6d4", // Cyan
  theory: "#f97316", // Orange
  narrative: "#f5f5f5", // White
  technique: "#84cc16", // Lime
  era: "#a855f7", // Purple
  background: "#080808",
  connection: "rgba(249, 115, 22, 0.2)"
};
