import { Link } from "react-router-dom"
import logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className="logo">
                    <img src={logo} alt="footer logo" />
                
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Possimus architecto et quae accusamus deleniti sunt consectetur,
                     soluta sed quidem nobis.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target='_blank' rel="noreferrer noopener">
                        <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com/" target='_blank' rel="noreferrer noopener">
                        <FaFacebook/>
                    </a>
                    <a href="https://twitter.com/" target='_blank' rel="noreferrer noopener">
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com/" target='_blank' rel="noreferrer noopener">
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/'>Case</Link>
                <Link to='/'>Event</Link>
                <Link to='/'>Community</Link>
                <Link to='/'>FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to='/s'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>ALL RIGHT RESERVED </small>
            <p>omeonu joshua 2023</p>
        </div>
    </footer>
  )
}

export default Footer