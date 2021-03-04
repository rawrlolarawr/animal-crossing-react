import React from 'react'
import { connect } from 'react-redux'
import CritterList from '../components/CritterList'

const BugContainer = props => {
    return (
        <div>
            <CritterList source='Bugs' critter={props.bugs}/>
        </div>
    )
}

const mapStateToProps = state => {
    return { bugs: state.bugs }
}

export default connect(mapStateToProps)(BugContainer)