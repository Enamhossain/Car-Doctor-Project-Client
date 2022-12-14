import React from 'react';

const ServicesCard = ({service}) => {
    const {img,price,title} = service 
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl text-orange-600'>Price:${price}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;