import React, { useState } from "react";

import { CategoryMenu } from "types/CategoryMenu";
import { MENU_OPTIONS } from "constants/menu";

import { LinkCategory } from "./LinkCategory";


interface Props {
  closeMenu: () => void;
  isOpen: boolean;
}

export const Menu: React.FC<Props> = ({ closeMenu, isOpen }) => {
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
    isOpen && (
      <aside className="absolute left-0 right-0">
        <nav className="grid grid-cols-3" onMouseLeave={closeMenu}>
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
                    closeMenu={closeMenu}
                  />
                </li>
              ))
            }</ul>
          )}

          {currentSubcategories && (
            <ul>{
              currentSubcategories.map(category => (
                <li key={category.title} className="bg-white">
                  <LinkCategory
                    category={category}
                    closeMenu={closeMenu}
                  />
                </li>
              ))
            }</ul>
          )}
        </nav>
      </aside>
    )
  );
};
