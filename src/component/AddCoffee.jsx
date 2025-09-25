import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const price = e.target.price.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const newCoffee = { name, quantity, supplier, taste, price, details, photo };
        console.log(newCoffee);
        // send coffee data to the db
        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    //Sweet alert
                    Swal.fire({
                        title: "Added Successfully !",
                        icon: "success",
                        draggable: true,
                    });
                }
            })


    }

    return (
        <div className='md:p-24 p-4'>
            <div className='md:p-12 text-center space-y-5'>
                <h1 className='text-6xl font-mono text-orange-400'>Add coffee</h1>
                <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, nihil vel. Corrupti culpa eius quibusdam odit tenetur ipsa eaque officiis libero, molestiae nam ratione similique perspiciatis aliquam tempora perferendis asperiores repellat suscipit, distinctio repudiandae, sapiente explicabo assumenda? Minus cum magni, enim distinctio provident amet dolor quibusdam dolorem aliquid iure obcaecati?</p>

                <form onSubmit={handleAddCoffee} className='bg-base-200 border-base-300 rounded-box border px-8 py-14'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                        <fieldset className="fieldset">
                            <label className="label font-bold">Name</label>
                            <input type="text" className="input w-full" name='name' placeholder="Coffee Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label font-bold">Quantity</label>
                            <input type="text" className="input w-full" name='quantity' placeholder="Quantity Name" />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <label className="label font-bold">Supplier</label>
                            <input type="text" className="input w-full" name='supplier' placeholder="Supplier Name" />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <label className="label font-bold">Taste</label>
                            <input type="text" className="input w-full" name='taste' placeholder="Taste Name" />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <label className="label font-bold">Price</label>
                            <input type="text" className="input w-full" name='price' placeholder="Price" />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <label className="label font-bold">Details</label>
                            <input type="text" className="input w-full" name='details' placeholder="Details Name" />
                        </fieldset>

                    </div>
                    <fieldset className="fieldset mt-5">
                        <label className="label font-bold">Photo</label>
                        <input type="text" className="input w-full" name='photo' placeholder="Photo URL" />
                    </fieldset>
                    <input className='btn btn-active w-full mt-5 border-base-300 rounded-box border bg-gray-600' type="submit" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;