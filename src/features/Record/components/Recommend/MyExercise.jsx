import { Button } from '~/components'
import { images } from './image'

const MyExercise = () => {
    return (
        <div
            className='relative h-full w-full flex flex-col gap-1 justify-center items-center bg-dark-500 bg-cover bg-center bg-no-repeat bg-blend-multiply'
            style={{ backgroundImage: `url(${images[2]})` }}
        >
            <p className='uppercase font-inter-regular text-2xl text-primary-300'>my exercise</p>
            <Button size='small'>自分の運動の記録</Button>
        </div>
    )
}

export default MyExercise
