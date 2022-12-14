export const Marks = ( { data, xScale, yScale, xValue, yValue, tooltipFormat } ) => {
    return (
        data.map((d) => {
            return (
            <rect 
                className='mark'
                key={yValue(d)}
                x={0} 
                y={yScale(yValue(d))} 
                width={xScale(xValue(d))} 
                height={yScale.bandwidth()} >
                    <title>{tooltipFormat(xValue(d))}</title>
                </rect>
                )
        })
    )
}