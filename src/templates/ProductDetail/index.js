import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from 'components/Layout'
import PackageVariants from 'components/PackageVariants'
import AnalysisTable from 'components/AnalysisTable'
import NutritionTable from 'components/NutritionTable'
import SEO from 'components/seo'


export default class ProductDetail extends React.Component{
    render (){
        const product = get(this.props.data,"contentfulUrunler")
        return (
            <Layout location={1}>
             <SEO title={product.name}/>
              <section className="style-2">
              <div className="container">
            
                
                <div className="col-md-12">
                  <h1>{product.name}</h1>
                      <div className="row">
                          <div className="col-md-8">
                            <img src={product.familyphoto.fluid.src} alt={product.name}/>
                          </div>
                         <div className="col-md-4">
                               <PackageVariants packages={product.packageVariants}/>
                               {product.description !== null && (<div><p>{product.description.description}</p></div>)}
                               <div className="detailSection">
                                    <h2>İçerikler</h2>
                                    <p>{product.ingredients.ingredients}</p>
                            
                               </div>
                               
                               
                            
                         </div>
                     </div>
                </div>
                
                <div className="mt-10 col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <h2>Analiz</h2>
                        <AnalysisTable analysis={product.analytical}/>
                      
                      </div>
                      {product.additives !==null &&(
                          <div className="col-md-6">
                            <h2>Beslenmeye Bağlı İlaveler</h2>
                            <NutritionTable additives={product.additives}/>
                          </div>)}
                    </div>
                </div>
                
               
               
                <div className="col-md-12">
                   <h2>Besleme Tablosu ve Önerileri</h2>
                  <div className="feedingTable" dangerouslySetInnerHTML={{__html:product.feedingTable.feedingTable}}></div>
                </div>
               </div>
              </section>
            </Layout>
            );
    }
}

ProductDetail.propTypes = {
    data: PropTypes.object.isRequired
}
export const query=graphql`
    query productDetailQuery ($productId: String!){
       contentfulUrunler(id: {eq: $productId}){
           id
           name
           description {
               description
           }
           ingredients{
               ingredients
           }
            feedingTable {
              feedingTable
            }
            mainPhoto{
                fixed{
                    width
                    height
                    src
                    srcSet
                }
            }
            familyphoto{
                 fluid{
                    src
                    srcSet
                }
            }
            analytical{
              protein
              fat
              ash
              fibre
              omega6
              omega3
            }
            additives {
              copperSulfate
              vitaminC
              vitaminA
              vitaminE
              vitaminD3
              zincShelate
              zincSulphate
              glukozamin
              manganeseSulphate
              taurine
              kondroitin
              selenyum
              niyasin
              
            }
            packageVariants{
                packageSize
            }
            metabolizableEnergy
            tags{
                slug
            }
           
       }
       
}
`