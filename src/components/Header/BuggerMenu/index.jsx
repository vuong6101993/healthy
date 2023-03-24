import React, { useState } from 'react'
import { BuggerIcon, CloseIcon } from '../Icon'
import Dropdown from './Dropdown'

const BuggerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='relative'>
            <button type='button' onClick={() => setOpen(!open)} className='hover:opacity-70'>
                {open ? <CloseIcon /> : <BuggerIcon />}
            </button>
            <Dropdown open={open} />
        </div>
    )
}

export default BuggerMenu
