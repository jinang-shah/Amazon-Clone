export const initialState={
    basket:[{
        title :"OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage) ",
        price : 5499,
        ratings :5,
        id : 99,
        image: "https://m.media-amazon.com/images/I/41unZp1B15L.jpg "
    }],
    user:null
}

export const getBasketTotal=(basket)=>
   basket?.reduce((amount,item)=> item.price+ amount,0);

const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket,action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index =state.basket.findIndex(
                (basketItem)=>basketItem.id === action.id
            );
            let newBasket=[...state.basket];

            if(index >= 0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in basket`
                )
            }

            return {
                ...state,
                basket:newBasket
            }

        default:
            return state;
    }
}

export default reducer;