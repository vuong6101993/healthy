import Icon from '~/assets/close.svg'

const Close = (props) => {
    const { className } = props

    return <img src={Icon} className={className} />
}

export default Close
