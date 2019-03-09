import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

function renderImage(file, props){

 if (props.width === undefined){
   var width = "300px";
 }else{
   width=props.width;
 }
 if (props.alt===undefined){
   var alt="";
 }else{
   alt=props.alt;
 }
 return <Img fluid={file.node.childImageSharp.fluid} style={{width: width}} alt={alt}/>
}


const Image = (props) => (
  
  <StaticQuery
   
    query={graphql`
      query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
          edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
        }
      }
      }
      }
    `}
   
    render={({ images }) => renderImage(images.edges.find(image => (image.node.relativePath === props.file)),props) }
  />
  
)

export default Image
