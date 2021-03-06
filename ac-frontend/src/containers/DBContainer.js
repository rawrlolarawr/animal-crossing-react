import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FishContainer from './FishContainer'
import BugContainer from './BugContainer'
import SeaCritterContainer from './SeaCritterContainer'
import VillagerContainer from './VillagerContainer'
import { connect } from 'react-redux'
import { addBug } from '../actions/BugActions'
import { addFish } from '../actions/FishActions'
import { addSeaCritter } from '../actions/SeaCritterActions'
import { addVillager } from '../actions/VillagerActions'
import { fetchCritters } from '../actions/FetchCritters'

const DBContainer = props => {
    // const fetchBugs = () => {
    //     fetch('http://localhost:3001/bugs')
    //             .then(resp => resp.json())
    //             .then(bugObj => {
    //                 return bugObj.data.map(bug => props.dispatch(addBug(bug.attributes)))
    //             })
    // }

    // const fetchFish = () => {
    //     fetch('http://localhost:3001/fish')
    //             .then(resp => resp.json())
    //             .then(fishObj => {
    //                 return fishObj.data.map(fish => props.dispatch(addFish(fish.attributes)))
    //             })
    // }

    // const fetchSeaCritters = () => {
    //     fetch('http://localhost:3001/sea_critters')
    //             .then(resp => resp.json())
    //             .then(sCObj => {
    //                 return sCObj.data.map(sC => props.dispatch(addSeaCritter(sC.attributes)))
    //             })
    // }

    // const fetchVillagers = () => {
    //     fetch('http://localhost:3001/villagers')
    //             .then(resp => resp.json())
    //             .then(villagerObj => {
    //                 console.log({villagerObj})
    //                 return villagerObj.data.map(villager => props.dispatch(addVillager(villager.attributes)))
    //             })
    // }

    useEffect(() => {
        // fetchBugs()
        // fetchFish()
        // fetchSeaCritters()
        // fetchVillagers()
        props.fetchCritters()
      }, [])

    return (
        <Router>
            <div className="critter_container">
                <Link to='/fish'>Fish</Link>
                <Route exact path='/fish'>
                    <FishContainer />
                </Route>
                <br />
                <Link to='/bugs'>Bugs</Link>
                <Route exact path='/bugs'>
                    <BugContainer />
                </Route>
                <br />
                <Link to='/sea_critters'>Sea Critters</Link>
                <Route exact path='/sea_critters'>
                    <SeaCritterContainer />
                </Route>
                <br />
                <Link to='/villagers'>Villagers</Link>
                <Route exact path='/villagers'>
                    <VillagerContainer />
                </Route>
            </div>
        </Router>
    )
}

const mapDispatchToProps = dispatch => {
    return { fetchCritters: () => dispatch(fetchCritters())}
}

const mapStateToProps = state => {
    return { fish: state.fish,
             bugs: state.bugs,
             villagers: state.villagers}
}

export default connect(mapStateToProps, mapDispatchToProps)(DBContainer)