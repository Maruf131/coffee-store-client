
import { useLoaderData } from 'react-router';
import CoffeesData from './CoffeesData';
import { useState } from 'react';

const Home = () => {
    const initialCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffee);
    
    
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'> 
                {
                    coffees.map(coffee => <CoffeesData key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee ={coffee}></CoffeesData>)
                }
            </div>
        </div>
    );
};

export default Home;