const MyExercise = (props) => {
    const { options } = props

    return (
        <div className='max-w-5xl mx-auto'>
            <div className='bg-dark-500 space-y-2 font-inter-regular text-light py-1'>
                <div className='flex items-center gap-8 py-4 px-6'>
                    <div className='flex flex-col'>
                        {'my exercise'.split(' ').map((word, index) => (
                            <span className='uppercase' key={index}>
                                {word}
                            </span>
                        ))}
                    </div>
                    <p className='text-xl'>2021.05.21</p>
                </div>
                <ul className='py-4 px-8 grid grid-cols-2 gap-x-10 gap-y-2 max-h-60 overflow-auto custom-scroll'>
                    {options?.map((exercise) => (
                        <li key={exercise.id} className='list-disc border-b border-gray-400 pb-2'>
                            <div className='flex items-center justify-between gap-3'>
                                <div className='flex flex-col'>
                                    <span className='uppercase'>{exercise.label}</span>
                                    <span className='text-sm text-primary-300'>{exercise.kcal}</span>
                                </div>
                                <p className='text-xl text-primary-300'>{exercise.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MyExercise
