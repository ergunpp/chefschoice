import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Image from 'components/image'

const Footer = () =>{
  return(<div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-3" style={{"vertical-align":"middle"}}><Image file="CC-logo-web3.png" width="120px"/></div>
              <div className="col-sm-6 col-xs-3">
                <div className="social"><a href="http://facebook.com/ChefsChoiceTR" className="fa fa-facebook" aria-label="Chef's Choice Facebook" target="_blank" rel="noopener noreferrer"></a><a href="http://instagram.com/chefschoicetr" className="fa fa-instagram" aria-label="Chef's Choice Instagram" target="_blank" rel="noopener noreferrer"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

export default Footer