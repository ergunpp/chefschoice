import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import "./style.css"



const SplashDog = () =>(
    <StaticQuery
   
    query={graphql`
      query {
        images: allFile(filter:{relativePath:{eq: "cc-dog-splash.jpg"}}) {
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
           
                <div className="parallax-div-dog" style={{backgroundImage:`url(${images.edges[0].node.childImageSharp.fluid.src})`}}/>
                
               
               
   
   
   )}
      
    />
    
    )
    export default SplashDog