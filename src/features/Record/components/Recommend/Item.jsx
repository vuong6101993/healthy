import React from 'react'

const Item = (props) => {
    const { children } = props

    return (
        <li>
            <div className='h-72 w-72 bg-primary-300 p-6'>{children}</div>
        </li>
    )
}

export default Item
