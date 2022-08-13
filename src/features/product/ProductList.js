import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
  return (
    <div>
        <div>
            <div>
                <h2>Product</h2>
            </div>
            <div>
                {props.data.map((p) =>
                <ProductCard key={p.productId} product={p}/>)}
            </div>
        </div>
    </div>
  )
}

export default ProductList
