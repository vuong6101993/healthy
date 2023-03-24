import ChartImage from '~/assets/body-record.svg'

const Chart = (props) => {
    const { className } = props

    return <img className={className} src={ChartImage} />
}

export default Chart
