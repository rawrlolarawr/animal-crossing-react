import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import FishContainer from './FishContainer'
import BugContainer from './BugContainer'
import SeaCritterContainer from './SeaCritterContainer'
import VillagerContainer from './VillagerContainer'
import DesignContainer from './DesignContainer'
import { connect } from 'react-redux'
import { fetchAssets } from '../actions/FetchAssets'

const DBContainer = props => {
    useEffect(() => {
        props.fetchAssets()
    }, [])

    return (
        <div className="critter_container">
            <Route exact path='/fish'>
                <FishContainer />
            </Route>
            <Route exact path='/bugs'>
                <BugContainer />
            </Route>
            <Route exact path='/sea_critters'>
                <SeaCritterContainer />
            </Route>
            <Route exact path='/villagers'>
                <VillagerContainer />
            </Route>
            <Route exact path='/designs'>
                <DesignContainer />
            </Route>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return { fetchAssets: () => dispatch(fetchAssets())}
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(DBContainer)