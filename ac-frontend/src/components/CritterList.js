import React, { Component } from 'react'
import Critter from './Critter'

export default class CritterList extends Component {
    render() {
        return (
            <div class="critter-list">
                <p>{this.props.critters.map(critterArg => <Critter critter={critterArg} />)}</p>
            </div>
        )
    }
}