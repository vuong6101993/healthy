import React from 'react'
import Icon from '~/assets/header-icon-3.svg'

const Notice = (props) => {
    const { className } = props

    return <img src={Icon} className={className} />
}

export default Notice
