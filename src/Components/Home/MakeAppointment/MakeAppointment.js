import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment mx-5 ">
            <div className="container ">
                <div className="row mx-5">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid pt-5" src={doctor} alt="" />

                    </div>
                    <div className="col-md-7 py-5 appointment-content">
                        <h5 style={{color:"#1CC7C1"}}>APPOINTMENT</h5>
                        <h1 className="my-3 text-white">Make an appointment <br/>Today</h1>
                        <p className="my-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente error optio ea libero adipisci quibusdam eos. Corrupti, velit aliquam!</p>

                        <button className="btn btn-info text-white">Learn More</button>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;