import { useState, useEffect } from 'react'
import { csv } from 'd3'





export const useData = () => {

    let csvUrl = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv'
    
    let [data, setData] = useState(null)

    useEffect(() => {
        let row = (d) => {
            d.temperature = parseFloat(d.temperature)
            d.timestamp = new Date(d.timestamp)
            // this parses the data into a new format, '2015-03-20T21:00:00.000Z' becomes : 'Fri Mar 20 2015 17:00:00 GMT-0400 (Eastern Daylight Time)'
            return d
        }
        csv(csvUrl, row).then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

    return data
}