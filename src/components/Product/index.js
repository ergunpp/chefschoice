import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Link from 'components/Link'


const Product = (props) => (
                <div className="card">
                 
                  <div className="card-media">
                  
                   
                    <img className="card-img" src={props.element.mainPhoto.sizes.src} alt={props.element.name} />
                    
                  </div>
                  <div className="card-caption">
                   
                    <i className="fa fa-cutlery" style={{color:"#fff"}}/><br/>
                     <Link to={`/product-tr/${props.element.id}`} className="link">
                      <h2>{props.element.name}</h2>
                   </Link>
                  </div>
                 
                </div>
    
    )

export default Product