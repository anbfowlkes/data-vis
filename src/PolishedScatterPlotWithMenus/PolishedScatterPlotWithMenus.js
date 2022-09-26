import { useState, useCallback, useEffect } from 'react'
import { csv, scaleLinear, max, format, extent } from 'd3'
import { useData } from './useData'
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { Marks } from './Marks'
import './PolishedScatterPlotWithMenus.css'
import Dropdown from './Dropdown'
import ReactDropdown from 'react-dropdown'

// number 9
let PolishedScatterPlotWithMenus = () => {

    let data = useData()

    let width = 960
    let menuHeight = 60
    let height = 600 - 60
    let margin = { top: 40, right: 20, bottom: 80, left: 300 }
    let innerHeight = height - (margin.top + margin.bottom)
    let innerWidth = width - (margin.left + margin.right)

    const attributes = [
        {value: 'sepal_length', label: 'Sepal Length'}, 
        {value: 'sepal_width', label: 'Sepal Width'},
        {value: 'petal_length', label: 'Petal Length'}, 
        {value: 'petal_width', label: 'Petal Width'}, 
        {value: 'species', label: 'Species'}
    ]

    const getLabel = (value) => {
        for (let i = 0; i < attributes.length; i++) {
            if (attributes[i].value == value) {
                return attributes[i].label
            }
        }
    }

    // the 'd' bellow represents one element (row) of the data
    //we're using a band scale which is useful for ordinal data

    const initialXAttribute = 'petal_length'
    const [xAttribute, setXAttribute] = useState(initialXAttribute)
    const xValue = (d) => d[xAttribute]
    const xAxisLabel = getLabel(xAttribute)

    const initialYAttribute = 'sepal_width'
    const [yAttribute, setYAttribute] = useState(initialYAttribute)
    const yValue = (d) => d[yAttribute]
    const yAxisLabel = getLabel(yAttribute)

    //xValue is a function that takes in a row of the data and sends it to the sepal_length, then what happens below is we say we want to go from the min of these values to the max for our xScale domain on our scatterchart. The xValue function is an accessor which tells the computer what we're basing the min and max off of in the data

    if (!data) {
        return <pre>'Loading...'</pre>
    }
    
    let xScale = scaleLinear()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice()
        // .domain([min(data, xValue), max(data, xValue)]) instead of doing this, extent does the same thing
        
    let yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([0, innerHeight])

    const xAxisLabelOffset = 55
    const yAxisLabelOffset = 50

    console.log('ticks console.log: ', xScale.ticks())
    console.log('yScale domain console.log: ', yScale.domain())

    const xAxisTickFormatter = n => format('.2s')(n).replace('G','B')

    console.log(data.columns) // this console.logs all the columns of the data, which is what we want as the attributes in our menu dropdown

    return (
        <>
            <div className='menus-container'>
                <span className='dropdown-label'>X:</span>
                <ReactDropdown 
                    options={attributes}
                    value={xAttribute}
                    onChange={({ value }) => setXAttribute(value)}
                />

                <span className='dropdown-label'>Y:</span>
                <ReactDropdown 
                    options={attributes}
                    value={yAttribute}
                    onChange={({ value }) => setYAttribute(value)}
                />
             </div>

            <svg width={width} height={height} >

                <g transform={`translate(${margin.left},${margin.top})`}>

                    <AxisBottom 
                        xScale={xScale} 
                        innerHeight={innerHeight} 
                        tickFormat={xAxisTickFormatter} 
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
                        tooltipFormat={xAxisTickFormatter}
                        circleRadius={7}
                    />

                </g>

            </svg>
        </>
    )
}

export default PolishedScatterPlotWithMenus