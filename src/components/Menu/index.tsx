import { MENU_OPTIONS } from "constants/menu";
import React, { useState } from "react";
import { CategoryMenu } from "types/CategoryMenu";

import { CategoryList } from "./CategoryList";


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
    setCurrentCategory(title)
  };

  const handleSubcategory = (category: CategoryMenu, title: string) => {
    setCurrentSubcategories(category.subcategories as [])
    setCurrentSubcategory(title)
  };

  const handleCloseMenu = () => {
    closeMenu()
    setCurrentCategory('');
    setCurrentSubcategory('');
    setCurrentCategories([]);
    setCurrentSubcategories([]);
  };

  return (
    isOpen && (
      <aside className="absolute left-0 right-0">
        <nav className="grid grid-cols-3" onMouseLeave={handleCloseMenu}>
          <CategoryList
            categories={MENU_OPTIONS}
            currentCategory={currentCategory}
            onClick={handleCategory}
          />

          {currentCategories && (
            <CategoryList
              categories={currentCategories}
              currentCategory={currentSubcategory}
              onClick={handleSubcategory}
              handleClose={handleCloseMenu}
            />
          )}

          {currentSubcategories && (
            <CategoryList
              categories={currentSubcategories}
              handleClose={handleCloseMenu}
            />
          )}
        </nav>
      </aside>
    )
  );
};
