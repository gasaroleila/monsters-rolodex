import { getByPlaceholderText } from '@testing-library/dom'
import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className= 'search'
        type='Search' 
        placeholder={placeholder}
        onChange= {handleChange} />
)