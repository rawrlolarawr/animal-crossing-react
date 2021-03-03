import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FishContainer from './FishContainer'
import BugContainer from './BugContainer'
import { connect } from 'react-redux'
import { addBug } from '../actions/BugActions'
import { addFish } from '../actions/FishActions'

const CritterContainer = props => {
    const fetchBugs = () => {
        fetch('http://localhost:3001/bugs')
                .then(resp => resp.json())
                .then(bugObj => {
                    return bugObj.data.map(bug => props.dispatch(addBug(bug.attributes)))
                })
    }

    const fetchFish = () => {
        fetch('http://localhost:3001/fish')
                .then(resp => resp.json())
                .then(fishObj => {
                    return fishObj.data.map(fish => props.dispatch(addFish(fish.attributes)))
                })
    }

    useEffect(() => {
        console.log('PROPS: ', this)
        fetchBugs()
        fetchFish()
      }, [])

    return (
        <Router>
            <div className="App">
                <Link to='/fish'>Fish</Link>
                <Route exact path='/fish'>
                    <FishContainer />
                </Route>
                <br />
                <Link to='/bugs'>Bugs</Link>
                <Route exact path='/bugs'>
                    <BugContainer />
                </Route>
            </div>
        </Router>
    )
}

const mapStateToProps = state => {
    return { fish: state.fish,
             bugs: state.bugs }
}

export default connect(mapStateToProps)(CritterContainer)