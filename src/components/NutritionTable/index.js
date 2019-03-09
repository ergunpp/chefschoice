import React from 'react'


class NutritionTable extends React.Component{
    constructor(props){
        super(props)
        var labels=[];
        var values=[];
         if (props.additives.copperSulfate) {
            values.push(props.additives.copperSulfate)
            labels.push("Bakır (Sulfat olarak)")
            
        }
        if (props.additives.zincSulphate) {
            values.push(props.additives.zincSulphate)
            labels.push("Çinko (Sulfat olarak)")
            
        }
        if ( props.additives.zincShelate) {
            values.push( props.additives.zincShelate)
            labels.push("Çinko (Şelat olarak)")
            
        }
        if (props.additives.manganeseSulphate) {
            values.push( props.additives.manganeseSulphate)
            labels.push("Manganez (Sulfat olarak)")
            
        }
        if (props.additives.selenyum) {
            values.push(props.additives.selenyum)
            labels.push("Selenyum")
           
        }
        if (props.additives.kondroitin) {
            values.push(props.additives.kondroitin)
            labels.push("Kondroitin")
            
        }
        if (props.additives.taurine) {
            values.push(props.additives.taurine)
            labels.push("Taurin")
            
        }
        if (props.additives.niyasin) {
            values.push(props.additives.niyasin)
            labels.push("Niyasin")
            
        }
        if (props.additives.glukozamin) {
            values.push(props.additives.glukozamin)
            labels.push("Glukozamin")
            
        }
        if (props.additives.vitaminD3) {
            values.push(props.additives.vitaminD3)
            labels.push("Vitamin D3")
            
        }
        if (props.additives.vitaminA) {
            values.push(props.additives.vitaminA)
            labels.push("Vitamin A")
            
        }
        if (props.additives.vitaminE) {
            values.push(props.additives.vitaminE)
            labels.push("Vitamin E")
            
        }
        if (props.additives.vitaminC) {
            values.push(props.additives.vitaminC)
            labels.push("Vitamin C")
            
        }
        
        var result={};
        labels.forEach((label,i) =>result[label]=values[i])
        
        this.state={
            tableElements:result
        }
        
    }
    
   
    
    render(){
        return(
            <table>
             <tbody>
                <tr><th colSpan="2">Besin İlaveleri</th></tr>
                {Object.keys(this.state.tableElements).map((key)=>
                  <tr key={key}><td>{key}</td><td>{this.state.tableElements[key]}</td></tr>
                
                )}
              </tbody>
            </table>
            
            
            )
    }
    
}

export default NutritionTable