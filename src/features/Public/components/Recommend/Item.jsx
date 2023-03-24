import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const { children } = props
    return (
        <Link
            to='/'
            className='w-56 h-36 bg-dark-500 flex flex-col items-center justify-center divide-y gap-1 hover:opacity-70 cursor-pointer'
        >
            {children}
        </Link>
    )
}

export default Item
