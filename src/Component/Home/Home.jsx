import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData()

    const [cart,setCart]=useState([])

    const handleAddToCart=tshirt=>{
        const exist=cart.find(pd=>pd._id===tshirt._id)
        if(exist){
        toast('you have already added this product');
        }
        else{
            const newcart=[...cart,tshirt];
            setCart(newcart);
        }

      
    }
    const handleRemoveFromCart = (id) =>{
        const remaining=cart.filter(pd=>pd._id !==id)
        setCart(remaining)
      
     }
   
    return (
        <div className='home-container'>
        <div className='tshirts-container'>
        {
            tshirts.map(tshirt=><TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}/>)
          }
        </div>

        <div>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
        </div>
        </div>
    );
};

export default Home;