import React from "react"

const Critter = props => {
    
    return (
        <div>
            <h3>{props.critter.attributes.name}</h3>
            <p>Active Hours: {props.critter.attributes.active_hours}</p>
            <p>Location: {props.critter.attributes.location}</p>
            <p>Flavor Text: {props.critter.attributes.flavor_text}</p>
            <p>Value: {props.critter.attributes.value}</p>
        </div>
    )
}

export default Critter