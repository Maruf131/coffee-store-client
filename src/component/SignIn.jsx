
import { use } from 'react';
import { AuthContext } from '../context/AuthProvider';


const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const SignInUsers = { email, password };
        console.log(SignInUsers);


        // Sign in user 
        signInUser(email, password)
            .then(res => {
                console.log(res.user);
                const signInInfo ={
                    email,
                    lastSignInTime: res.user?.metadata?.lastSignInTime
                }
                // update last sign in to the database
                fetch('http://localhost:3000/users',{
                    method: "PATCH",
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(signInInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log('after update patch', data);
                    
                })
            })
            .catch(error => {
                console.log(error.message);

            })

    }
    return (
        <div className="mt-20 card bg-base-100 mx-auto max-w-xl shrink-0 shadow-2xl">
            <div className="card-body p-10">
                <h1 className='text-3xl font-bold font-mono text-center '>Sign IN </h1>
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input w-full" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input w-full" name='password' placeholder="Password" />
                    <button type='submit' className="btn btn-neutral mt-4">Sign IN</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;