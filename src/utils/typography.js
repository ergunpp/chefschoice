import Typography from 'typography'

const typography = new Typography({
    
    headerFontFamily: ['Allura','cursive'],
    bodyFontFamily: ['Open Sans','sans serif'],
    
    googleFonts: [
        {
            name: 'Allura',
            styles: ['400'],
            subsets:['latin-ext'],
        },
        {
            name: 'Open Sans',
            styles: ['100','200','300','400','600','700','900'],
            subsets: ['latin-ext']
        },
        ],
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) =>  ({
        '.navbar li':{
            fontFamily:'Allura',
            fontSize:'2rem',
        },
        'h1, h2, h3, h4, h5, h6,.site-navigation,.btn,.dropcaps:first-letter,.pricing-table header,.blog-loop.columns article header,.filter,.blog-single .comment-list li header,.order-menu .food-item.price-right header .quantity,.countdown':{
                fontFamily:'Allura',
            },
        'body,input[type="text"],input[type="tel"],input[type="email"],input[type="password"],textarea,h1.style-2, h2.style-2, h3.style-2, h4.style-2, h5.style-2, h6.style-2,.panel-title,.recent-widget ul li > h5': {
            fontFamily: 'Open Sans',
            
        }
        
    })
    
    
})



export default typography
