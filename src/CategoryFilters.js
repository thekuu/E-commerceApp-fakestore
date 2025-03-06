import React from "react";
import "./styles.css";
const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

const CategoryFilters = ({ onSelectCategory }) => {
  return (
    <div className="category-filters">
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
