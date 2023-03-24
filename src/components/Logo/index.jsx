import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import LogoSvg from '~/assets/logo.svg'

const Logo = (props) => {
    const { className } = props
    const navigate = useNavigate()

    return <img src={LogoSvg} className={clsx('cursor-pointer', className)} onClick={() => navigate('/')} />
}

export default Logo
