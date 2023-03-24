import Beauty from './Beauty'
import Column from './Column'
import Diet from './Diet'
import Health from './Health'
import Item from './Item'

export const recommends = [
    { id: 1, component: <Column /> },
    { id: 2, component: <Diet /> },
    { id: 3, component: <Beauty /> },
    { id: 4, component: <Health /> },
]

const Recommend = (props) => {
    const {} = props

    return (
        <div className='max-w-5xl mx-auto'>
            <div className='flex justify-between'>
                {recommends?.map((item) => (
                    <Item key={item.id}>{item.component}</Item>
                ))}
            </div>
        </div>
    )
}

export default Recommend
