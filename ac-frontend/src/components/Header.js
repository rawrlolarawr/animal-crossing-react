import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/fish'>Fish</Link>
            <Link to='/bugs'>Bugs</Link>
            <Link to='/sea_critters'>Sea Critters</Link>
            <Link to='/villagers'>Villagers</Link>
            <Link to='/designs'>Designs</Link>
        </div>
    )
}

export default Header
