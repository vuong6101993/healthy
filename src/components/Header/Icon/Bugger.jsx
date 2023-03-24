import Icon from '~/assets/bugger.svg'

const Bugger = (props) => {
    const { className } = props

    return <img src={Icon} className={className} />
}

export default Bugger
