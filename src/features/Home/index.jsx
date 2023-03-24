import Icon1 from '~/assets/banner-1.svg'
import Icon2 from '~/assets/banner-2.svg'
import { ScrollTop } from '~/components'
import { foodItems, menuItems } from '~/mock/home'
import Banner from './components/Banner'
import FoodList from './components/FoodList'
import MenuSection from './components/MenuSection'

const Home = () => {
    return (
        <div className='space-y-12 mb-12'>
            <Banner Icon1={Icon1} Icon2={Icon2} />
            <MenuSection options={menuItems} />
            <FoodList options={foodItems} />
            <ScrollTop />
        </div>
    )
}

export default Home
