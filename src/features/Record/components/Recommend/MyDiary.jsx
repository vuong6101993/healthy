import { Button } from '~/components'
import { images } from './image'

const MyDiary = () => {
    return (
        <div
            className='relative h-full w-full flex flex-col gap-1 justify-center items-center bg-dark-500 bg-cover bg-center bg-no-repeat bg-blend-multiply'
            style={{ backgroundImage: `url(${images[3]})` }}
        >
            <p className='uppercase font-inter-regular text-2xl text-primary-300'>my diary</p>
            <Button size='small'>自分の日記</Button>
        </div>
    )
}

export default MyDiary
