import SubMenus from "./subcategories";

export interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string | null;
  image?: string | null;
  link: string;
  childrens?: Category[];
}

const Categories = async () => {
  const response = await fetch(
    "https://api.shope.com.bd/api/v1/public/hero-categories",
    {
      cache: "no-store",
    }
  );
  const categories: Category[] = await response.json();

  return (
    <div className="container relative max-md:hidden">
      <div className="absolute bottom-0 w-60 left-0 z-50">
        <div className="bg-white max-w-60 h-96 flex flex-col justify-between border-r">
          <SubMenus categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
