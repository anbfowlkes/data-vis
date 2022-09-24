import * as d3 from 'd3'
import { useState, useEffect } from 'react'
import { csv } from 'd3'

const VisualizingData = () => {

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

    return (
        <div style={{width: '1000px', height: '500px'}}>
            {data.map((d) => {
                return <div key={c++} style={{backgroundColor: d['RGB hex value'], width: '960px', height: '3px'}}></div>  
            })}
        </div>
    )

}

export default VisualizingData