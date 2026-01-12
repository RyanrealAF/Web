
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Node, Edge, GraphData, NodeType } from '../types';
import { COLORS } from '../constants';

interface GraphVisualizationProps {
  data: GraphData;
  activeNodeId: string;
  onNodeClick: (nodeId: string) => void;
  onNodeHover: (node: Node | null) => void;
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({ 
  data, 
  activeNodeId, 
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
    svg.selectAll("*").remove(); // Clear previous render

    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Simulation setup
    const simulation = d3.forceSimulation<any>(data.nodes)
      .force("link", d3.forceLink<any, any>(data.links).id(d => d.id).distance(150))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(60));

    // Links
    const link = g.append("g")
      .attr("stroke", COLORS.connection)
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke-width", d => d.strength * 4);

    // Nodes
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

    // Shapes based on NodeType
    node.each(function(d) {
      const el = d3.select(this);
      const color = COLORS[d.type as NodeType] || "#fff";
      const isActive = d.id === activeNodeId;

      if (d.type === 'song') {
        el.append("circle")
          .attr("r", 15)
          .attr("fill", color)
          .attr("stroke", isActive ? "#fff" : "none")
          .attr("stroke-width", 3);
      } else if (d.type === 'theory') {
        el.append("rect")
          .attr("x", -15)
          .attr("y", -15)
          .attr("width", 30)
          .attr("height", 30)
          .attr("fill", color)
          .attr("stroke", isActive ? "#fff" : "none")
          .attr("stroke-width", 3);
      } else if (d.type === 'narrative') {
        el.append("path")
          .attr("d", d3.symbol().type(d3.symbolDiamond).size(500))
          .attr("fill", color)
          .attr("stroke", isActive ? "#000" : "none")
          .attr("stroke-width", 2);
      } else {
        el.append("rect")
          .attr("x", -12)
          .attr("y", -12)
          .attr("width", 24)
          .attr("height", 24)
          .attr("rx", 4)
          .attr("fill", color)
          .attr("stroke", isActive ? "#fff" : "none")
          .attr("stroke-width", 3);
      }

      // Label
      el.append("text")
        .attr("dx", 20)
        .attr("dy", 5)
        .attr("fill", "white")
        .attr("font-size", "12px")
        .attr("font-weight", isActive ? "700" : "400")
        .text(d.title);
    });

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

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

    return () => {
      simulation.stop();
    };
  }, [data, activeNodeId]);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#0a0a0a]">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default GraphVisualization;
