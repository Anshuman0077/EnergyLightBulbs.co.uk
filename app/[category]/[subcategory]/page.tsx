
export default function SubCategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>Subcategory: {params.subcategory}</h2>
    </div>
  );
}