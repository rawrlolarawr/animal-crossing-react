import Critter from './Critter'

const CritterList = props => {
    console.log('CRITTER LIST PROPS: ', props.fish)
    const source = props.source.toLowerCase()
    return (
        <div className="critter-list">
            <h2>{props.source}</h2>
            <div className='Critter'>{props.critter[source].map(critterArg => <Critter critter={critterArg} />)}</div>
        </div>
    )
}

export default CritterList