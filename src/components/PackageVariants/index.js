import React from 'react'
import './style.scss'


const PackageVariants = (props) =>{
    
    const ListItems = props.packages.map((variant,i) =>(
    <li key={i} className="packagelist">{variant.packageSize/1000 >=1 ? variant.packageSize/1000+'kg' : variant.packageSize+'g'}
    </li>
    ))
    
    return (
        
        <ul>{ListItems}</ul>
        )
}

export default PackageVariants