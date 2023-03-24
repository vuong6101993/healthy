import { ScrollTop } from '~/components'
import { diaries, exercises } from '~/mock/record'
import BodyRecord from './components/BodyRecord'
import MyDiary from './components/MyDiary'
import MyExercise from './components/MyExercise'
import Recommend from './components/Recommend'

const Record = () => {
    return (
        <div className='space-y-12 my-12'>
            <Recommend />
            <BodyRecord />
            <MyExercise options={exercises} />
            <MyDiary options={diaries} />
            <ScrollTop />
        </div>
    )
}

export default Record
