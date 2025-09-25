import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, quantity, supplier, taste, price, details, photo } = useLoaderData();
    const handleUpdateCoffee = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const price = e.target.price.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const UpdatedCoffee = { name, quantity, supplier, taste, price, details, photo };
        console.log(UpdatedCoffee);

        // send updated coffee to the database
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee Updated Successfully !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }
    return (
        <div>
            <div className='md:p-24 p-4'>
                <div className='md:p-12 text-center space-y-5'>
                    <h1 className='text-6xl font-mono text-orange-400'>Update Coffee</h1>

                    <form onSubmit={handleUpdateCoffee} className='bg-base-200 border-base-300 rounded-box border px-8 py-14'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <fieldset className="fieldset">
                                <label className="label font-bold">Name</label>
                                <input type="text" className="input w-full" name='name' defaultValue={name} placeholder="Coffee Name" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label font-bold">Quantity</label>
                                <input type="text" className="input w-full" name='quantity' defaultValue={quantity} placeholder="Quantity Name" />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <label className="label font-bold">Supplier</label>
                                <input type="text" className="input w-full" name='supplier' defaultValue={supplier} placeholder="Supplier Name" />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <label className="label font-bold">Taste</label>
                                <input type="text" className="input w-full" name='taste' defaultValue={taste} placeholder="Taste Name" />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <label className="label font-bold">Price</label>
                                <input type="text" className="input w-full" name='price' defaultValue={price} placeholder="Price" />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <label className="label font-bold">Details</label>
                                <input type="text" className="input w-full" name='details' defaultValue={details} placeholder="Details Name" />
                            </fieldset>

                        </div>
                        <fieldset className="fieldset mt-5">
                            <label className="label font-bold">Photo</label>
                            <input type="text" className="input w-full" name='photo' defaultValue={photo} placeholder="Photo URL" />
                        </fieldset>
                        <input className='btn btn-active w-full mt-5 border-base-300 rounded-box border bg-gray-600' type="submit" value="Update Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;