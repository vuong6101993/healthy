import { Fragment } from 'react'
import Logo from '../Logo'
import BuggerMenu from './BuggerMenu'
import Item from './Item'
import { ChallengeNavLink, NoticeNavLink, RecordNavLink } from './NavLink'

const navLinks = [
    { id: 1, component: <RecordNavLink /> },
    { id: 2, component: <ChallengeNavLink /> },
    { id: 3, component: <NoticeNavLink /> },
]

const Header = () => {
    return (
        <Fragment>
            <div className='fixed z-50 inset-x-0 bg-dark-500 h-16'>
                <div className='h-full flex gap-2 items-center max-w-7xl mx-auto'>
                    <div className='h-full flex-1 flex justify-center'>
                        <Logo className='pt-3 pb-2' />
                    </div>
                    <div className='flex-1 flex gap-12'>
                        <ul className='flex gap-7'>
                            {navLinks.map((link) => (
                                <Item key={link.id}>{link.component}</Item>
                            ))}
                        </ul>
                        <div className=''>
                            <BuggerMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-16' />
        </Fragment>
    )
}

export default Header
