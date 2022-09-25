import { useState, useCallback, useEffect } from 'react'
import { csv, scaleLinear, max, format, extent } from 'd3'
import { useData } from './useData'
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { Marks } from './Marks'
import './ScatterPlot.css'

// number 9
let ScatterPlot = () => {

    let data = useData()

    let width = 960
    let height = 600
    let margin = { top: 40, right: 20, bottom: 80, left: 300 }
    let innerHeight = height - (margin.top + margin.bottom)
    let innerWidth = width - (margin.left + margin.right)

    if (!data) {
        return <pre>'Loading...'</pre>
    }

    // the 'd' bellow represents one element (row) of the data
    //we're using a band scale which is useful for ordinal data

    const xValue = (d) => d.sepal_length
    const yValue = (d) => d.sepal_width

    //xValue is a function that takes in a row of the data and sends it to the sepal_length, then what happens below is we say we want to go from the min of these values to the max for our xScale domain on our scatterchart. The xValue function is an accessor which tells the computer what we're basing the min and max off of in the data
    
    let xScale = scaleLinear()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice()
        // .domain([min(data, xValue), max(data, xValue)]) instead of doing this, extent does the same thing
        
    let yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([0, innerHeight])

    const xAxisLabel = 'Sepal Length'
    const yAxisLabel = 'Sepal Width'

    const xAxisLabelOffset = 55
    const yAxisLabelOffset = 50

    console.log('ticks console.log: ', xScale.ticks())
    console.log('yScale domain console.log: ', yScale.domain())

    const numFormatter = n => format('.2s')(n).replace('G','B')

    return (
        <svg width={width} height={height} >

            <g transform={`translate(${margin.left},${margin.top})`}>

                <AxisBottom 
                    xScale={xScale} 
                    innerHeight={innerHeight} 
                    tickFormat={numFormatter} 
                    tickOffset={20} 
                />

                <AxisLeft 
                    yScale={yScale} 
                    innerWidth={innerWidth} 
                    tickOffset={7} 
                />

                <text 
                    className='axis-label'
                    x={innerWidth/2} 
                    y={innerHeight + xAxisLabelOffset} 
                    textAnchor='middle'
                >
                    {xAxisLabel}
                </text>

                <text 
                    className='axis-label'
                    textAnchor='middle'
                    transform={`translate(${-yAxisLabelOffset}, ${innerHeight/2}) rotate(-90)`}     
                >
                    {yAxisLabel}
                </text>
                
                <Marks 
                    data={data} 
                    xScale={xScale} 
                    yScale={yScale} 
                    xValue={xValue}
                    yValue={yValue} 
                    tooltipFormat={numFormatter}
                    circleRadius={7}
                />

            </g>

        </svg>
    )
}

export default ScatterPlot