import Critter from './Critter'

export default class CritterList {
    
    render() {
        <div class="critter-list">
            {this.props.critters.map((critterArg) => {
                <Critter critter={critterArg} />
            })}
        </div>
    }
}