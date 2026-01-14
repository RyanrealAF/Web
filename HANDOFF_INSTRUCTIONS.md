
# VS Code Handoff Instructions

Welcome to the **Forensic Linkage Explorer**. Follow these steps to begin expanding your interconnected archive.

## 1. Project Initialization
- Open this folder in VS Code.
- Ensure you have the **ESLint** and **Prettier** extensions installed for clean code formatting.
- The `.vscode` folder contains workspace-specific snippets that are now active.

## 2. Your First Document Ingestion
1.  **Pick a Template**: Go to `/templates` and copy the content of `NARRATIVE_TEMPLATE.html`.
2.  **Open the Vault**: Open `vault.ts`.
3.  **Use the Snippet**: Scroll to the bottom of the `VAULT` array. Type `vault-entry` and hit `Tab`.
4.  **Fill the Fields**:
    - Use `Tab` to cycle through the title, type, and links.
    - Paste your template content into the `rawContent` backticks.
5.  **Save**: The graph in `App.tsx` will automatically detect the new entry on the next refresh.

## 3. Linking Concepts
- When writing content in `vault.ts`, use the `clink` snippet.
- **Crucial**: The `data-concept` ID must match the slugified title of another document (e.g., "the-smear").
- This ensures that clicking a word in the text "pulses" the correct node in the 3D graph view.

## 4. Visualizing Connections
- Run the app.
- Click **"Explore Web"** in the top right.
- Find your new node. It will be colored based on its `type` (cyan for songs, orange for theory, white for narrative).

## 5. Maintenance
- If the graph becomes too cluttered, adjust the `strength` parameter in your `vault.ts` entry's `linksTo` logic within `constants.tsx`.
