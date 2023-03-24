import { items } from '~/mock/public'
import List from './components/List'
import Recommend from './components/Recommend'

const Public = () => {
    return (
        <div className='space-y-12 py-12'>
            <Recommend />
            <List options={items} />
        </div>
    )
}

export default Public
