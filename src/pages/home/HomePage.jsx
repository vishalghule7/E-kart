import { useContext } from 'react'
import Category from '../../components/category/Category'
import HeroSection from '../../components/heroSection/HeroSection'
import HomePageProductCard from '../../components/homePageProductCart/HomePageProductCart'
import Layout from '../../components/layout/Layout'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import Loader from '../../components/laoder/Loader'

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
        {/* <Loader/> */}
    </Layout>
  )
}

export default HomePage