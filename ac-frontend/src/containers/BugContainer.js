import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CritterList from '../components/CritterList'

const BugContainer = props => {
    return (
        <div>
            {console.log("BUGS", props)}
            <CritterList source='Bugs' critter={props.bugs}/>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.bugs)
    return { bugs: state.bugs }
}

export default connect(mapStateToProps)(BugContainer)