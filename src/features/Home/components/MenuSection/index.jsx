import Hexagon from './Hexagon'

const MenuSection = (props) => {
    const { options } = props

    return (
        <div className='flex flex-wrap justify-center gap-[84px] max-w-7xl w-full mx-auto'>
            {options?.map((item) => (
                <Hexagon key={item.id} to={item.to} icon={<img src={item.icon} />} label={item.label} />
            ))}
        </div>
    )
}

export default MenuSection
