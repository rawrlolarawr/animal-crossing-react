import Critter from './Critter'

const CritterList = props => {
    return (
        <div className="critter-list">
            <h2>{props.source}</h2>
            <p>{props.critters.map(critterArg => <Critter critter={critterArg} />)}</p>
        </div>
    )
    
}

export default CritterList