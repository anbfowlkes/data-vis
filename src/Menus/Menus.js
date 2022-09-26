import { useState, useCallback, useEffect } from 'react'
import { csv, scaleBand, scaleLinear, max } from 'd3'
import './Menus.css'
import Dropdown from './Dropdown'

// number 12
let Menus = () => {

    const options = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'hamster', label: 'Hamster' },
        { value: 'parrot', label: 'Parrot' },
        { value: 'spider', label: 'Spider' },
        { value: 'goldfish', label: 'Goldfish' }
    ]

    const initialValue = 'hamster'
    const [selectedValue, setSelectedValue] = useState(initialValue)
    console.log(selectedValue)

    return (
        <div>
           <label for='pet-select'>Choose a pet:</label>
           <Dropdown 
                options={options}
                id='pet-select'
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}
             />
        </div>
    )
}

export default Menus