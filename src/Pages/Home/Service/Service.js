import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {_id, name, img, price, description} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt=""></img>
            <h4>{name}</h4>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(_id)}>Book:{name}</button>
        </div>
    );
};

export default Service;