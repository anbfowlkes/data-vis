import { useState, useEffect } from 'react'
import { csv } from 'd3'

export const useData = () => {

    let csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'
    
    let [data, setData] = useState(null)

    useEffect(() => {
        let row = (d) => {
            d.Population = parseFloat(d['2020']) * 1000
            return d
        }
        csv(csvUrl, row).then(data => {
            console.log(data)
            setData(data.slice(0,10))
        })
    }, [])

    return data
}