import React  from 'react'
import './CheckoutItem.css'
import { useStateValue } from './StateProvider'

function CheckoutItem({id,title,price,ratings,image}) {

     const [{basket},dispatch]=useStateValue(); 

     const removeFromBasket=()=>{
        dispatch({
             type:'REMOVE_FROM_BASKET',
             id:id
         })
     }

    return (
        <div className="checkoutItem">
            
            <img className="checkoutItem_image" src={image} alt="" />
            
            <div className="checkoutItem_info">

                  <p className="checkoutItem_info_title">{title} </p>

                  <p className="checkoutItem_info_price ">
                      <small>$</small>
                      <strong>{price}</strong>
                  </p>

                  <div className="checkoutItem_rating">
                      { Array(ratings)
                        .fill()
                        .map((_,i)=>(<p>🌟</p>))}   
                  </div>
                  <div className="checkoutItem_button">
                     <button className="checkoutItem_info_button" onClick={removeFromBasket}>Remove from Basket</button>
                  </div>
                  
            </div>
        </div>
    )
}

export default CheckoutItem