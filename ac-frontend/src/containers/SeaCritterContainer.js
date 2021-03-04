import React from 'react'
import { connect } from 'react-redux'
import CritterList from '../components/CritterList'


const SeaCritterContainer = props => {
    return (
        <div>
            <CritterList source='Sea Critters' critter={props.seaCritters}/>
        </div>
    )
}

const mapStateToProps = state => {
    return { seaCritters: state.seaCritters }
}

export default connect(mapStateToProps)(SeaCritterContainer)