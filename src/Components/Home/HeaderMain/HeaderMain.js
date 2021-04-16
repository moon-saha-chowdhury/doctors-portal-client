import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className=" d-flex align-items-center overflow-auto">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat quos recusandae reiciendis ullam officiis?</p>
                <button className="btn btn-info text-white">GET APPOINTMENT</button>

            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;