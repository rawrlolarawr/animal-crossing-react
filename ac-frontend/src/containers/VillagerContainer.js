import React from 'react'
import { connect } from 'react-redux'
import VillagerList from '../components/VillagerList'


const VillagerContainer = props => {
    return (
        <div>
            <VillagerList source='Villagers' villagers={props.villagers}/>
        </div>
    )
}

const mapStateToProps = state => {
    return { villagers: state.villagers }
}

export default connect(mapStateToProps)(VillagerContainer)