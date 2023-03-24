import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { RecordIcon } from '../Icon'

const Record = () => {
    return (
        <NavLink
            to='/record'
            className={({ isActive }) =>
                clsx('inline-flex gap-2 items-center hover:opacity-70', { 'text-primary-400': isActive })
            }
        >
            <RecordIcon />
            自分の記録
        </NavLink>
    )
}

export default Record
