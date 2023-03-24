import React from 'react'
import Icon from '~/assets/header-icon-1.svg'

const Record = (props) => {
    const { className } = props

    return <img src={Icon} className={className} />
}

export default Record
