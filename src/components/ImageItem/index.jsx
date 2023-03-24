import clsx from 'clsx'
import { Link } from 'react-router-dom'

const sizes = {
    default: 'w-[234px] h-[234px]',
    small: 'w-[234px] h-[144px]',
}

const ImageItem = (props) => {
    const { image, label, to, size, className } = props
    let Component = 'div'

    if (to) {
        Component = Link
    }

    return (
        <Component to={to} className={clsx(sizes[size], 'bg-gray-400 relative cursor-pointer', className)}>
            <img src={image} alt='' className='w-full h-full object-cover' />
            <div className='absolute bottom-0 left-0 bg-primary-300'>
                <p className='text-light font-inter-light text-[15px] text-base py-[7px] px-[10px]'>{label}</p>
            </div>
        </Component>
    )
}

ImageItem.defaultProps = {
    size: 'default',
}

export default ImageItem
