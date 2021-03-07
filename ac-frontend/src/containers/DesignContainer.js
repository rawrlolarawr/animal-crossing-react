import React from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import Design from '../components/Design'
import DesignForm from '../components/DesignForm'
import { connect } from 'react-redux'

const DesignContainer = props => {
    return (
        <div className='Designs'>
            <DesignForm />
            {console.log({props})}
            {props.designs.map(designArg => <Design design={designArg} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return { designs: state.designs.designs }
}

export default connect(mapStateToProps)(DesignContainer)