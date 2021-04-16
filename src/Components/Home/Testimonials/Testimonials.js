import React from 'react';
import willson from '../../../images/willson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : willson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]


const Testimonials = () => {
    return (
        <div>
             <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 style={{color:"#1CC7C1"}} className="text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck row mt-5">
                    {
                        testimonialData.map(testimonial => 
                        <div className="col-md-4"><TestimonialCard testimonial={testimonial} key={testimonial.name}/></div>)
                    }
                </div>
           </div>
       </section>
            
        </div>
    );
};

export default Testimonials;