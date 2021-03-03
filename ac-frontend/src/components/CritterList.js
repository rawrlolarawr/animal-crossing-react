import Critter from './Critter'
import { connect } from 'react-redux'

const CritterList = props => {
    console.log('CRITTER LIST PROPS: ', props.fish)
    return (
        <div className="critter-list">
            <h2>{props.source}</h2>
            <p>{props.critter.fish.map(critterArg => <Critter critter={critterArg} />)}</p>
        </div>
    )
}

export default CritterList