import React from "react"

const Critter = (props) => {
    
    return (
        <div>
            <p>{props.critter.attributes.name}</p>
        </div>
    )
}

export default Critter