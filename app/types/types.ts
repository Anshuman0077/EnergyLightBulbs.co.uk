export interface ItemsType {
    img: string;
    imgName: string;
}

export interface SubCategoryType {
    name: string;
    items: ItemsType[];
}

export interface CategoryType {
    name: string,
    subcategory: SubCategoryType[];
}