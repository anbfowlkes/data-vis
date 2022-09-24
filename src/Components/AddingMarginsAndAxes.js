import { useState, useCallback, useEffect } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3'

// number 6
let AddingMarginsAndAxes = () => {

    let [data, setData] = useState(null)

    let csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'

    let width = 960
    let height = 500
    let margin = { top: 20, right: 20, bottom: 20, left: 200 }
    let innerHeight = height - (margin.top + margin.bottom)
    let innerWidth = width - (margin.left + margin.right)

    useEffect(() => {
        let row = (d) => {
            d.Population = parseFloat(d['2020'])
            return d
        }
        csv(csvUrl, row).then(data => {
            console.log(data)
            setData(data.slice(0,10))
        })
    }, [])

    if (!data) {
        return <pre>'Loading...'</pre>
    }

    // the 'd' bellow represents one element (row) of the data
    //we're using a band scale which is useful for ordinal data

    let yScale = scaleBand()
        .domain(data.map(d => d.Country))
        .range([0, innerHeight])

    let xScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, innerWidth])
    
    console.log(xScale.ticks())
    console.log(yScale.domain())

    return (
        <svg width={width} height={height} fill='orange' style={{backgroundColor: 'lightblue'}}>
            <g transform={`translate(${margin.left},${margin.top})`}>

                {xScale.ticks().map((tickValue) => {
                    return (
                        <g key={tickValue} transform ={`translate(${xScale(tickValue)},0)`}>
                            <line 
                                x1={0} //this was xScale(tickValue) but we put that logic up in the transform
                                y1={0} 
                                x2={0} //same thing here
                                //we could also just not specify x1,y1,x2 since 0 is the default
                                y2={innerHeight} 
                                stroke='black'
                            />
                            {/* could also use dy='.71em' to move the text down a bit */}
                            <text style={{textAnchor: 'middle'}} y={innerHeight + 15}>{tickValue}</text>
                        </g>
                        )
                })}

                {yScale.domain().map((tickValue) => {
                    return (
                            <text 
                                key={tickValue}
                                style={{textAnchor: 'end'}} 
                                dy='.32em' 
                                x={-5} 
                                y={yScale(tickValue) + yScale.bandwidth() / 2}>
                                    {tickValue}
                            </text>
                        )
                })}
                
                {data.map((d) => {
                    return (<rect 
                        key={d.Country}
                        x={0} 
                        y={yScale(d.Country)} 
                        width={xScale(d.Population)} 
                        height={yScale.bandwidth()} />)
                })}
            </g>
        </svg>
    )
}

export default AddingMarginsAndAxes