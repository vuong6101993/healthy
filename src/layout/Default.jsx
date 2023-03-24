import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Footer, Header, LoadingText } from '~/components'
import { useAuth } from '~/context/auth'

const DefaultLayout = () => {
    const { isLogin } = useAuth()

    if (!isLogin) {
        return <Navigate to='/public' />
    }

    return (
        <div>
            <Header />
            <Suspense fallback={<LoadingText />}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
}

export default DefaultLayout
