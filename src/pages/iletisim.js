import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'



  const ContactUs = ({location}) =>{
    return (
       <Layout location ={location}>
        <SEO title="İletişim - Chef's Choice" lang="tr"/>
         <div className="container">
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-md-8">
                <h1>İletişim</h1>
                <p>Sorularınız için aşağıdaki iletişim formu ile bize ulaşabilirsiniz. </p>
                <ContactForm/>
              </div>
              <div className="col-md-4">
                <h1>Atlaspet Pet Ürünleri Pazarlama ve Ticaret A.Ş.</h1>
                <p><span className="light-font">Göktürk Cad. No: 2 Suvenue Sitesi D Blok D:7<br/>Göktürk, Eyüp<br/>İstanbul<br/>Türkiye</span></p>
                <p><span className="heavy-font">E:  </span><span className="light-font">info@chefschoice.com.tr</span><br/><span className="heavy-font">T:  </span><span className="light-font">+90 (212) 807 01 40</span></p>
              </div>
            
            </div>
           
          </div>
          </div>
          
            <Map id="myMap"
                options={{
                  center: { lat: 41.176848,  lng: 28.889999 },
                  zoom: 14
                }}
                onMapLoad={map => {
                  var marker = new window.google.maps.Marker({
                    position: { lat: 41.176848, lng: 28.889999 },
                    map: map,
                    title: 'Atlaspet Pet Ürünleri Paz. ve Tic. A.Ş.'
                  });
                }}
      />
      
          
          
       </Layout>
)}



export default ContactUs
