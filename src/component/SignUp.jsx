import React, { use } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

        // user signup
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const userProfile ={
                    email,
                    ...rest,
                    creationTime: res.user?.metadata?.creationTime,
                    lastSignInTime: res.user?.metadata?.lastSignInTime,
                }
                // userProfile
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Account is created !",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })

            })
            .catch((error) => {
                console.log(error.message);

            });


    }

    return (
        <div className="mt-20 card bg-base-100 mx-auto max-w-xl shrink-0 shadow-2xl">
            <div className="card-body p-10">
                <h1 className='text-3xl font-bold font-mono text-center '>Sign Up </h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input w-full" name='name' placeholder="Your Name" />
                    <label className="label">Address</label>
                    <input type="text" className="input w-full" name='address' placeholder="Your Address" />
                    <label className="label">Phone</label>
                    <input type="text" className="input w-full" name='phone' placeholder="Phone Number" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input w-full" name='photo' placeholder="Photo url" />
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" name='password' placeholder="Password" />
                    <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;