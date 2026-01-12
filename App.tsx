
import React, { useState, useEffect, useMemo } from 'react';
import { Share2, FileText, ChevronLeft, Map, Search, Filter, Book, Info } from 'lucide-react';
import GraphVisualization from './components/GraphVisualization';
import { INITIAL_GRAPH, COLORS } from './constants';
import { Node, NodeType, HistoryItem, Concept } from './types';

const App: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("gaslighters-delight");
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([
    { nodeId: "gaslighters-delight", title: "Gaslighter's Delight" }
  ]);
  const [activeConcept, setActiveConcept] = useState<Concept | null>(null);
  const [conceptPosition, setConceptPosition] = useState<{ x: number, y: number } | null>(null);

  const activeNode = useMemo(() => 
    INITIAL_GRAPH.nodes.find(n => n.id === activeNodeId) || INITIAL_GRAPH.nodes[0]
  , [activeNodeId]);

  const handleNodeClick = (nodeId: string) => {
    setActiveNodeId(nodeId);
    setShowGraph(false);
    setHistory(prev => {
      if (prev[prev.length - 1].nodeId === nodeId) return prev;
      return [...prev, { nodeId, title: INITIAL_GRAPH.nodes.find(n => n.id === nodeId)?.title || nodeId }];
    });
  };

  const toggleGraph = () => setShowGraph(!showGraph);

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prev = newHistory[newHistory.length - 1];
      setActiveNodeId(prev.nodeId);
      setHistory(newHistory);
    }
  };

  // Logic for the concept hover popups
  const handleConceptHover = (e: React.MouseEvent, conceptId: string) => {
    const concept = activeNode.concepts?.find(c => c.id === conceptId);
    if (concept) {
      setActiveConcept(concept);
      setConceptPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleConceptClick = (conceptId: string) => {
    setActiveConcept(null);
    setShowGraph(true);
    // Ideally center graph on this concept's connections
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-[#0a0a0a]">
      {/* PERSISTENT HEADER / NAVIGATION */}
      <nav className="z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            disabled={history.length <= 1}
            className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Document Title</span>
            <span className="text-lg font-serif font-bold text-white tracking-tight">{activeNode.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleGraph}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
              showGraph 
              ? 'bg-amber-600 border-amber-400 text-white shadow-lg shadow-amber-900/20' 
              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
            }`}
          >
            <Share2 size={16} />
            <span className="text-sm font-medium">{showGraph ? 'Close Web' : 'Explore Web'}</span>
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="relative flex-1 overflow-hidden">
        
        {/* DOCUMENT VIEW */}
        <div className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col items-center overflow-y-auto px-6 py-12 ${showGraph ? 'scale-95 opacity-20 blur-sm pointer-events-none translate-y-10' : 'scale-100 opacity-100 translate-y-0'}`}>
          <div className="max-w-2xl w-full flex flex-col gap-12 pb-32">
            
            {/* Metadata Header */}
            <div className="flex flex-col gap-4 border-l-2 border-amber-500/30 pl-6 py-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/60">
                  {activeNode.type}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-sm text-white/50">{activeNode.themes.join(' • ')}</span>
              </div>
              <p className="text-xl font-serif italic text-white/80 leading-relaxed">
                "{activeNode.excerpt}"
              </p>
            </div>

            {/* Content Body */}
            <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-lg prose-p:leading-loose text-white/90">
               <div dangerouslySetInnerHTML={{ __html: activeNode.content || '' }} 
                    onMouseOver={(e) => {
                      const target = e.target as HTMLElement;
                      const conceptId = target.getAttribute('data-concept');
                      if (conceptId) handleConceptHover(e as any, conceptId);
                    }}
                    onMouseOut={() => setActiveConcept(null)}
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      const conceptId = target.getAttribute('data-concept');
                      if (conceptId) handleConceptClick(conceptId);
                    }}
               />
            </div>
          </div>
        </div>

        {/* GRAPH VIEW OVERLAY */}
        <div className={`absolute inset-0 transition-all duration-500 ease-out z-30 ${showGraph ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-[-20px]'}`}>
          <GraphVisualization 
            data={INITIAL_GRAPH} 
            activeNodeId={activeNodeId}
            onNodeClick={handleNodeClick}
            onNodeHover={setHoveredNode}
          />

          {/* Graph Controls */}
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-40">
             <div className="bg-black/80 backdrop-blur-lg border border-white/10 p-4 rounded-xl flex flex-col gap-3 min-w-[200px]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 border-b border-white/5 pb-2">Visualization Filter</h3>
                <div className="flex flex-col gap-2">
                   {Object.keys(COLORS).filter(k => k !== 'background' && k !== 'connection').map((type) => (
                     <div key={type} className="flex items-center gap-2 text-xs text-white/70">
                        <div className="w-2 h-2 rounded-full" style={{ background: (COLORS as any)[type] }} />
                        <span className="capitalize">{type}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Node Hover Preview Card */}
          {hoveredNode && (
            <div className="absolute bottom-10 right-10 bg-[#1A1A1A] border border-amber-500/40 w-[320px] rounded-xl shadow-2xl overflow-hidden z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-serif font-bold text-lg leading-tight">{hoveredNode.title}</h4>
                  <span className="px-1.5 py-0.5 bg-white/10 text-[9px] uppercase font-bold rounded text-white/60">{hoveredNode.type}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {hoveredNode.themes.map(t => (
                    <span key={t} className="text-[10px] text-amber-500/80 uppercase tracking-tighter">#{t}</span>
                  ))}
                </div>
                <p className="text-sm text-white/60 line-clamp-3 italic">
                  "{hoveredNode.excerpt}"
                </p>
                <div className="pt-2 flex justify-between items-center text-[10px] text-white/30 border-t border-white/5">
                  <span>8 Connections</span>
                  <span className="text-amber-500/50 uppercase font-bold">Click to Drop</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* SEMANTIC ANCHOR POPUP */}
      {activeConcept && conceptPosition && (
        <div 
          className="fixed z-[100] bg-black/90 border border-amber-500/30 p-4 rounded-lg shadow-2xl w-64 pointer-events-none animate-in zoom-in-95 duration-200"
          style={{ 
            top: conceptPosition.y + 20, 
            left: Math.min(conceptPosition.x - 128, window.innerWidth - 300) 
          }}
        >
          <div className="flex flex-col gap-2">
            <h4 className="text-amber-500 font-bold text-xs uppercase tracking-widest">{activeConcept.phrase}</h4>
            <p className="text-xs text-white/70 leading-relaxed">{activeConcept.definition}</p>
            <div className="mt-2 pt-2 border-t border-white/10">
              <span className="text-[9px] text-white/40 block mb-1">RELATED CONCEPTS</span>
              <div className="flex flex-wrap gap-1">
                {activeConcept.connections.map(c => (
                  <span key={c} className="bg-white/5 px-1.5 py-0.5 rounded text-[9px] text-white/60 border border-white/5">
                    {c.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BREADCRUMBS */}
      <footer className="z-40 h-10 bg-black/80 border-t border-white/5 flex items-center px-6 overflow-hidden shrink-0">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {history.map((h, i) => (
            <React.Fragment key={i}>
              <span 
                onClick={() => handleNodeClick(h.nodeId)}
                className={`text-[10px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-widest font-bold ${i === history.length - 1 ? 'text-amber-500' : 'text-white/30'}`}
              >
                {h.title}
              </span>
              {i < history.length - 1 && <span className="text-white/10">/</span>}
            </React.Fragment>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
