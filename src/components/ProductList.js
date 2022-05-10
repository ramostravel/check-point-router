import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ProdList}) => {
  return (
    <div>ProductList
    {ProdList.map(el=>(
    <div key={el.id}><br/>  
    <Link to={`/products/${el.id}`}>
    <p>{el.name} </p ><br/><br/>
    </Link>
    </div>
        ))}
    </div>
  )
}

export default ProductList