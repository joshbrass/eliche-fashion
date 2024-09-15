import { Link } from "react-router-dom"
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
   <header className="main__header">
    <div className="container main__header-container">
      <div className="main__header-left">
        <h4>Elevate your wordrobe, elevate your life</h4>
        <h1>Where timeless elegance meets modern design</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Praesentium delectus dolorem ex, ad nam quae.
        </p>
        <Link to="/plans" className="btn lg">Get Started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-image">
          <img src={Image} alt="HeaderImage" />
        </div>
      </div>
      
  
     </div>
   </header>
  )
}

export default MainHeader