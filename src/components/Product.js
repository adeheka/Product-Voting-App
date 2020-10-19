import React from 'react'

function Product({ id, image, style, count, title, description, avatar }) {
  return (
    <div className="product-card">
      <div className="product-image"><img src={image} style={style} alt=""/></div>      
      <div className="product-deets">
        <div className="vote-count">{count}</div>
        <div className="product-description">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="submission-details">
          <p>Submitted by: 
            <span><img src={avatar} alt="" /></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product;