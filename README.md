
# **THE FORENSIC LINKAGE EXPLORER — DEVELOPER SYSTEM OVERVIEW**

## **1. Mission**
The Forensic Linkage Explorer is a high‑performance, TypeScript‑driven React application designed to transform dense psychological‑warfare intelligence into interactive, analyzable visual structures. It serves as a tactical interface for exploring non‑kinetic threat models, HUMINT hierarchies, tactic linkages, and campaign timelines.

---

## **2. Core Domain Model**

### **2.1 Non‑Kinetic Warfare**
The system models psychological operations as structured, repeatable, observable patterns.  
Key concepts include:
- Perception manipulation  
- Social engineering  
- Narrative shaping  
- Behavioral conditioning  

### **2.2 HUMINT Network Architecture**
A tiered hierarchy used across all visualizations:
- **Tier 0 — Architect**  
- **Tier 1 — Strategist**  
- **Tier 2 — Handler**  
- **Tier 3 — Proxy**  
- **Tier 4 — Unwitting Operative**

### **2.3 Tactical Lexicon**
The Explorer treats tactics as **nodes** in a relational graph:
- Plausible Deniability  
- Reputation Assassination  
- Gaslighting  
- Forced Reactive Posturing  
- Institutional Weaponization  

### **2.4 Defensive Doctrines**
Modeled as counter‑nodes and counter‑flows:
- Psychological Hardening  
- Breadcrumb Web  
- Dead‑Man’s Switch  

### **2.5 Case Studies**
Campaigns (e.g., Borland) are treated as:
- timelines  
- tactic sequences  
- network activations  
- escalation ladders  

---

## **3. Technology Stack**

### **3.1 Frontend**
- **React 19.2.3**  
- **TypeScript ~5.8.2**  
- **Vite 6.2.0** (dev server + bundler)

### **3.2 Visualization**
- **D3.js ^7.9.0** for:
  - force‑directed graphs  
  - hierarchical trees  
  - radial diagrams  
  - timelines  

### **3.3 UI Layer**
- **Lucide React** for iconography  
- Modular component architecture  
- Context‑driven state management  

---

## **4. Data Pipeline**

### **4.1 Raw Documents**
Located in:
```
Database/raw/
```
These are unstructured intelligence texts.

### **4.2 Processed Documents**
Located in:
```
Database/processed/
```
Each document includes YAML frontmatter:

```yaml
---
id: psychological-warfare-manual
source: raw
title: Psychological Warfare Manual
category: Tactical Manual
tags: psychological warfare, HUMINT network, plausible deniability
created: 2026-01-01
updated: 2026-01-01
summary: This manual serves as a comprehensive tactical guide...
---
```

This metadata enables:
- indexing  
- filtering  
- search  
- visualization mapping  

### **4.3 Frontend Consumption**
The React app loads processed documents as structured data and renders:
- searchable lists  
- tactic linkages  
- HUMINT hierarchies  
- campaign timelines  

---

## **5. Application Features**

### **5.1 Document Explorer**
- Tag‑based filtering  
- Category browsing  
- Metadata‑driven search  
- Summaries + full content view  

### **5.2 Visualization Suite**
- HUMINT network graph  
- Tactic linkage graph  
- Campaign timeline  
- Influence flow diagrams  

### **5.3 UX**
- Fast load times via Vite  
- Smooth transitions  
- Clean iconography  
- Responsive layout  

---

## **6. Deployment Architecture**

### **6.1 Build**
```
npm run build
```
Output directory:
```
build/
```

### **6.2 Hosting**
- Cloudflare Pages  
- GitHub → CI → Cloudflare auto‑deploy  

### **6.3 SPA Routing**
`/public/_routes.json`:

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/_worker.js"],
  "fallback": {
    "type": "rewrite",
    "destination": "/index.html"
  }
}
```

### **6.4 CI Pipeline**
GitHub Actions validates:
- install  
- lint  
- test  
- build  

before Cloudflare deploys.

---

## **7. Developer Expectations**
All code must:
- be modular  
- be type‑safe  
- support D3 integration  
- maintain SPA routing integrity  
- align with the domain model  
- scale for additional documents, tactics, and visualizations  

---

## **8. Summary**
The Forensic Linkage Explorer is a structured intelligence‑analysis platform built on a modern React/Vite/TypeScript stack, powered by D3 visualizations and a metadata‑driven document pipeline. It converts psychological‑warfare doctrine into interactive, analyzable, and visually expressive structures.

---