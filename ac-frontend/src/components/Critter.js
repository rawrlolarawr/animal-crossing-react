import React from "react"

const Critter = props => {
    return (
        <div>
            <h3>{props.critter.name}</h3>
            <p>Active Hours: {props.critter.active_hours}</p>
            <p>Location: {props.critter.location}</p>
            <p>Flavor Text: {props.critter.flavor_text}</p>
            <p>Value: {props.critter.value}</p>
        </div>
    )
}

export default Critter