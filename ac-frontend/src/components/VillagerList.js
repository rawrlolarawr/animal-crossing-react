import Villager from './Villager'

const VillagerList = props => {
    const source = (props.source.charAt(0).toLowerCase() + props.source.slice(1)).replace(/\s/g, '')
    return (
        <div className="villager-list">
            <h2>{props.source}</h2>
            <div className='Villagers'>{props.villagers[source].map(villagerArg => <Villager villager={villagerArg} />)}</div>
        </div>
    )
}

export default VillagerList