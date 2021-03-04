import React from "react"

const Villager = props => {
    return (
        <>
            <h3>{props.villager.name}</h3>
            <p>Personality: {props.villager.personality}</p>
            <p>Species: {props.villager.species}</p>
            <p>Birthday: {props.villager.birthday}</p>
            <p>Catchphrase: {props.villager.catchphrase}</p>
            <p>Hobbies: {props.villager.hobbies}</p>
        </>
    )
}

export default Villager