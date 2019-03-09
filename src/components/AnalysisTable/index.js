import React from 'react'


class AnalysisTable extends React.Component{
    constructor(props){
        super(props)
        var labels=[];
        var values=[];
         if (props.analysis.protein) {
            values.push(props.analysis.protein)
            labels.push("Protein")
            
        }
        if (props.analysis.fat) {
            values.push(props.analysis.fat)
            labels.push("Yağ")
            
        }
        if (props.analysis.ash) {
            values.push(props.analysis.ash)
            labels.push("Kül")
            
        }
        if (props.analysis.fibre) {
            values.push(props.analysis.fibre)
            labels.push("Selülöz")
            
        }
        if (props.analysis.omega3) {
            values.push(props.analysis.omega3)
            labels.push("Omega 3")
           
        }
        if (props.analysis.omega6) {
            values.push(props.analysis.omega6)
            labels.push("Omega 6")
            
        }
        var result={};
        labels.forEach((label,i) =>result[label]=(values[i]*100).toFixed(2)+"%")
        
        this.state={
            tableElements:result
        }
        
    }
    
   
    
    render(){
        return(
            <table>
             <tbody>
                <tr><th>Bileşenler</th><th>Oran</th></tr>
                {Object.keys(this.state.tableElements).map((key)=>
                  <tr key={key}><td>{key}</td><td>{this.state.tableElements[key]}</td></tr>
                
                )}
              </tbody>
            </table>
            
            
            )
    }
    
}

export default AnalysisTable