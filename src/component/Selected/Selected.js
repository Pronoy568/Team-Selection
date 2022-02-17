import React from 'react';
import './Selected.css';

const Selected = (props) => {
    const {fullName, img} = props.cart;
    return (
    <div>
        <div className="select-info">
            <div className="select-info-img">
               <img src={img} alt="" />
            </div>
            <p>{fullName}</p>
        </div>
    </div>
    );
};

export default Selected;