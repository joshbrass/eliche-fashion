import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'


const home = () => {
  return (
    <div>
      <MainHeader />
      <Values/>
      <Programs />
      <Testimonials/>
      <FAQs/>
      
      
    </div>
  )
}

export default home