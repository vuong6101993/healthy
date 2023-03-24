import React from 'react'
import Icon from '~/assets/header-icon-2.svg'

const Challenge = (props) => {
    const { className } = props

    return <img src={Icon} className={className} />
}

export default Challenge
