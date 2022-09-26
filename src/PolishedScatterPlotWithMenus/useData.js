import { useState, useEffect } from 'react'
import { csv } from 'd3'

export const useData = () => {

    let csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv'
    
    let [data, setData] = useState(null)

    useEffect(() => {
        let row = (d) => {
            d.sepal_length = parseFloat(d.sepal_length)
            d.sepal_width = parseFloat(d.sepal_width)
            d.petal_length = parseFloat(d.petal_length)
            d.petal_width = parseFloat(d.petal_width)
            return d
        }
        csv(csvUrl, row).then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

    return data
}