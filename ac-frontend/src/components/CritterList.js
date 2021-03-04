import Critter from './Critter'

const CritterList = props => {
    const source = (props.source.charAt(0).toLowerCase() + props.source.slice(1)).replace(/\s/g, '')
    
    return (
        <div className="critter-list">
            <h2>{props.source}</h2>
            <div className='Critter'>{props.critter[source].map(critterArg => <Critter critter={critterArg} />)}</div>
        </div>
    )
}

export default CritterList