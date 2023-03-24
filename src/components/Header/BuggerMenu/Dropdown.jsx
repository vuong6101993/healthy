import { Link } from 'react-router-dom'
import { useAuth } from '~/context/auth'

const items = [
    { id: 1, label: '自分の記録', to: '/' },
    { id: 2, label: '体重グラフ', to: '/' },
    { id: 3, label: '目標', to: '/' },
    { id: 4, label: '選択中のコース', to: '/' },
    { id: 5, label: 'コラム一覧', to: '/' },
    { id: 6, label: '設定', to: '/' },
]

const Dropdown = (props) => {
    const { open } = props
    const { isLogin, login, logout } = useAuth()

    if (!open) {
        return <></>
    }

    return (
        <div className='absolute top-full right-0'>
            <ul className='divide-y divide-dark-500 border border-dark-500'>
                {items.map((item) => (
                    <Link
                        key={item.id}
                        to={item.to}
                        className='inline-block bg-gray-400 min-w-[280px] py-6 px-8 text-light font-noto-light hover:bg-dark-500'
                    >
                        <p>{item.label}</p>
                    </Link>
                ))}
                <button
                    type='button'
                    className='inline-block text-left bg-gray-400 min-w-[280px] py-6 px-8 text-light font-noto-light hover:bg-dark-500'
                    onClick={isLogin ? logout : login}
                >
                    {isLogin ? 'Logout' : 'Login'}
                </button>
            </ul>
        </div>
    )
}

export default Dropdown
