const Banner = (props) => {
    const { Icon1, Icon2 } = props

    return (
        <div className='w-full flex items-center bg-dark-600'>
            <div className=''>
                <img src={Icon1} />
            </div>
            <div className='flex-1 flex justify-center'>
                <img src={Icon2} />
            </div>
        </div>
    )
}

export default Banner
