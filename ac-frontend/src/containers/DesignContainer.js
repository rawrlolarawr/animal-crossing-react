import React, { useReducer } from 'react'
import useToggle from 'react-use-toggle'
import Design from '../components/Design'
import DesignForm from '../components/DesignForm'
import { connect } from 'react-redux'

const DesignContainer = props => {
    const [isSorted, toggleIsSorted] = useToggle()

    const mapDesigns = designs => {
        let sortedDesigns = designs
        if(isSorted){
            sortedDesigns = [...designs].sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
        }
        return sortedDesigns.map(designArg => <Design design={designArg} />)
    }

    return (
        <div className='Designs'>
            <DesignForm />
            <button onClick={toggleIsSorted}>Sort</button>
            {mapDesigns(props.designs)}
        </div>
    )
}

const mapStateToProps = state => {
    return { designs: state.designs.designs }
}

export default connect(mapStateToProps)(DesignContainer)