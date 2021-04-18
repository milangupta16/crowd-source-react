import React, { useState, useCallback, useMemo ,useEffect} from 'react'
import { useFetch } from '../custom-hooks/useFetch'
// import './indexelements.js';
import { history } from '../_helpers';
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import axios from 'axios';
import config from 'config';
const heading ={
  color: 'blue',
  letterSpacing:" var(--spacing)",
  textTransform: "capitalize",
  lineHeight: "1.25",
  letterSpacing:" var(--spacing)",
  textTransform: "capitalize",
  lineHeight: "1.25",
  marginBottom:" 0.75rem"
}

const productStyle ={
  marginLeft: "10px"
}
 


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//const url = 'http://localhost:8085/getAllItems'

//every time props or state changes, component re-renders
// const calculateMostExpensive = (data) => {
//   return (
//     data.reduce((total, item) => {
//       const price = item.base_price
//       if (price >= total) {
//         total = price
//       }
//       return total
//     }, 0) / 100
//   )
// }

function ShowItems() {
  

const user=localStorage.getItem("name");
  console.log(user)
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    console.log("useffect shwo req")
    axios.get(`${config.apiUrl}/getAllItems`,{params:{user:user}}).then(res => {
      console.log(res && res.data);
      setProducts(res.data);
    })
  }, [])

  return (
    <div>
    <BigList products={products} />
  </div>
  )
  }

// /*
// const ShowItems = ({ url }) => {
//   console.log(url);
//   const { products } = useFetch(url)
//   const [count, setCount] = useState(0)
//   //const [cart, setCart] = useState(0)


//   // const addToCart = useCallback(() => {
//   //   setCart(cart + 1)
//   // }, [cart])

//   // const mostExpensive = useMemo(() => calculateMostExpensive(products), [
//   //   products,
//   // ])
//   return (
//     <div>

//       {JSON.stringify(products)}
//       {/* <h1>Count : {count}</h1>
//       <button className="btn btn-success" className={heading} onClick={() => setCount(count + 1)}>
//         click me
//       </button>
//       {/* <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1> }
//       <h1>Most Expensive : Rs{ }</h1>
//       <BigList products={products} /> */}
//     </div>
//   )
// }

const BigList = React.memo(({ products }) => {
  // useEffect(() => {
  //   console.count('hello from big list');
  // });

  return (
    <section>
      <CardColumns> {products.map((product) => {
        return (
          <SingleProduct key={product.item_id}
            //{...product}
            index={product.item_id}
            item_name={product.item_name}
            base_price={product.base_price}
            description={product.description}
          // addToCart={addToCart}
          ></SingleProduct>
        )
      })}
      </CardColumns> 
    </section>
  )
})

const SingleProduct = ({ index, item_name, base_price, description }) => {
  //let { name, price } = fields
  //base_price = base_price / 100
  //const image = fields.image[0].url
  // console.log(index);

  function postitem() {
    //console.log("Inside Function Call");
    //console.log(index);
    let p = '/additem/?id=' + index;
    history.push(p);
  }
  // useEffect(() => {
  //   console.count('hello from product');
  // });
   return (
    <div style={productStyle} className='product'>

    { <Card bg= "dark" text="white" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt={item_name} />
      <Card.Body>
        <Card.Title>{item_name}</Card.Title>
        <Card.Text >
               {description}
               </Card.Text>
         <Card.Text>
              Rs {base_price}
        </Card.Text>
        <Button variant="primary"  onClick={postitem}>Bid it!!</Button>
      </Card.Body>
    </Card> }
</div>
   )
// return (
//     <article className='product'>
//       <img src="" alt={item_name} />
//       <h4>{item_name}</h4>
//       <p>${base_price}</p>
//       <p>${description}</p>
//       <button onClick={postitem}>Post Your Item</button>
//     </article>
//   )
}
export default ShowItems