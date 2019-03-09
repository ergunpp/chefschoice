import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import "./style.css"


const Splash = () =>(
    <StaticQuery
   
    query={graphql`
      query {
        images: allFile(filter:{relativePath:{eq: "main-photo.jpg"}}) {
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
           
                <div className="parallax-div" style={{backgroundImage:`url(${images.edges[0].node.childImageSharp.fluid.src})`, "background-size": "100% 100%"}}/>
                
               
               
   
   
   )}
      
    />
    
    )
    export default Splash