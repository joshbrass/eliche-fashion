import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data.jsx'
import Card from '../ui/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values imag" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title='Styles Tips and Inspiration'></SectionHead>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime non praesentium officiis aspernatur assumenda nulla beatae alias.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className='values__value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>

                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Values