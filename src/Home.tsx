import Banner_One from './Components/Banner_1/Banner_One'
import Blockbuster from './Components/Blockbuster_Deals/Blockbuster';
import Category from './Components/Category_Section/Category'
import Navbar from './Components/Navbar'
import Banner_Two from './Components/Banner_2/Banner_Two';
import Topdeals from './Components/TopDeals/Topdeals';
import TrendJew from './Components/TrendingJewellery/TrendJew';
import TopPerCent from './Components/TopPerfumes/TopPerCent';
import TopGhadi from './Components/TopWatches/TopGhadi';
import Banner_Three from './Components/Banner_3/Banner_Three';
import UnderTnn from './Components/Under_299/UnderTnn';
import Testtimonials from './Components/Testimonial/Testimonials';
import Footer from './Components/FooterSec/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Category />
      <Banner_One />
      <Blockbuster />
      <Topdeals />
      <Banner_Two />
      <TrendJew />
      <TopPerCent />
      <Banner_Three />
      <TopGhadi />
      <UnderTnn />
      <Testtimonials />
      <Footer />
    </div>
  )
}

export default Home