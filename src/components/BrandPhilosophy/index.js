import React from 'react'
import Image from 'components/image'
import './style.scss'

const BrandPhilosophy = () =>{
    return(
        <section className="no-padding padding-on-small">
        <div className="container">
          <div className="row">
           
            <div className="col-md-12 ml-auto col-lg-5 col-lg-offset-1">
                <h1 className="section-heading text-center">Her damak zevkine uygun lezzetler</h1>
                <p className="text-justify">İster <i>soslu</i>, ister <i>ezme</i> olarak dört ayaklı dostlarımızı mest edecek mutlaka bir seçenek var. <strong>Karides, ton balığı, somon</strong> ve <strong>midye</strong> gibi deniz ürünlerinden <strong>bıldırcın, ördek</strong> gibi seçkin kanatlı etlerine, ya da klasik lezzetleri tercih edenler için <strong>tavuk, sığır, dana ve kuzu etli</strong> öğünlerden oluşan en zengin menü çeşitliliği. Üstelik şeker, suni tatlandırıcılar, renklendiriciler ve koruyucular kullanmadan hazırlanmış insan tüketimine bile uygun.   </p>
            </div>
            <div className="col-md-12 col-lg-5 mr-auto image-wrapper">
             <Image file="LN170318-6.jpg" alt="Dorota Dylka 69581 photo" width="100%"/>
              
              </div>
          </div>
        </div>
      </section>
        
        
        )
}

export default BrandPhilosophy