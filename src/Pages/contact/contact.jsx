import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'


import './contact.css'

const contact = () => {
  return (
    <div>
      <Header title="Get in Touch" image={HeaderImage}>

        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quia maxime, sed facilis officiis 
         architecto minus deleniti perspiciatis aperiam, porro enim repudiandae velit rerum harum, 
        assumenda et reprehenderit libero explicabo quisquam.

      </Header>

      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:joshuaomeonu@gmail.com" target='_black' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://web.facebook.com/omeonu.joshua"  target='_black' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+2349061924732" target='_black' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>



    </div>
  )
}

export default contact