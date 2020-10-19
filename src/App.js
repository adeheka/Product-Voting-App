import React from 'react';
import Header from './components/header'
import ProductCard from './components/product-card'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ProductCard
              image=''
              
              count="55"
              descriptionHeader='Higher or Nought'
              description='High Minded or absent-minded? You decide'
              avatar=''           
        />
        <ProductCard 
          image=''
          
          count="55"
          descriptionHeader='Higher or Nought'
          description='High Minded or absent-minded? You decide'
          avatar=''
        />
        <ProductCard 
          image=''
          
          count="55"
          descriptionHeader='Higher or Nought'
          description='High Minded or absent-minded? You decide'
          avatar=''
        />
        <ProductCard
          image=''
          
          count="55"
          descriptionHeader='Higher or Nought'          
          avatar=''
          description="Enjoy broadcasting the fantasy league from the comfort of your house"
        />
      </div>
    </div>
  );
}

export default App;
