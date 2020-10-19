import React from 'react';
//import [  products ] from '../seeds'
import Product from './Product';

const products = 
[
  {
    id: 32,
    title: 'Yellow Pall',
    description: 'On-demand sand castle construction expertise',
    count: 55,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
  {
    id: 234,
    title: 'Paystack Music',
    description: 'Listen to music curated from the paystack team all on spotify',
    count: 200,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
  {
    id: 1223,
    title: 'Flutterwave Express Form',
    description: 'Allow payments using local means from your customers.',
    count: 55,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
  {
    id: 1,
    title: 'Centrons Bonnet',
    description: 'Agricultural Produce are to made from the farm to the local consumers',
    count: 55,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
]
  
function ProductList() {
  return (
    <div className="container">
    { products.map((product) => {
      return (
        <Product key={'product' + product.id} {...product} />
      )
    })}
    </div>
  )
}

export default ProductList;