export const AxisBottom = ( {xScale, innerHeight, tickFormat} ) => {
    return (
        xScale.ticks().map((tickValue) => {
            return (
            <g className='tick' key={tickValue} transform ={`translate(${xScale(tickValue)},0)`}>
                <line y2={innerHeight} />
                <text style={{textAnchor: 'middle'}} y={innerHeight + 15}>{tickFormat(tickValue)}</text>
            </g>
            )
    })
    )
    
}

