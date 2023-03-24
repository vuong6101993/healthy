import Button from './Button'
import Chart from './Chart'

const filters = [
    { id: 1, label: '日' },
    { id: 2, label: '週' },
    { id: 3, label: '月' },
    { id: 4, label: '年', active: true },
]

const BodyRecord = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='bg-dark-500 space-y-2 font-inter-regular text-light'>
                <div className='flex items-center gap-8 py-4 px-6'>
                    <div className='flex flex-col'>
                        {'body record'.split(' ').map((word, index) => (
                            <span className='uppercase' key={index}>
                                {word}
                            </span>
                        ))}
                    </div>
                    <p className='text-xl'>2021.05.21</p>
                </div>
                <Chart className='w-full object-cover' />
                <ul className='py-4 px-6 flex gap-4'>
                    {filters.map((filter) => (
                        <li key={filter.id}>
                            <Button active={filter.active}>{filter.label}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BodyRecord
