import React from 'react'
import Product from 'components/Product'
import './style.scss'



class Gallery extends React.Component {
    constructor (props){
        super(props);
        const showFilter= (props.elements.length) >10 ? true:false
        
        
        this.state ={
            filter:props.filter,
            elements:props.elements,
            showFilter:showFilter
        }
         this.handleFilterClick=this.handleFilterClick.bind(this)
    }
   
    componentDidlMount () {
        window.addEventListener('click', this.handleClick, false);
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick, false)
    }

    handleFilterClick(filter){
        console.log(filter)
        
        this.setState({filter:filter})
        console.log(this.state.filter)
    }
    
    filterProducts (elements,filter){
        const filteredArray=elements.filter(function(el){
            for (let i in el.tags) { 
                if (el.tags[i].slug===filter){
                   
                    return true;
                    
                }
                
            } 
            return false
        })
        return filteredArray;
    }
    
    renderGallery(){
        
        const elements=this.state.elements
        var filter=this.state.filter
        var filteredElements = elements
        if (filter !=="*"){
            filteredElements = this.filterProducts(elements,filter)
        }
        
        const childElements = filteredElements.map(function(element,key){
           
           if (element.mainPhoto!=null){
           return (
               
               <Product key={key} element={element}/>
               
            );} else{
                return null;
            }
        });
         return (
            
              
                <section>
               
                
                 {this.state.showFilter && (<div className="col-md-12">

                    <ul className="filter text-center inline-list">
                      <li className="filter-item">
                        <button id="*" className={this.state.filter==="*" ? "selected":null} onClick={(e) =>{this.handleFilterClick("*")}}>Tüm Ürünler</button>
                      </li>
                      <li className="filter-item">
                        <button id="nograin" className={this.state.filter==="grainfree" ? "selected":null} onClick={(e) =>{this.handleFilterClick("grainfree")}}>Tahılsız</button>
                      </li>
                      <li className="filter-item">
                        <button id="seafood" className={this.state.filter==="seafood" ? "selected":null} onClick={(e) =>{this.handleFilterClick("seafood")}}>Deniz Mahsülleri</button>
                      </li>
                      <li className="filter-item">
                        <button id="poultry" className={this.state.filter==="poultry" ? "selected":null} onClick={(e) =>{this.handleFilterClick("poultry")}}>Beyaz Et</button>
                      </li>
                      <li className="filter-item">
                        <button id="redmeat" className={this.state.filter==="redmeat" ? "selected":null} onClick={(e) =>{this.handleFilterClick("redmeat")}}>Kırmızı Et</button>
                      </li>
                      
                    </ul>
                  </div>)}
                  <div className="col-md-12 text-center">
                    {childElements}
                   </div> 
                
                </section>
                
              
        );
        
    }
    
    render() {
       return (
       this.renderGallery()
       )
    }
    
}


export default Gallery