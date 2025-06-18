import { categoryList } from "../category/categoryList";
import { generateSlug } from "@/app/utility/slugy";

export const categories = categoryList.map(category => ({
  ...category,
  slug: generateSlug(category.name),
  subcategory: category.subcategory.map(sub => ({
    ...sub,
    slug: generateSlug(sub.name),
    items: sub.items.map(item => ({
      ...item,
      slug: generateSlug(item.imgName)
    }))
  }))
}));

