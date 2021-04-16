import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const AppointmentDataTable = () => {
    const[allAppointments, setAllAppointments] = useState([]);

    useEffect(()=>{
        fetch('https://glacial-ridge-71587.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAllAppointments(data))
    },[])
    return (
        <div style={containerStyle}  className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>

            </div>
            <div className="col-md-10 me-auto">
            <table  className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  allAppointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.weight}KG</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        </div>
    );
};

export default AppointmentDataTable;