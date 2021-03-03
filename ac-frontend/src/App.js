import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import CritterContainer from './containers/CritterContainer'
import React, { useEffect } from 'react';
import { connect } from 'react-redux'

const App = props => {
  // useEffect(() => {
  //   console.log('PROPS: ', this)
  //   fetch('http://localhost:3001/fish')
  //           .then(resp => resp.json())
  //           .then(fishObj => {
  //               console.log('FISH: ', fishObj)
  //               return fishObj.data.map(fish => props.dispatch(addFish(fish.attributes)))
  //           })
  // })

  return (
      <div className="App">
        <h1>Splash</h1>
        <CritterContainer />
      </div>
  );
}

// const mapStateToProps = state => {
//   return { fish: state.fish }
// }

export default App
