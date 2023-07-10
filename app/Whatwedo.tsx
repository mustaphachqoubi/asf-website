import { useEffect, useRef } from 'react';
import * as d3 from 'd3'

export const Whatwedo = () => {
  const svgRef = useRef(null);


  useEffect(() => {
    // Declare the chart dimensions and margins.
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3
      .scaleUtc()
      .domain([new Date('2023-01-01'), new Date('2024-01-01')])
      .range([marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - marginBottom, marginTop]);

    // Create the SVG container.
    const svg = d3
      .create('svg')
      .attr('width', width)
      .attr('height', height);

    // Add the x-axis.
    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

    // Add the y-axis.
    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y));

    // Append the SVG container to the DOM using the useRef reference.
    svgRef.current.appendChild(svg.node());
  }, []);

  return (
    <>
      <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 h-full flex justify-center items-center "><div ref={svgRef}></div></div>
        <div className=" flex-1 h-full flex justify-center items-center">two</div>
      </div>

      <div className="flex-1 flex justify-between items-center z-50">
        <div className=" flex-1 h-full flex justify-center items-center">two</div>
        <div className=" flex-1 h-full flex justify-center items-center">one</div>
      </div>
      <div className="absolute gradient w-80 h-80 rounded-full bottom-0 right-0 blur-2xl z-10" />
    </>
  )
}

