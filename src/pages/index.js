import React from 'react'
import Layout from 'components/Layout'
import SEO from '../components/seo'
import Splash from 'components/Splash'
import Teaser from 'components/Teaser'
import BrandPhilosophy from 'components/BrandPhilosophy'
import Instagram from 'components/Instagram'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Chef's Choice Gurme Petler için Yaş Mama" keywords={[`pet`, `kedi`, `köpek`,`ıslak mama`,`yaş mama`,`konserve`]} lang="tr" />
      
      <Splash/>
      
      
      
      
     <BrandPhilosophy/>
    <Teaser/>
    <div className='container'>
           <Instagram />
      </div>
  </Layout>
)

export default IndexPage
