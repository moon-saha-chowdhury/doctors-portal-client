import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="featured-service p-5 pb-md-5  my-5">
            <div className="container mt-5">
                <div className="row mt-5 ">
                    <div className="col-md-5 mb-5 m-md-0">
                        <img className="img-fluid" src={featured} alt="" />

                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, On Your Terms</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam animi voluptatibus necessitatibus tempora illo earum ullam quas. Ad deserunt consectetur architecto voluptate, aliquid sapiente quibusdam ipsa a! Sit, officia ipsum.
                        </p>
                        <button className="btn btn-info text-white">Learn More</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default FeaturedService;