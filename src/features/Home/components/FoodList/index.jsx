import { Button, ImageItem } from '~/components'

const FoodList = (props) => {
    const { options } = props

    return (
        <div className='max-w-7xl mx-auto space-y-12'>
            <div className='w-fit mx-auto grid gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {options?.map((item) => (
                    <ImageItem
                        key={item.id}
                        image={item.image}
                        label={item.label}
                        to={item.to}
                        className='hover:opacity-70'
                    />
                ))}
            </div>
            <div className='mx-auto w-fit'>
                <Button color='gradient'>記録をもっと見る</Button>
            </div>
        </div>
    )
}

export default FoodList
