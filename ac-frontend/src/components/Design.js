import '../styles/design.css'
import placeholder from '../images/placeholder.jpg'
import React from 'react'

const Design = props => {
    return (
        <>
            <h3>{props.design.name}</h3>
            <img src={ placeholder } />
            <p>MA Code: {props.design.ma_code}</p>
            <p>MO Code: {props.design.mo_code}</p>
        </>
    )
}

export default Design