import { useContext } from 'react'
import Category from '../../components/category/Category'
import HeroSection from '../../components/heroSection/HeroSection'
import HomePageProductCard from '../../components/homePageProductCart/HomePageProductCart'
import Layout from '../../components/layout/Layout'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import TopCompany from '../../components/topcompanies/TopCompany'
const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
        <TopCompany/>
    </Layout>
  )
}

export default HomePage