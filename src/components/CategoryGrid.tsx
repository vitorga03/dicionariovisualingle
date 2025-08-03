import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/words';

const CategoryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="group"
        >
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden">
            <div className={`${category.color} px-6 py-8 text-center`}>
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold leading-tight">
                {category.name}
              </h3>
            </div>
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
              <p className="text-sm text-gray-600 text-center">
                Explorar categoria
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;