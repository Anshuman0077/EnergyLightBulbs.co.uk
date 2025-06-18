
import { categories } from "../components/data/categories";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find(cat => cat.slug === params.category);

  if (!category) {
    return <h1>Category Not Found</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>

      {category.subcategory.map((sub, i) => (
        <div key={i} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{sub.name}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {sub.items.map((item, j) => (
              <div key={j} className="border p-2 rounded shadow">
                <img
                  src={item.img}
                  alt={item.imgName}
                  className="w-full h-32 object-contain"
                />
                <p className="text-sm mt-2 text-center">{item.imgName}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
