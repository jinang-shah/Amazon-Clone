import React from 'react'
import './Checkout.css'
import CheckoutItem from './CheckoutItem';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal.js'

function Checkout() {

    const [{basket},dispatch]=useStateValue(); 

    return (
        <div className="checkout">
            <div className="checkout_left">
                 <img 
                     className="checkout_ad" 
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Reshma_LA/SUMMER_FEST-2021/Stripe_1500x150_002.gif" 
                     alt="" 
                />

                {basket?.length === 0 ?(
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket is Empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping Basket</h2>

                        {
                            basket.map((item)=>(
                                <CheckoutItem 
                                    id={item.id}
                                    title={item.title} 
                                    price={item.price} 
                                    ratings={item.ratings} 
                                    image={item.image} 
                                />
                            ))
                        }
                    </div>
                )}


            </div>
            <div className="checkout_right">
                
                  <Subtotal /> 
            </div>
        </div>
    )
}

export default Checkout
