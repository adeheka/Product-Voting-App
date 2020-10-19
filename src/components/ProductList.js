import React from 'react';
//import [  products ] from '../seeds'
import Product from './Product';

const products = [
  {
    id: 32,
    title: 'Yellow Pall',
    description: 'On-demand sand castle construction expertise',
    count: 34,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
  {
    id: 234,
    title: 'Paystack Music',
    description: 'Listen to music curated from the paystack team all on spotify',
    count: 500,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
  {
    id: 1223,
    title: 'Flutterwave Express Form',
    description: 'Allow payments using local means from your customers.',
    count: 5,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
  {
    id: 1,
    title: 'Centrons Bonnet',
    description: 'Agricultural Produce are to made from the farm to the local consumers',
    count: 155,
    url: '#',
    //votes: generateVoteCount(),
    avatar: '/images/avatar/daniel.jpg'
  },
]
const sortedProducts = products.sort((a, b) => (
  b.count - a.count
));
function ProductList() {
  return (
    <div className="container">
    { sortedProducts.map((product) => {
      return (
        <Product key={'product' + product.id} {...product} />
      )
    })}
    </div>
  )
}

export default ProductList;