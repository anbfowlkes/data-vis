import * as d3 from 'd3'
import { useState, useEffect } from 'react'
import { csv, arc, pie } from 'd3'

const VisualizingData2 = () => {

    let [data, setData] = useState(null)

    // let getData = () => csv(csvUrl).then(data => {
    //     setItems(data)
    //   })

    let fetchData = async () => {
        let req = await fetch('https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv')
        let res = await req.text()
        res = d3.csvParse(res)
        console.log(res)
        setData(res)
    }
    let c = 0

      useEffect(() => {
        fetchData()
      },[])

    if (!data){
        console.log('loading')
        return <pre>Loading...</pre>
    }

    let width = 960
    let height = 500
    let centerX = width / 2
    let centerY = height / 2


    let pieArc = arc()
        .innerRadius(0)
        .outerRadius(width);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
                {data.map((d, i) => {
                    return (<path key={c++} 
                        fill={d['RGB hex value']} 
                        d={pieArc({
                            startAngle: i / data.length * 2 * Math.PI,
                            endAngle: (i + 1) / data.length * 2 * Math.PI
                        })} />)
                })}
            </g>
        </svg>
    )

    // let colorPie = pie().value(1)

    // return (
    //     <svg width={width} height={height}>
    //         <g transform={`translate(${centerX},${centerY})`}>
    //             {colorPie(data).map((d) => {
    //                 return <path key={c++} fill={d.data['RGB hex value']} d={pieArc(d)}></path>
    //             })}
    //         </g>
    //     </svg>
    // )

}

export default VisualizingData2