import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctor from '../../../images/doctor.png';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image?<img className="img-fluid mb-3" src={`data:image/png;base64,${doctor.image.img}`} alt=""/>
                : <p> no image</p>

            }
            <h4>{doctor.name}</h4>
            <p style={{color:"#1CC7C1"}}> <FontAwesomeIcon icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;