import React from 'react'
import {ReactComponent as Caret} from '../caret-up.svg'
function Product({ id, image, url, style, count, title, description, avatar, onVote }) {
  function handleUpVote() {
    onVote(id)
  }
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} style={style} alt=""/>
      </div>      
      <div className="product-deets">
        <div className="vote-count">
          <p>
          <span>
            <a href={url} onClick={handleUpVote}>
              <span className="caret"></span>
              <Caret style={{ height: '50px', width: '50px', fill: 'lightBlue' }} />
            </a>
          </span>
          {count}
          </p>
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