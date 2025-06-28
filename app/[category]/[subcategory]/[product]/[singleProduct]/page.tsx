import { categories } from '@/app/components/data/categories';
import { useParams } from 'next/navigation'
import React from 'react'

export default function SingleProduct() {
    const params = useParams();

    const category = categories.find((cat) => cat.slug === params.category);
    const subcategory = category?.subcategory.find((sub) => sub.slug === params.subcategory);
    const product = subcategory?.items.find(
        (item) => item.slug === params.product
    );
    if (!category || !subcategory || !product) {
        return (
            <h1 className='text-center text-xl font-semibold pt-10'>
                Prodcut Not Found
            </h1>
        )
        
    }
  return (
    <div>SingleProduct</div>
  )
}
