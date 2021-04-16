import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const[allDoctors, setAllDoctors] = useState([]);

    useEffect(()=>{
        fetch('https://glacial-ridge-71587.herokuapp.com/allDoctors')
        .then(res => res.json())
        .then(data => setAllDoctors(data))
    },[])
    return (
        <section className="doctors">
            <div className="container">
                <h5 style={{color:"#1CC7C1"}} className="text-center mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        allDoctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;