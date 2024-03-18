import React, { useState } from "react";

import { CategoryMenu } from "types/CategoryMenu";
import { MENU_OPTIONS } from "constants/menu";

import { LinksList } from "./components/LinksList";


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
          <LinksList
            categories={MENU_OPTIONS}
            currentCategory={currentCategory}
            onClick={handleCategory}
          />

          {currentCategories && (
            <LinksList
              categories={currentCategories}
              currentCategory={currentSubcategory}
              onClick={handleSubcategory}
              handleClose={handleCloseMenu}
            />
          )}

          {currentSubcategories && (
            <LinksList
              categories={currentSubcategories}
              handleClose={handleCloseMenu}
            />
          )}
        </nav>
      </aside>
    )
  );
};
