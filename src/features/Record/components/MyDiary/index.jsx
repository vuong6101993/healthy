import { Button } from '~/components'

const MyDiary = (props) => {
    const { options } = props

    return (
        <div className='max-w-5xl mx-auto'>
            <h2 className='uppercase text-2xl font-inter-regular'>My Diary</h2>
            <ul className='grid grid-cols-4 gap-3'>
                {options?.map((diary) => (
                    <li key={diary.id} className='bg-light p-4 border-2 border-dark-500 text-dark-500 space-y-4'>
                        <h3 className='text-xl font-inter-regular w-28 break-words'>{diary.title}</h3>
                        <p className='text-sm font-inter-regular line-clamp-5'>{diary.content}</p>
                    </li>
                ))}
            </ul>
            <div className='mx-auto w-fit my-12'>
                <Button color='gradient'>自分の日記をもっと見る</Button>
            </div>
        </div>
    )
}

export default MyDiary
