import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import "./style.css"



const SplashCat = () =>(
    <StaticQuery
   
    query={graphql`
      query {
        images: allFile(filter:{relativePath:{eq: "cc-cat-splash.jpg"}}) {
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
   
   render = {({images}) =>(
           
                <div className="parallax-div-cat" style={{backgroundImage:`url(${images.edges[0].node.childImageSharp.fluid.src})`}}/>
                
               
               
   
   
   )}
      
    />
    
    )
    export default SplashCat