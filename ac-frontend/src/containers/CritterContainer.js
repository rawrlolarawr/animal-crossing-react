import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FishContainer from './FishContainer'
import { addFish } from '../actions/FishActions'
import { connect } from 'react-redux'

const CritterContainer = props => {
    useEffect(() => {
        console.log('PROPS: ', this)
        fetch('http://localhost:3001/fish')
                .then(resp => resp.json())
                .then(fishObj => {
                    console.log('FISH: ', fishObj)
                    debugger
                    return fishObj.data.map(fish => props.dispatch(addFish(fish.attributes)))
                })
      }, [])

    return (
        <Router>
            <div className="App">
                <Link to='/fish'>Fish</Link>
                <Route exact path='/fish'>
                    <FishContainer />
                </Route>
            </div>
        </Router>
    )
}

const mapStateToProps = state => {
    return { fish: state.fish }
}

export default connect(mapStateToProps)(CritterContainer)