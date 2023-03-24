import clsx from 'clsx'

const buttonSizes = {
    small: 'min-w-[160px] px-2 py-1 text-sm rounded-sm',
    medium: 'min-w-[280px] px-1 py-4 text-base rounded',
}

const colors = {
    primary: 'bg-primary-400',
    gradient: 'bg-gradient-to-t from-primary-300 to-primary-400',
}

const Button = (props) => {
    const { children, size, color, onClick } = props

    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(buttonSizes[size], colors[color], 'text-center text-light hover:opacity-70')}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'primary',
}

export default Button
