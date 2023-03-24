import clsx from 'clsx'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NoticeIcon } from '../Icon'

const Notice = () => {
    const [notice, setNotice] = useState(1)

    return (
        <NavLink
            to='/notice'
            className={({ isActive }) =>
                clsx('inline-flex gap-2 items-center hover:opacity-70', { 'text-primary-400': isActive })
            }
        >
            <div className='relative'>
                <NoticeIcon />
                <div className='absolute h-4 w-4 -right-2 top-0 rounded-full bg-primary-500 flex items-center justify-center font-inter-light text-[10px]'>
                    {notice}
                </div>
            </div>
            お知らせ
        </NavLink>
    )
}

export default Notice
