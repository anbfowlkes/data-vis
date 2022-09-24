import { useState, useCallback, useEffect } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3'

let MakingABarChart = () => {

    let width = 960
    let height = 500

    let [data, setData] = useState(null)

    let csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'


    useEffect(() => {
        let row = d => {
            d.Population = parseFloat(d['2020'])
            return d
        }
        csv(csvUrl, row).then(data => {
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
        .range([0, height])

    let xScale = scaleLinear()
        .domain([0, max(data, d => d.Population)])
        .range([0, width])

    return (
        <svg width={width} height={height}>
            {data.map((d) => {
                return (<rect 
                    x={0} 
                    y={yScale(d.Country)} 
                    width={xScale(d.Population)} 
                    height={yScale.bandwidth()} />)
            })}
        </svg>
    )
}

export default MakingABarChart