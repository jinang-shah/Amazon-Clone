import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({title,image,ratings,id,price}) {

    const[{basket},dispatch]=useStateValue();

    console.log("Basket :",basket)

    const addToBasket =()=>{
        dispatch({
          type:"ADD_TO_BASKET",
          item:{
              id:id,
              title:title,
              price:price,
              ratings:ratings,
              image:image
          }
        });  
    }

    return (
        <div className="product">
            <div className="product_info">
                  <p>
                      {title}
                  </p>
                  <p className="product_price">
                      <small>$</small>
                      <strong>{price}</strong>
                  </p>
                  <div className="product_rating">
                      { Array(ratings)
                        .fill()
                        .map((_,i)=>(<p>🌟</p>))}
                      
                  </div>
            </div>     
                  <img src={image} />
                  <button onClick={addToBasket}>Add to Cart</button>
            

        </div>
    )
}

export default Product
