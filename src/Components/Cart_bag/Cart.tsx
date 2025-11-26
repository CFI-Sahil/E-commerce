import EmptyBag from '../../assets/Emptybag.png';
import Footer from '../FooterSec/Footer';
import Navbar from '../Navbar';
const Cart = () => {
  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center h-[70vh]">
            <img
              src={EmptyBag}
              alt=""
              className="w-36"
            />
          </div>
          <Footer />
    </div>
  )
}

export default Cart