import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";
import Image from 'next/image'

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return (
      <div>
        <h2>Page not Found</h2>
      </div>
    );
  }
  return (
    <div>
      <Layout title={product.name}>
        <div className="py-2">
          <Link href="/">
            <p>Go back to home page</p>
          </Link>
              </div>
              
              <div className="grid md:grid-cols-4 md:gap-3">
                  <div className="md:col-span-2">
                      <Image src={product.image} alt={product.name} width={640} height={640} Layout="responsive"></Image>
                  </div>

                  <div>
                      <ul>
                          <li><h2 className="text-3xl fond-bold">{product.name}</h2></li>
                          <li>Category:{product.category}</li>
                          <li>Brand : {product.brand}</li>
                          <li>{product.rating} of {product.numReviews } Reviews</li>
                          <li>Description : {product.description}</li>
                      </ul>
                  </div>

                  <div>
                      <div className="card p-5">
                          <div className="flex justify-between">
                              <div>Price</div>
                              <div>${product.price}</div> 
                          </div>

                          <div className="flex justify-between mb-2">
                              <div>Status</div>
                              <div>{product.countInStock > 0 ? 'In stock' : 'unavailable' }</div>
                          </div>
                          
                          <button className="primary-button w-full ">Add to Cart</button>
                      </div>
                  </div>
              </div>
      </Layout>
    </div>
  );
}
