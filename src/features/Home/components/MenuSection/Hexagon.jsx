import React from 'react'
import { Link } from 'react-router-dom'

const Hexagon = (props) => {
    const { to, icon, label } = props

    return (
        <Link
            to={to}
            className='inline-flex hexagon flex-col justify-center text-xl text-light font-inter-light items-center flex-shrink-0 bg-gradient-to-b from-primary-300 to-primary-400 h-36 w-36 hover:opacity-70'
        >
            {icon}
            {label}
        </Link>
    )
}

export default Hexagon
