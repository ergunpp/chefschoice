import React from 'react'
import { StaticQuery, graphql } from 'gatsby'







export default () => (
   <StaticQuery
     query={graphql`
    query {
        images: allFile(filter:{relativePath:{eq: "chef.jpg"}}) {
          edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
        }
      }
      }
      }
`}

  render={data =>(
    
    <div className="parallax-teaser" style={{backgroundImage:`url(${data.images.edges[0].node.childImageSharp.fluid.src})`, height:"400px"}}>
      <div className="teaser-text">
        <div className="container">
          <div className="row">
          <div className="col-md-12 text-center"><i className="fa fa-times-circle" style={{fontSize:"3em", paddingBottom:"30px"}}/></div>
            <div className="col-md-5 ml-auto mr-auto text-center">
              <h1>Şeker, suni renklendirici, aroma ve koruyucular</h1>
              <p className="text-center"><span className="teaser-exclamation">İÇERMEZ!</span></p>
            </div>
            
            
          </div>
          
          
       </div>
      </div>
      
    </div>
  )
    
  }
   
   />
  
     
  
  )
  
