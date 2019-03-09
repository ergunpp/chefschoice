import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import { siteMetadata } from '../../../gatsby-config'
import 'scss/theme.scss'
import Footer from 'components/Footer'

class Layout extends React.Component {
 

  render() {
    const { children } = this.props
    
    return (
      
      <div>
                <Header title={siteMetadata.title} {...this.props}/>
                { children }
           <div className="site-footer navbar-fixed-bottom">
              <Footer/>
           </div>
     </div>
        
      
    )
  }
}

Layout.propTypes = {
  /*children: PropTypes.func.isRequired,*/
  location: PropTypes.object.isRequired,
};
export default Layout

