import { ImageItem } from '~/components'

const List = (props) => {
    const { options } = props

    return (
        <div className='max-w-5xl mx-auto'>
            <div className='w-fit mx-auto grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {options?.map((item) => (
                    <div className='flex flex-col gap-2 hover:opacity-70 cursor-pointer'>
                        <ImageItem key={item.id} size='small' image={item.image} label={item.label} to={item.to} />
                        <p>{item.description}</p>
                        <ul className='flex gap-2'>
                            {item.tags?.map((tag) => (
                                <li className='text-xs text-primary-300'>{tag}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List
