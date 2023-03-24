import React from 'react'

const ScrollTop = () => {
    return (
        <div className='fixed right-24 bottom-24'>
            <a
                href='#root'
                className='rounded-full border border-gray-400 text-gray-400 w-12 h-12 flex items-center justify-center hover:opacity-70'
            >
                <svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z'
                        fill='#777777'
                    />
                </svg>
            </a>
        </div>
    )
}

export default ScrollTop
