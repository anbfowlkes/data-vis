export const AxisLeft = ( {yScale} ) => {
    return(
        yScale.domain().map((tickValue) => {
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
            })
    )
}

