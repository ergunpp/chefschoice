import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import SEO from 'components/seo'
import SplashCat from 'components/SplashCat'



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
                    tags{
                      slug
                    }
                    
                  }
                }
              }
             }}

      `}
      
      render = {data => (
        
        <Layout location={location}>
          <SEO title="Kedi Yaş Mamalar - Chef's Choice" lang="tr" />
          <SplashCat/>
           <section className="style-2">
            <div className="container">
              <h1  className="section-heading text-center">Kediler için Menümüz </h1>
              <p>Gurme kedileri her gün farklı bir lezzetle şımartmak için dikkatle seçilmiş geniş bir menü. Taze balık, et ve kümes hayvanları ve doğal içerikler ile özenle hazırlanmış, ustaca pişirilmiş bir lezzet festivali.</p> 
              <div className="row">
                <div className="col-md-12">
                  <Gallery elements={data.contentful.edges[0].node.products.filter(product =>product.isDogFood===false)} filter="*"/>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      
          
      )}

    />
    
    )
