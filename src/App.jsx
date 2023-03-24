import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingText, PageNotFound } from '~/components'
import { DefaultLayout, PublicLayout } from '~/layout'
import { AuthProvider } from './context/auth'

const Home = lazy(() => import('~/features/Home'))
const Record = lazy(() => import('~/features/Record'))
const Public = lazy(() => import('~/features/Public'))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingText />}>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<DefaultLayout />}>
                            <Route index element={<Home />} />
                            <Route path='record' element={<Record />} />
                            <Route path='*' element={<PageNotFound />} />
                        </Route>
                        <Route path='/public' element={<PublicLayout />}>
                            <Route index element={<Public />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
