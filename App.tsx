
import React, { useState, useEffect, useMemo } from 'react';
import { Share2, FileText, ChevronLeft, Map, Search, Filter, Book, Info, Play, Music, PenTool, Type, Activity } from 'lucide-react';
import GraphVisualization from './components/GraphVisualization';
import { INITIAL_GRAPH, COLORS } from './constants';
import { Node, NodeType, HistoryItem, Concept, GraphData } from './types';

const App: React.FC = () => {
  const [graphData] = useState<GraphData>(INITIAL_GRAPH);
  const [activeNodeId, setActiveNodeId] = useState<string>("psych-warfare-manual");
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [highlightedNodeIds, setHighlightedNodeIds] = useState<string[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([
    { nodeId: "psych-warfare-manual", title: "Psychological Warfare Manual" }
  ]);
  const [activeConcept, setActiveConcept] = useState<Concept | null>(null);
  const [conceptPosition, setConceptPosition] = useState<{ x: number, y: number } | null>(null);

  const activeNode = useMemo(() => 
    graphData.nodes.find(n => n.id === activeNodeId) || graphData.nodes[0]
  , [activeNodeId, graphData]);

  const handleNodeClick = (nodeId: string) => {
    setActiveNodeId(nodeId);
    setShowGraph(false);
    setHighlightedNodeIds([]); 
    setHistory(prev => {
      if (prev.length > 0 && prev[prev.length - 1].nodeId === nodeId) return prev;
      const node = graphData.nodes.find(n => n.id === nodeId);
      return [...prev, { nodeId, title: node?.title || nodeId }];
    });
  };

  const toggleGraph = () => {
    if (showGraph) setHighlightedNodeIds([]);
    setShowGraph(!showGraph);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prev = newHistory[newHistory.length - 1];
      setActiveNodeId(prev.nodeId);
      setHistory(newHistory);
      setHighlightedNodeIds([]);
    }
  };

  const handleConceptHover = (e: React.MouseEvent, conceptId: string) => {
    const concept = activeNode.concepts?.find(c => c.id === conceptId);
    if (concept) {
      setActiveConcept(concept);
      setConceptPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleConceptClick = (conceptId: string) => {
    const concept = activeNode.concepts?.find(c => c.id === conceptId);
    if (concept && concept.connections.length > 0) {
      setHighlightedNodeIds(concept.connections);
      setShowGraph(true); 
    } else {
      setShowGraph(true);
    }
    setActiveConcept(null);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col bg-[#080808]" role="application" aria-label="Forensic Linkage Explorer">
      {/* PERSISTENT HEADER */}
      <nav className="z-50 flex items-center justify-between px-8 py-5 bg-black/60 backdrop-blur-xl border-b border-white/5 shrink-0">
        <div className="flex items-center gap-6">
          <button 
            onClick={handleBack}
            disabled={history.length <= 1}
            aria-label="Navigate to previous document"
            className="p-2.5 hover:bg-white/10 rounded-full transition-all disabled:opacity-20 border border-transparent hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-0.5 animate-pulse">Forensic Linkage</span>
            <span className="text-xl font-stencil text-white tracking-wide">{activeNode.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleGraph}
            aria-expanded={showGraph}
            aria-label={showGraph ? "Close concept web" : "Explore concept web"}
            className={`flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-700 group focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              showGraph 
              ? 'bg-amber-600 border-amber-400 text-white shadow-[0_0_30px_rgba(217,119,6,0.3)]' 
              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <Share2 size={18} className={showGraph ? 'animate-spin-slow' : ''} />
            <span className="text-sm font-bold uppercase tracking-wider">{showGraph ? 'Close Web' : 'Explore Web'}</span>
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="relative flex-1 overflow-hidden" role="main">
        
        {/* DOCUMENT VIEW */}
        <div className={`absolute inset-0 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) transform flex flex-col items-center overflow-y-auto px-10 py-16 ${showGraph ? 'scale-[0.85] opacity-0 blur-2xl pointer-events-none translate-y-20' : 'scale-100 opacity-100 translate-y-0'}`}>
          <article className="max-w-3xl w-full flex flex-col gap-16 pb-40">
            
            {/* Context Header */}
            <header className="flex flex-col gap-6 relative">
              <div className="absolute -left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-cyan-500 to-transparent opacity-50" />
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5 border border-white/10 text-white/50">
                  {activeNode.type}
                </span>
                <div className="h-px w-8 bg-white/10" aria-hidden="true" />
                <span className="text-xs text-white/40 uppercase tracking-widest font-medium">{activeNode.themes.join(' ')}</span>
              </div>
              <p className="text-3xl font-serif italic text-white/90 leading-tight max-w-xl border-l-4 border-amber-500 pl-6 glow-orange">
                {activeNode.excerpt}
              </p>
            </header>

            {/* Content Body */}
            <div className="prose prose-invert max-w-none prose-headings:font-stencil prose-headings:text-4xl prose-headings:tracking-wider prose-headings:text-white prose-p:text-xl prose-p:leading-loose prose-strong:text-amber-500 text-white/80">
               <div 
                    className="space-y-10"
                    dangerouslySetInnerHTML={{ __html: activeNode.content || '' }} 
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
               
               {activeNode.type === 'song' && (
                 <section aria-label="Audio Playback" className="mt-16 p-10 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl flex items-center gap-8 group cursor-pointer hover:bg-cyan-500/10 transition-all shadow-2xl">
                    <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-transform">
                      <Play fill="white" size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-stencil text-2xl mb-1 tracking-wide">Stream Audio Archive</h4>
                      <p className="text-cyan-500/60 text-sm uppercase tracking-[0.2em] font-black">Decrypting Sonic Signature</p>
                    </div>
                    <div className="ml-auto" aria-hidden="true">
                      <Activity className="text-cyan-500/30 animate-pulse" size={40} />
                    </div>
                 </section>
               )}
            </div>
          </article>
        </div>

        {/* GRAPH VIEW OVERLAY */}
        <div className={`absolute inset-0 transition-all duration-700 ease-out z-30 ${showGraph ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 pointer-events-none translate-y-[-40px] scale-110'}`}>
          <GraphVisualization 
            data={graphData} 
            activeNodeId={activeNodeId}
            highlightedNodeIds={highlightedNodeIds}
            onNodeClick={handleNodeClick}
            onNodeHover={setHoveredNode}
          />

          {/* Graph Legend */}
          <aside className="absolute top-8 left-8 flex flex-col gap-3 z-40">
             <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl flex flex-col gap-4 shadow-2xl border-l-4 border-l-amber-500">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 border-b border-white/5 pb-3 flex items-center gap-2">
                   <Activity size={12} className="text-amber-500" /> Web Typology
                </h3>
                <div className="grid grid-cols-1 gap-3">
                   {Object.entries(COLORS).filter(([k]) => !['background', 'connection'].includes(k)).map(([type, color]) => (
                     <div key={type} className="flex items-center gap-3 text-[11px] text-white/70 font-medium tracking-wide">
                        <div className="w-3 h-3 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.1)]" style={{ background: color }} />
                        <span className="capitalize">{type}</span>
                     </div>
                   ))}
                </div>
             </div>
          </aside>

          {/* Node Hover Preview Card */}
          {hoveredNode && (
            <div className="absolute bottom-12 right-12 bg-black border border-white/20 w-[380px] rounded-sm shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden z-40 animate-in fade-in slide-in-from-bottom-8 duration-500" role="complementary" aria-label="Node preview">
              <div className="h-2 w-full" style={{ background: COLORS[hoveredNode.type as keyof typeof COLORS] || '#fff' }} />
              <div className="p-8 flex flex-col gap-5">
                <div className="flex justify-between items-start">
                  <h4 className="font-stencil text-3xl text-white tracking-wider leading-tight glow-cyan">{hoveredNode.title}</h4>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] uppercase font-black rounded tracking-[0.2em] text-white/40">{hoveredNode.type}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hoveredNode.themes.map(t => (
                    <span key={t} className="text-[9px] font-bold text-amber-500/80 uppercase tracking-widest bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">{t}</span>
                  ))}
                </div>
                <p className="text-base text-white/60 line-clamp-3 italic font-serif leading-relaxed border-l-2 border-white/10 pl-4">
                  {hoveredNode.excerpt}
                </p>
                <div className="pt-6 flex justify-between items-center text-[10px] text-amber-500 uppercase font-black tracking-[0.3em] border-t border-white/10">
                  <span className="flex items-center gap-2 animate-pulse"><Map size={14} /> Tracking Node</span>
                  <span className="text-white/40">Drop into Document</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* SEMANTIC ANCHOR POPUP */}
      {activeConcept && conceptPosition && (
        <div 
          className="fixed z-[100] bg-black/95 border border-amber-500/40 p-6 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] w-80 pointer-events-none animate-in zoom-in-95 duration-200 backdrop-blur-xl border-t-4 border-t-amber-500"
          style={{ 
            top: conceptPosition.y + 30, 
            left: Math.min(conceptPosition.x - 160, window.innerWidth - 350) 
          }}
          role="tooltip"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-amber-500 font-stencil text-2xl tracking-widest">{activeConcept.phrase}</h4>
              <Info size={16} className="text-amber-500/30" />
            </div>
            <p className="text-sm text-white/80 leading-relaxed font-medium">{activeConcept.definition}</p>
            <div className="mt-2 pt-4 border-t border-white/10">
              <span className="text-[10px] text-white/30 font-black tracking-[0.3em] block mb-3 uppercase">Neural Paths</span>
              <div className="flex flex-wrap gap-2">
                {activeConcept.connections.map(c => (
                  <span key={c} className="bg-white/5 px-3 py-1 rounded-full text-[10px] text-white/70 border border-white/10 uppercase tracking-tight">
                    {c.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BREADCRUMBS */}
      <footer className="z-40 h-14 bg-black border-t border-white/5 flex items-center px-10 overflow-hidden shrink-0" role="contentinfo">
        <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1" aria-label="Breadcrumb navigation">
          {history.map((h, i) => (
            <React.Fragment key={i}>
              <button 
                onClick={() => handleNodeClick(h.nodeId)}
                aria-current={i === history.length - 1 ? 'page' : undefined}
                className={`text-[11px] whitespace-nowrap cursor-pointer hover:text-white transition-all uppercase tracking-[0.3em] font-black focus:outline-none focus:text-amber-500 ${i === history.length - 1 ? 'text-amber-500 glow-orange' : 'text-white/20 hover:text-white/50'}`}
              >
                {h.title}
              </button>
              {i < history.length - 1 && <div className="w-1 h-1 rounded-full bg-white/5 shrink-0" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </nav>
      </footer>

      <style>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
