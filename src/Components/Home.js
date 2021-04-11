import React,{useEffect,useState} from 'react'
import './Home.css'
import Product from './Product'

function Home() {

    const [items, setitems] = useState([]);

    const fetchItems=async()=>{
        const data=await fetch("https://fakestoreapi.com/products/")
        const items=await data.json()
        setitems(items)
        console.log("items :",items)
    }  
  
    useEffect(()=>{
        fetchItems();
    },[])

    return (
        <div className="home">
             <div className="home_container">
                 <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB660400564_.jpg" />
             </div>
             
             <div className="home_items">
                 <div className="home_row">
                      <Product
                          title ="HP 15 db1069AU 15.6-inch Laptop (3rd Gen Ryzen 3 3200U/4GB/1TB HDD/Windows 10/MS Office/Radeon Vega 3 Graphics), Jet Black"
                          price = {5549}
                          ratings ={5}
                          id={95}
                          image= "https://images-eu.ssl-images-amazon.com/images/I/41U9PUreBdL._AC_US160_FMwebp_QL70_.jpg"
                       />
                      <Product
                          title ="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback – 11 April 2017"
                          price = {49}
                          ratings ={4}
                          id={96}
                          image= "https://m.media-amazon.com/images/I/51wOOMQ+F3L._AC_SY200_.jpg "
                       />
                 </div>
                 <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/Header/WFH_1500x350.gif" />
                 <div className="home_row">
                      <Product
                          title ="(Renewed) JBL GO Portable Wireless Bluetooth Speaker with Mic (Pink) "
                          price = {110}
                          ratings ={5}
                          id={97}
                          image= "https://m.media-amazon.com/images/I/81ViL1NpS0L._AC_UL320_.jpg "
                       />
                       <Product
                          title ="(Renewed) Blue Yeti USB Microphone, Midnight Blue"
                          price = {2999}
                          ratings ={5}
                          id={98}
                          image= " https://m.media-amazon.com/images/I/71gUogqnbrL._AC_UL320_.jpg"
                       />
                       <Product
                          title ="OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage) "
                          price = {5499}
                          ratings ={5}
                          id={99}
                          image= "https://m.media-amazon.com/images/I/41unZp1B15L.jpg "
                       />
                 </div>
                 <div className="home_row">
                       <Product
                          title ="Sony Bravia 101.6cm (40 Inches) Full HD LED TV With Fire TV Stick (KLV-40R252G) (Black) | Smart Combo "
                          price = {1299}
                          ratings ={5}
                          id={100}
                          image= "https://m.media-amazon.com/images/I/5122PFSFmDL.jpg "
                       />
                 </div>
                 <div className="home_row">
                 {
                     items.map((item)=>{
                         if(item.id < 4)
                           return  <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} ratings={4} />
                     })
                 }
                 </div>
                 <div className="home_row">
                 {
                     items.map((item)=>{
                         if(item.id > 4 && item.id<8)
                           return  <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} ratings={4} />
                     })
                 }
                 </div>
                 <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/February/GGD/Teaser/Price-Drop/D20521724_IN_PC_Laptops_Grand-Gaming-Days-1500.jpg" />
                 <div className="home_row">
                 {
                     items.map((item)=>{
                         if(item.id > 8 && item.id<12)
                           return  <Product key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} ratings={3} />
                     })
                 }
                 </div>
                 <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />

             </div>

        </div>
    )
}

export default Home


//https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg