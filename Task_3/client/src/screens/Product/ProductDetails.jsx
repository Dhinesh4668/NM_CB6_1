import React from 'react'
import Items from './Items'

const ProductDetails = () => {
  return (
    <div>
        <div key={Items.id}>
          <div className='card'>
            <img 
            src={Items.image}
            />
          </div>
        </div>
    </div>
  )
}

export default ProductDetails
