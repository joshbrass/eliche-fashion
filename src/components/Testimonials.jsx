import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../ui/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data.jsx"
import { useState } from "react"





const Testimonials = () => {
    const [index, setindex] = useState(0)
    const {name,  quote, job, avatar} = testimonials[index]

    const prevTestimonialHandler = () => {
        setindex(prev => prev - 1);

        if(index <= 0) {
            setindex(testimonials.length - 1);
        }

       


    }

    const nextTestimonialHandler = () => {
        setindex(prev => prev + 1);

        if(index >= testimonials.length - 1){
            setindex(0);
        }

    }


  return (
    <section className="Testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className='testimonials__head'/>
            <Card className='testimonial'>
            <div className="testimonial__avater">
                <img src={avatar} alt={name} />
            </div>
            <p className="testimonial__quote">
                {
                    `"${quote}"`
                }
            </p>
            <h5>{name}</h5>
            <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/>
                </button>
                <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials