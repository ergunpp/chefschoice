/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')
const PostTemplate = path.resolve('./src/templates/index.js')
const ProductTemplate =path.resolve('./src/templates/ProductDetail/index.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            
             allContentfulMarka(filter:{name:{eq:"Chef's Choice"},node_locale:{eq:"tr-TR"}}){
                edges{
                  node{
                   products: _r_nler{
                          name
                          id
          }
        }
      }
     }
            
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }

       
        
       const products = data.allContentfulMarka.edges[0].node.products
       
        each(products, (index, product ) => {
          
          
          const  path  = `/product-tr/${index.id}`
          
          createPage({
            path,
            component: ProductTemplate,
            context:{
              productId: index.id
            },
          })
        })

        
       
      })
    )
  })
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss'),
        img: path.resolve(__dirname, 'src/static/images')
      },
    },
  })
}