import { useState, useCallback, useEffect } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3'
import { useData } from './useData'
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { Marks } from './Marks'

// number 7
let RefactoredBarChart = () => {

    let data = useData()

    let width = 960
    let height = 500
    let margin = { top: 20, right: 20, bottom: 20, left: 200 }
    let innerHeight = height - (margin.top + margin.bottom)
    let innerWidth = width - (margin.left + margin.right)

    if (!data) {
        return <pre>'Loading...'</pre>
    }

    // the 'd' bellow represents one element (row) of the data
    //we're using a band scale which is useful for ordinal data

    const yValue = (d) => d.Country
    const xValue = (d) => d.Population

    let yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])

    let xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth])
    
    console.log(xScale.ticks())
    console.log(yScale.domain())

    return (
        <svg width={width} height={height} >

            <g transform={`translate(${margin.left},${margin.top})`}>

                <AxisBottom xScale={xScale} innerHeight={innerHeight} />

                <AxisLeft yScale={yScale} />
                
                <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} />

            </g>

        </svg>
    )
}

export default RefactoredBarChart