


export default async function ProductPage({ params }: { params: { category: string; subcategory: string; product: string } }) {
  // await if required in future
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>Subcategory: {params.subcategory}</h2>
      <h3>Product: {params.product}</h3>
    </div>
  );
}
