import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = ({location}) => (
  <Layout location = {location}>
    <SEO title="404: Aradığınız sayfa bulunamadı" />
    <div className="container">
      <div className="row">
        <h1>Sayfa bulunamadı.</h1>
        <p>Petinizi mest edecek her türlü lezzete ulaşmak için yukarıdaki menüden Kedi veya Köpeği tıklayınız.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
