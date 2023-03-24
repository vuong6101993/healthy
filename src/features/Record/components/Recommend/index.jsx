import BodyRecord from './BodyRecord'
import Item from './Item'
import MyDiary from './MyDiary'
import MyExercise from './MyExercise'

const items = [
    { id: 1, component: <BodyRecord /> },
    { id: 2, component: <MyExercise /> },
    { id: 3, component: <MyDiary /> },
]

const Recommend = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <ul className='flex justify-between'>
                {items.map((item) => (
                    <Item key={item.id}>{item.component}</Item>
                ))}
            </ul>
        </div>
    )
}

export default Recommend
