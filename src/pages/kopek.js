import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import SEO from 'components/seo'
import SplashDog from 'components/SplashDog'


export default ({location}) =>(
    <StaticQuery
      query={graphql`
        query  {
          contentful: allContentfulMarka(filter:{name:{eq:"Chef's Choice"},node_locale:{eq:"tr-TR"}}){
               edges{
                node{
                  products: _r_nler{
                    name
                    id
                    isDogFood
                    category{
                        id
                    }
                    mainPhoto{
                        sizes (maxWidth:400){
                            ...GatsbyContentfulSizes
                        }
                    }
                    
                  }
                }
              }
             }}

      `}
      
      render = {data => (
        <Layout location={location}>
         <SEO title="Köpek Yaş Mamalar - Chef's Choice" lang="tr" />
         <SplashDog/>
          <section className="style-2">
          <div className="container">
          <h1  className="section-heading text-center">Köpek Menümüz </h1>
           <p>Açık denizlerden sağlanmış deniz mahsülleri ve gerçek taze etten oluşan tarifler, yararlı sebze ve şifalı otlarla zenginleştirilerek buharda, besin değerini ve tazeliğini kaybetmeden üretilmiştir. </p> 
            <div className="row">
              <div className="col-md-12">
                
                  <Gallery  elements={data.contentful.edges[0].node.products.filter(product=>product.isDogFood===true)} filter="*"/>
                
              </div>
          </div>
          </div>
          </section>
        
        </Layout>
      )
          
      }

    />
    
    )
