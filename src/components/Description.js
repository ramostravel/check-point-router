import React from 'react'
import { useParams } from 'react-router-dom'
const Description = ({ProdList}) => {
    const params = useParams()
    const product = ProdList.find(el=>el.id === +params.prodId)
 
  return (
    <div>
Description
{product.desc}

    </div>
  )
}

export default Description