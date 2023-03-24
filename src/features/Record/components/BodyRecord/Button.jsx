import clsx from 'clsx'

const colors = {
    true: 'bg-primary-300 text-light',
    false: 'bg-light text-primary-300',
}

const Button = (props) => {
    const { active, children } = props

    return (
        <button
            type='button'
            onClick={() => {}}
            className={clsx(
                colors[active],
                'inline-block rounded-full min-w-[56px] py-1 px-2 text-sm hover:opacity-70'
            )}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    active: false,
}

export default Button
