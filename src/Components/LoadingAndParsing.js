import * as d3 from 'd3'
import { useState, useEffect } from 'react'
import { csv } from 'd3'

const LoadingAndParsing = () => {

    const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

    let [items, setItems] = useState(null)

    let getData = () => csv(csvUrl).then(data => {
        console.log(data)
        console.log(data.length + ' rows')
        console.log(data.columns.length + ' columns')
        console.log(data.columns + ' are the colums')
        console.log(data.length / 1024 + ' kB')
        setItems(data)
      })

      useEffect(() => {
        getData()
      },[])


    return (
        <div>
            Data is: {items ? 'loaded' : 'loading'}
        </div>
    )
}

export default LoadingAndParsing