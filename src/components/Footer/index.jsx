import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    { id: 1, name: '会員登録', to: '/' },
    { id: 2, name: '運営会社', to: '/' },
    { id: 3, name: '利用規約', to: '/' },
    { id: 4, name: '個人情報の取扱について', to: '/' },
    { id: 5, name: '特定商取引法に基づく表記', to: '/' },
    { id: 6, name: 'お問い合わせ', to: '/' },
]

const Footer = () => {
    return (
        <div className='h-32 bg-dark-500'>
            <div className='h-full max-w-7xl mx-auto'>
                <ul className='h-full flex gap-11 items-center'>
                    {links.map((link) => (
                        <li key={link.id} className='text-light font-noto-light text-xs'>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
