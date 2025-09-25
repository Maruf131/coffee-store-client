import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router';
import CoffeesData from './CoffeesData';

const CoffeeDetails = () => {
    const Navigate = useNavigate();
    const coffeeDetails = useLoaderData();
    const { photo, price,name, supplier,details } = coffeeDetails;

    return (
        <div className='p-4'>
            <div className="hero min-h-screen border-2 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        className='w-[300px]'
                        src={photo}
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Coffee Details !</h1>
                        <h4 className="py-2">Name : {name}</h4>
                        <h4 className="py-2">Supplier: {supplier}</h4>
                        <h4 className="py-2">Details: {details}</h4>
                        <h4 className="py-2">Price : {price}</h4>
                        <button onClick={() => Navigate(-1)} className="btn btn-neutral">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;