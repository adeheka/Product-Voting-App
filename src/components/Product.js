import React from 'react'
import Caret from '../caret-up.svg'
function Product({ id, image, style, count, title, description, avatar, onVote }) {
  function handleUpvote() {
    onVote(id)
  }
  return (
    <div className="product-card">
      <div className="product-image"><img src={image} style={style} alt=""/></div>      
      <div className="product-deets">
        <div className="vote-count">
          <span>
            <a onClick={handleUpvote}>
              <img src={Caret} style={{ height: '50px', width: '50px', color: 'blue' }} alt="" />
            </a>
          </span>
          {count}
        </div>
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