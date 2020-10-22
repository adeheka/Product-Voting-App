import React, { Component } from 'react';
import Product from './Product';

//images assets
import Helen from '.././images/avatars/helen.jpg'
import Justen from '.././images/avatars/justen.jpg';
import Veronika from '.././images/avatars/veronika.jpg';
import Molly from '.././images/avatars/molly.png';

//products images
import prdOne from '.././images/products/image-aqua.png'
import prdTwo from '.././images/products/image-rose.png'
import prdThree from '.././images/products/image-yellow.png'
import prdFour from '.././images/products/image.png'

const products = [
  {
    id: 32,
    title: 'Yellow Pall',
    description: 'On-demand sand castle construction expertise',
    count: 34,
    url: '#',
    image: prdOne,
    avatar: Helen
  },
  {
    id: 234,
    title: 'Paystack Music',
    description: 'Listen to music curated from the paystack team all on spotify',
    count: 500,
    url: '#',
    image: prdTwo,
    avatar: Justen,
  },
  {
    id: 1223,
    title: 'Flutterwave Express Form',
    description: 'Allow payments using local means from your customers.',
    count: 5,
    url: '#',
    image: prdThree,
    avatar: Veronika,
  },
  {
    id: 1,
    title: 'Centrons Bonnet',
    description: 'Agricultural Produce are to made from the farm to the local consumers',
    count: 155,
    url: '#',
    image: prdFour,
    avatar: Molly,
  },
]
const sortedProducts = products.sort((a, b) => (
  b.count - a.count
));
class ProductList extends Component {
  state = {
      products: [],
  };
  componentDidMount() {
    this.setState({
      products: sortedProducts,
    })
  }
  upVote = (id) => {
    const products = this.state.products;
    products.forEach(product => {
      if (product.id === id) {
          product.count = product.count + 1;
      }
    });
    this.setState({
      products: products,
    })
  }
  render() {
    const { products } = this.state;
    return (
      <div className="container">
        { products.map((product) => {
          return (
            <Product key={'product' + product.id} {...product} onVote={this.upVote} />
          )
        })}
      </div>
    )
  }
}
export default ProductList;