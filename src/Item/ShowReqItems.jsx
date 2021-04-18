import React, { useState, useCallback, useMemo,useEffect } from 'react'
import axios from 'axios';
import config from 'config';
import { Link } from 'react-router-dom';
import { useFetch } from '../custom-hooks/useFetch'
// import './indexelements.js';
import { history } from '../_helpers';
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import {itemActions} from '../_actions';
import { itemService } from '../_services';
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
 

const ShowReqItems = () => {
  const user=localStorage.getItem("name");

  const [products, setProducts] = useState([]);


  
  
  useEffect(() => {
    console.log("useffect shwo req")


    axios.get(`${config.apiUrl}/getUserReqItems`,{params:{user:user}}).then(res => {
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

  function buyitem() {
    //console.log("Inside Function Call");
    //console.log(index);
    let p = '/buyitem/?id=' + index;
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
        <Button variant="primary"  onClick={buyitem}>See All responses!!</Button>
      
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
export default ShowReqItems


































// import React, { useState, useCallback, useMemo, useEffect } from 'react'
// import { useFetch } from '../custom-hooks/useFetch'
// import config from 'config';
// import {getreqitems} from '../_services/item.service'
// import axios from 'axios';

// import { history } from '../_helpers';
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import CardColumns from "react-bootstrap/CardColumns";
// import { useDispatch, useSelector } from 'react-redux';
// import { itemActions } from '../_actions';
// import { userActions } from '../_actions';

// const heading ={
//   color: 'blue',
//   letterSpacing:" var(--spacing)",
//   textTransform: "capitalize",
//   lineHeight: "1.25",
//   letterSpacing:" var(--spacing)",
//   textTransform: "capitalize",
//   lineHeight: "1.25",
//   marginBottom:" 0.75rem"
// }

// const productStyle ={
//   marginLeft: "10px"
// }
 


// function ShowReqItems() {
  
//   const dispatch = useDispatch();
// const user=localStorage.getItem("name");
//   console.log(user)
//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     console.log("useffect shwo req")
//     axios.get(`${config.apiUrl}/getUserReqItems`,{params:{user:user}}).then(res => {
//       console.log(res && res.data);
//       setProducts(res.data);
//     })
//   }, [])

//   return (
//     <div>
//       {JSON.stringify(products)}
//       </div>
//   )
  
//   // const { products } =   dispatch(itemActions.getreqitems(user));
//   const [count, setCount] = useState(0);
//   const BigList = React.memo(({ products }) => {

//     return (
//       <section>
//         <CardColumns> {products.map((product) => {
//           return (
//             <SingleProduct key={product.item_id}
//               //{...product}
//               index={product.item_id}
//               item_name={product.item_name}
//               base_price={product.base_price}
//               description={product.description}
//             // addToCart={addToCart}
//             ></SingleProduct>
//           )
//         })}
//         </CardColumns> 
//       </section>
//     )
//   })
  
//   const SingleProduct = ({ index, item_name, base_price, description }) => {
  
//     function postitem() {
    
//       let p = '/additem/?id=' + index;
//       history.push(p);
//     }
  
//      return (
//       <div style={productStyle} className='product'>
  
//       { <Card bg= "dark" text="white" style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" alt={item_name} />
//         <Card.Body>
//           <Card.Title>{item_name}</Card.Title>
//           <Card.Text >
//                  {description}
//                  </Card.Text>
//            <Card.Text>
//                 Rs {base_price}
//           </Card.Text>
//           <Button variant="primary"  onClick={postitem}>Bid it!!</Button>
//         </Card.Body>
//       </Card> }
//   </div>
//      )
  
//   }
// }

// export default ShowReqItems


  

 


