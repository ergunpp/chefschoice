import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function ImageList (props){
    
    const elements=props.elements.edges
    const childElements = elements.map(element=>
    
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 d-inline-block" key={element.id}><a href={"https://instagram.com/p/"+element.node.id} target="_blank" rel="noopener noreferrer"><Img fixed={element.node.localFile.childImageSharp.fixed} alt={element.node.caption} /></a></div>
    )
    return childElements
}






export default () =>(
    <StaticQuery 
    query={graphql`
      query {
          allInstaNode(limit:6, sort:{fields:timestamp,order: DESC}) {
            edges {
              node {
                id
                likes
                comments
                mediaType
                preview
                original
                timestamp
                caption
                localFile {
                  childImageSharp {
                    fixed(width: 266) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                
                
               }
            }
          }
        }
    `}
    render = {data=>(
      <section className="style-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
               <h1>Kampanya ve yarışmalardan haberdar olmak için instagram sayfamızı takip edin.</h1>
              
                     
                    <ImageList elements={data.allInstaNode}/>

             
            </div>
           </div>
        </div>
      </section>
    
    
    
    )
        
        
        
        
        
    }
    />
    )
