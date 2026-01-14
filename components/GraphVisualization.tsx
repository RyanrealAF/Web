
// Add React import to resolve namespace issues for React.FC
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Node, Edge, GraphData, NodeType } from '../types';
import { COLORS } from '../constants';

interface GraphVisualizationProps {
  data: GraphData;
  activeNodeId: string;
  highlightedNodeIds: string[];
  onNodeClick: (nodeId: string) => void;
  onNodeHover: (node: Node | null) => void;
}

/**
 * AI SYSTEM INSTRUCTIONS (GRAPHICS ENGINE):
 * 1. HIGH-VISCOSITY SEPARATION: Use -1500 charge to ensure distinct concept islands.
 * 2. NEURAL PATH HIGHLIGHTING: Pulsing amber auras signify recommended paths from concept links.
 * 3. HIERARCHICAL SCALING: Active node (ActiveNodeId) must be 1.6x baseline scale with localized collision repulsion.
 * 4. LEGIBILITY: Labels are only fully opaque for active or highlighted nodes; others remain at 0.6 opacity.
 */
const GraphVisualization: React.FC<GraphVisualizationProps> = ({ 
  data, 
  activeNodeId, 
  highlightedNodeIds,
  onNodeClick, 
  onNodeHover 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); 

    // Define glow filters
    const defs = svg.append("defs");
    
    // Standard Glow
    const glowFilter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
    glowFilter.append("feGaussianBlur").attr("stdDeviation", "3.5").attr("result", "blur");
    glowFilter.append("feComposite").attr("in", "SourceGraphic").attr("in2", "blur").attr("operator", "over");

    // Highlight Pulse Filter
    const pulseFilter = defs.append("filter")
      .attr("id", "pulse-glow")
      .attr("x", "-100%")
      .attr("y", "-100%")
      .attr("width", "300%")
      .attr("height", "300%");
    pulseFilter.append("feGaussianBlur").attr("stdDeviation", "8").attr("result", "blur");

    const g = svg.append("g");

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Optimized simulation for visual hierarchy
    const simulation = d3.forceSimulation<any>(data.nodes)
      .force("link", d3.forceLink<any, any>(data.links).id(d => d.id).distance(140))
      .force("charge", d3.forceManyBody().strength(-1500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => {
        if (d.id === activeNodeId) return 120;
        if (highlightedNodeIds.includes(d.id)) return 100;
        return 80;
      }));

    const getSourceId = (s: any) => typeof s === 'string' ? s : s.id;
    const getTargetId = (t: any) => typeof t === 'string' ? t : t.id;

    const link = g.append("g")
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", d => {
        const s = getSourceId(d.source);
        const t = getTargetId(d.target);
        const isActive = s === activeNodeId || t === activeNodeId;
        const isHighlighted = highlightedNodeIds.includes(s) || highlightedNodeIds.includes(t);
        if (isActive) return COLORS.theory;
        if (isHighlighted) return "#f59e0b"; // Highlighted amber
        return COLORS.connection;
      })
      .attr("stroke-opacity", d => {
        const s = getSourceId(d.source);
        const t = getTargetId(d.target);
        const isActive = s === activeNodeId || t === activeNodeId;
        const isHighlighted = highlightedNodeIds.includes(s) || highlightedNodeIds.includes(t);
        
        if (isActive) return 1.0;
        if (isHighlighted) return 0.7;
        return 0.15; // Baseline opacity for background links
      })
      .attr("stroke-width", d => {
        const s = getSourceId(d.source);
        const t = getTargetId(d.target);
        const isActive = s === activeNodeId || t === activeNodeId;
        const isHighlighted = highlightedNodeIds.includes(s) || highlightedNodeIds.includes(t);
        
        if (isActive) return d.strength * 10; // High prominence for active node
        if (isHighlighted) return d.strength * 5; // Medium prominence for highlighted connections
        return d.strength * 1.5; // Baseline width
      });

    const node = g.append("g")
      .selectAll("g")
      .data(data.nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d) => onNodeClick(d.id))
      .on("mouseenter", (event, d) => onNodeHover(d))
      .on("mouseleave", () => onNodeHover(null))
      .call(d3.drag<any, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.each(function(d) {
      const el = d3.select(this);
      const color = COLORS[d.type as NodeType] || "#fff";
      const isActive = d.id === activeNodeId;
      const isHighlighted = highlightedNodeIds.includes(d.id);
      const sizeScale = isActive ? 1.6 : (isHighlighted ? 1.3 : 1.0);

      // Base layer glow for active node
      if (isActive) {
        el.append("circle")
          .attr("r", 30)
          .attr("fill", color)
          .attr("opacity", 0.3)
          .attr("filter", "url(#glow)");
      }

      // Highlight pulse for suggested connections
      if (isHighlighted) {
        el.append("circle")
          .attr("r", 35)
          .attr("fill", "#f59e0b")
          .attr("opacity", 0.4)
          .attr("filter", "url(#pulse-glow)")
          .attr("class", "animate-pulse");
      }

      // Shape primitives
      if (d.type === 'song') {
        el.append("circle")
          .attr("r", 15 * sizeScale)
          .attr("fill", color)
          .attr("stroke", isActive || isHighlighted ? "#fff" : "none")
          .attr("stroke-width", isActive ? 4 : 2);
      } else if (d.type === 'theory') {
        el.append("rect")
          .attr("x", -15 * sizeScale)
          .attr("y", -15 * sizeScale)
          .attr("width", 30 * sizeScale)
          .attr("height", 30 * sizeScale)
          .attr("fill", color)
          .attr("stroke", isActive || isHighlighted ? "#fff" : "none")
          .attr("stroke-width", isActive ? 4 : 2);
      } else if (d.type === 'narrative') {
        el.append("path")
          .attr("d", d3.symbol().type(d3.symbolDiamond).size(600 * (sizeScale ** 2)))
          .attr("fill", color)
          .attr("stroke", isActive ? "#000" : (isHighlighted ? "#fff" : "none"))
          .attr("stroke-width", 2);
      } else {
        el.append("rect")
          .attr("x", -12 * sizeScale)
          .attr("y", -12 * sizeScale)
          .attr("width", 24 * sizeScale)
          .attr("height", 24 * sizeScale)
          .attr("rx", 4)
          .attr("fill", color)
          .attr("stroke", isActive || isHighlighted ? "#fff" : "none")
          .attr("stroke-width", isActive ? 4 : 2);
      }

      el.append("text")
        .attr("dx", (25 + (isActive ? 10 : (isHighlighted ? 5 : 0))))
        .attr("dy", 6)
        .attr("fill", isHighlighted ? "#f59e0b" : "white")
        .attr("font-size", isActive ? "14px" : "11px")
        .attr("font-weight", isActive || isHighlighted ? "900" : "500")
        .attr("class", isActive ? "glow-cyan tracking-widest" : (isHighlighted ? "glow-orange animate-pulse" : "opacity-60 font-medium"))
        .text(isActive || isHighlighted ? d.title.toUpperCase() : d.title);
    });

    simulation.on("tick", () => {
      link.attr("x1", d => d.source.x).attr("y1", d => d.source.y).attr("x2", d => d.target.x).attr("y2", d => d.target.y);
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => { simulation.stop(); };
  }, [data, activeNodeId, highlightedNodeIds]);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#0a0a0a]">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default GraphVisualization;
