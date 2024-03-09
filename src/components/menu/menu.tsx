import { useState } from "react";

import { menu } from "../../constants/Menu";

import { LinkCategory } from "./link-category";
import { CategoryMenu } from "../../types/CategoryMenu";

export const Menu = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryMenu[]>([]);
  const [currentSubcategory, setCurrentSubcategory] = useState<CategoryMenu[]>([]);

  const handleCategory = (category: CategoryMenu) => {
    setCurrentCategory(category.subcategories as []);
    setCurrentSubcategory([]);
  };

  const handleSubcategory = (category: CategoryMenu) => {
    setCurrentSubcategory(category.subcategories as [])
  };

  return (
    <nav className="grid grid-cols-3">
      <ul>{
        menu.map(category => (
          <li key={category.title} className="bg-white">
            <LinkCategory category={category} img={category.img} onClick={handleCategory} />
          </li>
        ))
      }</ul>

      {currentCategory && (
        <ul>{
          currentCategory.map(category => (
            <li key={category.title} className="bg-white">
              <LinkCategory category={category} onClick={handleSubcategory} />
            </li>
          ))
        }</ul>
      )}

      {currentSubcategory && (
        <ul>{
          currentSubcategory.map(category => (
            <li key={category.title} className="bg-white">
              <LinkCategory category={category} />
            </li>
          ))
        }</ul>
      )}
    </nav>
  );
};
