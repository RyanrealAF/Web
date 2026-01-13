
# Forensic Linkage Explorer: Scalability Manifesto

## AI Integration Instructions
This project is designed for "Human-AI Co-creation". Follow these patterns:

1. **Content Expansion (The Development Pipeline)**: 
   - Instead of editing `constants.tsx` directly for every new document, use the **Vault Folder Pattern**.
   - Open `vault.ts` and append a new `IngestedDocument` object to the `VAULT` array.
   - The ingestion trigger in `constants.tsx` will automatically process it, generate a slug-safe ID, and establish initial links on the next reload.

2. **Semantic Linking**:
   - In your `rawContent` strings within `vault.ts`, use the `conceptLink(id, text)` helper (available via `constants.tsx` or simply mock the HTML structure) to enable interactive tooltips.

3. **Graph Relationality**:
   - Use the `linksTo` array in `vault.ts` entries to define target IDs for automatic D3 connectivity.
   - Maintain a `strength` of 0.8 for direct influences and 0.4 for loose ties.

4. **Performance Scaling**:
   - The D3 simulation in `GraphVisualization.tsx` is optimized for sparse data.
   - If node count exceeds 100, implement Canvas-based rendering for D3.

## Deployment Checklist
- [x] Node integrity check (no dangling links).
- [x] Responsive layout for mobile/desktop.
- [x] D3 Cleanup on unmount.
- [x] Development-time Ingestion Engine verified in `constants.tsx`.

---
*Created for: The So-Cal Street Art Archive*
