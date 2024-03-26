import Testimonials from "./pages/Testimonials"
import Query from "./pages/Query"
import Number from "./pages/Number"
import Hero from "./pages/hero"
import Moto from "./pages/Moto"
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import Test from "./pages/Test"
import Navbar from "./components/Navbar"
import Appp from "./pages/Appp"
export default function App() {
  return (
    <div>
      
      <Hero/>
      <Moto/>
      <Aboutus/>
      <Services/>
      {/* <Number/> */}
      <Testimonials/>
      <Appp/>
      <Query/>
      <Footer/>
      <Navbar/>
      {/* <Test/>
      <Test/> */}
     
    </div>
  )
}