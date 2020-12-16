import React, {Component} from 'react'
import CritterList from '../components/CritterList'

export default class FishContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            fish: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/fish').then(resp => resp.json()).then(json => this.setState({ fish: json.data }))
    }

    render() {
        return (
            <div>
                <CritterList critters={this.state.fish}/>
            </div>
        )
    }
}