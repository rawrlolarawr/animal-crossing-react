import React from 'react'
import { connect } from 'react-redux'
import CritterList from '../components/CritterList'


const FishContainer = props => {
    return (
        <div>
            <CritterList source='Fish' critter={props.fish}/>
        </div>
    )
}

const mapStateToProps = state => {
    return { fish: state.fish }
}

export default connect(mapStateToProps)(FishContainer)