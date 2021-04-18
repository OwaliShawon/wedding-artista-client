import React from 'react';
import antor from '../../../images/antor.jpeg';
import symoon from '../../../images/symoon.jpeg';
import owali from '../../../images/owali.jpeg';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Owali',
        from: 'Donia',
        img: owali
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Antor',
        from: 'Narayangonj',
        img: antor
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Symoon',
        from: 'Cumilla',
        img: symoon
    }
]

console.log(testimonialData);

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Clients <br /> Says </h1>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;