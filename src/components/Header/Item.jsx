import React from 'react'

const NavLink = (props) => {
    const { children } = props

    return <li className='text-light font-noto-light text-base'>{children}</li>
}

export default NavLink
