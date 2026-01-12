
import { GraphData } from './types';

export const INITIAL_GRAPH: GraphData = {
  nodes: [
    {
      id: "gaslighters-delight",
      type: "song",
      title: "Gaslighter's Delight",
      themes: ["manipulation", "clarity", "boundaries"],
      excerpt: "A lyrical dissection of calculated emotional volatility and the weaponization of calm.",
      concepts: [
        {
          id: "weaponized-calm",
          phrase: "weaponized calm",
          definition: "Using emotional control as a manipulation tactic to make the victim's reaction seem irrational.",
          connections: ["affective-fidelity", "marisol-two-tongues", "covenant-of-trust"]
        },
        {
          id: "surgical-cadence",
          phrase: "surgical precision",
          definition: "A delivery method prioritizing phonetic clarity and rhythmic exactness over emotive delivery.",
          connections: ["kinetic-codex"]
        }
      ],
      content: `### Verse 1
You <span data-concept="weaponized-calm" class="text-amber-500 underline cursor-help decoration-dotted decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">weaponized calm</span>, made chaos look clean,
Had me doubting instincts that been sharp since sixteen.
Every whisper was a scalpel, every silence was a snare,
Moving with a <span data-concept="surgical-cadence" class="text-amber-500 underline cursor-help decoration-dotted decoration-2 underline-offset-4 hover:bg-amber-500/10 transition-colors px-1 rounded">surgical precision</span> through the static in the air.

### Chorus
It's the Gaslighter's Delight, a symphony of gray,
Turning blue skies into static, turning truth into delay.
I see the architecture now, the blueprint in the bone,
A kingdom built on mirrors, but you're sitting there alone.`
    },
    {
      id: "affective-fidelity",
      type: "theory",
      title: "Force of the Vernacular",
      themes: ["language", "precision", "truth"],
      excerpt: "Explores the idea that raw, visceral language is more accurate because it preserves affective resonance.",
      content: `## Theory of Affective Fidelity
The central thesis of *Force of the Vernacular* posits that precision in language is not found in academic distance, but in **Affective Fidelity**. 

When a manipulator employs "weaponized calm," they are actively stripping language of its affective resonance to create a false sense of objective reality. By contrast, the vernacular resists this sanitization. It uses the "surgical cadence" of lived experience to cut through the calculated fog.

### Key Tenets
1. **Resonance Over Lexicon**: It is not what is said, but how the frequency matches the truth of the event.
2. **The Kinetic Codex**: Language that moves is language that lives.`
    },
    {
      id: "marisol-two-tongues",
      type: "song",
      title: "Marisol, Bitch with Two Tongues",
      themes: ["duplicity", "bilingualism", "betrayal"],
      excerpt: "A narrative track focused on a character who navigates two worlds through linguistic manipulation.",
      content: `### Narrative Entry
Marisol didn't just speak two languages; she inhabited two moralities. In English, she was a business strategist; in Spanish, she was a revolutionary. Between the two lay a valley of "weaponized calm" where she buried her secrets.

She used the "two tongues" not to communicate, but to compartmentalize. If you caught her in the middle, you found the kinetic codex of a survivor who forgot what she was surviving.`
    },
    {
      id: "covenant-of-trust",
      type: "framework",
      title: "Covenant of Trust",
      themes: ["ethics", "interpersonal", "boundaries"],
      excerpt: "A structured framework for rebuilding interpersonal reliability after systemic manipulation.",
      content: `## The Framework
The *Covenant of Trust* is a set of actionable boundaries designed to neutralize "weaponized calm" in dialogue.

### Protocols
- **Transparency of Intent**: Parties must declare the emotional goal of a conversation before it begins.
- **Verification of Affect**: If a speaker's tone does not match the severity of the content, the listener has the right to pause.`
    },
    {
      id: "kinetic-codex",
      type: "theory",
      title: "Kinetic Codex",
      themes: ["rhythm", "movement", "biology"],
      excerpt: "The biological basis for 'surgical cadence' in performance art.",
      content: `## Biological Rhythms
The Kinetic Codex studies how the human nervous system responds to high-frequency, low-variance rhythmic input.

When a performer utilizes a **surgical cadence**, they are tapping into the primary motor cortex's desire for predictability, creating a hypnotic state that bypasses the listener's analytical filters.`
    },
    {
      id: "if-youre-on-my-team",
      type: "song",
      title: "If You're On My Team",
      themes: ["loyalty", "collaboration", "shared goals"],
      excerpt: "An anthem of radical transparency and collective movement.",
      content: `### Verse 2
We don't need the maps they drew in charcoal and smoke,
We don't need the hollow promises or the heavy yoke.
If you're on my team, then your word is the bond,
From the kinetic codex to the great beyond.`
    }
  ],
  links: [
    { source: "gaslighters-delight", target: "affective-fidelity", type: "implements", strength: 0.9 },
    { source: "gaslighters-delight", target: "marisol-two-tongues", type: "conceptual", strength: 0.7 },
    { source: "gaslighters-delight", target: "covenant-of-trust", type: "references", strength: 0.8 },
    { source: "affective-fidelity", target: "kinetic-codex", type: "themes", strength: 0.6 },
    { source: "marisol-two-tongues", target: "kinetic-codex", type: "references", strength: 0.5 },
    { source: "covenant-of-trust", target: "if-youre-on-my-team", type: "implements", strength: 0.8 },
    { source: "kinetic-codex", target: "gaslighters-delight", type: "references", strength: 0.8 }
  ]
};

export const COLORS = {
  song: "#3B82F6", // Blue
  theory: "#CD7F32", // Bronze
  narrative: "#E5E7EB", // Muted White
  framework: "#10B981", // Emerald
  collaboration: "#8B5CF6", // Violet
  background: "#0A0A0A",
  connection: "rgba(205, 127, 50, 0.4)" // Bronze 40%
};
