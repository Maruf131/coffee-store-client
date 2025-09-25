import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeesData = ({ coffee, coffees, setCoffees }) => {
    const { photo, price, name, supplier, _id } = coffee;

    const handleDelete = (_id) => {
        // Sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffee = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffee);
                        }

                    })

            }
        });

    }
    return (
        <div>
            <div className='border-2 rounded-xl flex justify-between items-center p-4 md:p-8'>
                <div>
                    <img className='w-full' src={photo} alt="" />
                </div>
                <div>
                    <p>Name: <span className='text-gray-400'>{name}</span></p>
                    <p>Supplier: <span className='text-gray-400'>{supplier}</span></p>
                    <p>Price: <span className='text-gray-400'>{price}</span></p>
                </div>
                <div>
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffee/${_id}`} className="btn join-item">View</Link>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeesData;