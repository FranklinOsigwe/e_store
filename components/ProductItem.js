import Link from 'next/link'
import React from 'react'
 

function ProductItem({product}) {
  return (
      <div className="card">
          <Link href={`/product/${product.slug}`}>
              <p>
                  <img src={product.image}
                  alt={product.name} className="rounded shadow h-40" />
              </p>
          </Link>
          
          <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/product/${product.slug}`}>
              <p>
                  <h2 className="text-lg">{product.name}</h2>
              </p>
          </Link>  
          </div>

          <p className="mb-2">{product.brand}</p>
          <p>${product.price}</p>
          <button className='primary-button' type="button">Add to cart</button>
      </div>
  )
}

export default ProductItem