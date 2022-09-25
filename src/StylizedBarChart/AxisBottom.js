export const AxisBottom = ( {xScale, innerHeight} ) => {
    return (
        xScale.ticks().map((tickValue) => {
            return (
            <g className='tick' key={tickValue} transform ={`translate(${xScale(tickValue)},0)`}>
                <line y2={innerHeight} />
                <text style={{textAnchor: 'middle'}} y={innerHeight + 15}>{tickValue}</text>
            </g>
            )
    })
    )
    
}

