import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { ChallengeIcon } from '../Icon'

const Challenge = () => {
    return (
        <NavLink
            to='/challenge'
            className={({ isActive }) =>
                clsx('inline-flex gap-2 items-center hover:opacity-70', { 'text-primary-400': isActive })
            }
        >
            <ChallengeIcon />
            チャレンジ
        </NavLink>
    )
}

export default Challenge
