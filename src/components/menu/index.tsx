import { useState } from "react";

import { MENU_OPTIONS } from "../../constants/menu";

import { LinkCategory } from "./LinkCategory";
import { CategoryMenu } from "../../types/CategoryMenu";

export const Menu = () => {
  const [currentCategories, setCurrentCategories] = useState<CategoryMenu[]>([]);
  const [currentSubcategories, setCurrentSubcategories] = useState<CategoryMenu[]>([]);

  const [currentCategory, setCurrentCategory] = useState('');
  const [currentSubcategory, setCurrentSubcategory] = useState('');


  const handleCategory = (category: CategoryMenu, title: string) => {
    setCurrentCategories(category.subcategories as []);
    setCurrentSubcategories([]);
    setCurrentCategory(title)
  };

  const handleSubcategory = (category: CategoryMenu, title: string) => {
    setCurrentSubcategories(category.subcategories as [])
    setCurrentSubcategory(title)
  };

  return (
    <aside className="absolute left-0 right-0">
      <nav className="grid grid-cols-3">
        <ul>{
          MENU_OPTIONS.map(category => (
            <li key={category.title} className="bg-white">
              <LinkCategory
                isActive={category.title === currentCategory}
                category={category}
                img={category.img}
                onClick={handleCategory}
              />
            </li>
          ))
        }</ul>

        {currentCategories && (
          <ul>{
            currentCategories.map(category => (
              <li key={category.title} className="bg-white">
                <LinkCategory
                  isActive={category.title === currentSubcategory}
                  category={category}
                  onClick={handleSubcategory}
                />
              </li>
            ))
          }</ul>
        )}

        {currentSubcategories && (
          <ul>{
            currentSubcategories.map(category => (
              <li key={category.title} className="bg-white">
                <LinkCategory category={category} />
              </li>
            ))
          }</ul>
        )}
      </nav>
    </aside>
  );
};
