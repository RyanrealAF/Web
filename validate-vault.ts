import { VAULT } from '../vault';

/**
 * FORENSIC INTEGRITY CHECKER
 * 
 * Validates the VAULT against the Relationality Checklist in METHODOLOGY.md.
 * Run via: npx ts-node scripts/validate-vault.ts
 */

console.log("🔍 Running Forensic Integrity Check...");

// Helper: Generate slug from title (mimics ingestion engine logic)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const errors: string[] = [];
const warnings: string[] = [];

// 1. Index the Vault
const nodeMap = new Map<string, typeof VAULT[0]>();
const knownIds = new Set<string>();

VAULT.forEach(node => {
  const id = generateSlug(node.title);
  if (knownIds.has(id)) {
    errors.push(`[DUPLICATE ID] Title "${node.title}" creates duplicate slug: ${id}`);
  }
  knownIds.add(id);
  nodeMap.set(id, node);
});

// 2. Validate Entries
VAULT.forEach((node) => {
  const nodeId = generateSlug(node.title);
  const links = node.linksTo || [];

  // CHECK: ID Accuracy (Methodology #4)
  // "Are the linksTo strings perfectly lowercase and hyphenated?"
  links.forEach(link => {
    if (link !== link.toLowerCase() || link.includes(' ')) {
      errors.push(`[BAD LINK FORMAT] Node "${nodeId}" links to "${link}". Links must be lowercase slugs.`);
    }
  });

  // Resolve Linked Nodes
  const resolvedLinks = links.map(link => ({ id: link, node: nodeMap.get(link) }));
  
  // Identify "Ghost Links" (links to nodes not in VAULT - likely Bedrock nodes in constants.tsx)
  const ghostLinks = resolvedLinks.filter(r => !r.node);
  const internalLinks = resolvedLinks.filter(r => r.node).map(r => r.node!);

  // CHECK: The Parent Link (Methodology #1)
  // "Does it link to at least one Theory node?"
  const hasTheoryLink = internalLinks.some(n => n.type === 'theory');
  
  // If no internal theory link, and no ghost links (which are usually theories), flag it.
  if (!hasTheoryLink && ghostLinks.length === 0) {
    if (node.type !== 'theory') {
      errors.push(`[MISSING PARENT] Node "${nodeId}" (${node.type}) has no link to a Theory node.`);
    }
  }

  // CHECK: The Sibling Link (Methodology #2)
  // "Does it link to at least one Narrative or Song node?"
  const hasSiblingLink = internalLinks.some(n => n.type === 'narrative' || n.type === 'song');
  if (!hasSiblingLink && ghostLinks.length === 0) {
     warnings.push(`[ISOLATED NODE] Node "${nodeId}" has no link to a Narrative or Song node.`);
  }

  // CHECK: Semantic Anchors (Methodology #3)
  // "Does it contain at least two clink spans?"
  const clinkCount = (node.rawContent.match(/data-concept/g) || []).length;
  if (clinkCount < 2) {
    errors.push(`[WEAK ANCHOR] Node "${nodeId}" has ${clinkCount} semantic anchors. Minimum 2 required.`);
  }
});

// 3. Report
if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS (Potential Issues):');
  warnings.forEach(w => console.log(`  ${w}`));
}

if (errors.length > 0) {
  console.error('\n❌ INTEGRITY FAILURES:');
  errors.forEach(e => console.error(`  ${e}`));
  console.error(`\nFound ${errors.length} errors. Validation failed.`);
  process.exit(1);
} else {
  console.log(`\n✅ Vault Integrity Verified. (${VAULT.length} documents)`);
  process.exit(0);
}