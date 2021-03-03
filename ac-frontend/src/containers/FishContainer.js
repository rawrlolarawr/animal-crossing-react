import React, {Component} from 'react'
import { connect } from 'react-redux'
import CritterList from '../components/CritterList'
import { addFish } from '../actions/FishActions'

class FishContainer extends Component {
    // addFish = newFish => {
    //     fetch('http://localhost:3001/fish', this.createConfigObj('POST', newFish))
    //     this.props.dispatch(addFish(newFish))
    // }

    // renderFish = fishObj => {
    //     console.log({ fishObj })
    //     return fishObj.data.map(fish => this.props.dispatch(addFish(fish.attributes)))
    // }

    // componentDidMount() {
    //     console.log('BEFORE FETCH')
    //     fetch('http://localhost:3001/fish')
    //         .then(resp => resp.json())
    //         .then(fish => {
    //             console.log('FISH: ', fish)
    //             return this.renderFish(fish)
    //         })
    // }

    // createConfigObj = (method, body) => {
    //     return {
    //         method: method,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     }
    // }

    render() {
        return (
            <div>
                <CritterList source='Fish' critter={this.props.fish}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.fish)
    return { fish: state.fish }
}

export default connect(mapStateToProps)(FishContainer)