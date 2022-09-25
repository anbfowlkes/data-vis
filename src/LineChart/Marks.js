import { line, curveNatural } from 'd3'
import { Y } from 'vega-lite/build/src/channel'
export const Marks = ( { data, xScale, yScale, xValue, yValue, tooltipFormat, circleRadius } ) => {
    return (
        <>
            <g className='marks'>
                <path 
                fill='none'
                stroke='black'
                d={line()
                    .x(d=>xScale(xValue(d)))
                    .y(d=>yScale(yValue(d)))
                    .curve(curveNatural)(data)} 
                />
                {data.map((d) => {
                    return (
                        <circle
                            cx={xScale(xValue(d))}
                            cy={yScale(yValue(d))} 
                            r={circleRadius}
                        >
                            <title>{tooltipFormat(xValue(d))}</title>
                        </circle>
                    )
                })}
            </g>
        </>
    ) // don't do a div, it doesn't work, do a fragment instead
}