import React from 'react';
import Selected from '../Selected/Selected.js'
import './Total.css';

const Total = (props) => {
    const carts = props.cart;


    const totalSalary = carts.reduce( (sum,cart)=> sum + cart.Salary ,0);

    return (
    <div>
        <div>
            <h2>Selected : {props.cart.length}</h2>
            <h2>TotalSalary : {totalSalary}</h2>
        </div>
        <div className="selected-flex">
            {
            carts.map((cart)=> <Selected cart={cart} key={cart.id}></Selected>)
            }
        </div>
    </div>
    );
};

export default Total;