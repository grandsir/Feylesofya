import React from "react";

var categories = [
  {
    name: "Varlık Felsefesi",
    svg: "../resources/ethics.svg",
  },
  {
    name: "Ahlak Felsefesi",
    svg: "../resources/ethics.svg",
  },
  {
    name: "Mantık",
    svg: "../resources/logic.svg",
  },
  {
    name: "Diyalog",
    svg: "../resources/ethics.svg",
  },
  {
    name: "Estetik",
    svg: "../resources/ethics.svg",
  },
  {
    name: "Epistemoloji",
    svg: "../resources/ethics.svg",
  },
];
const Categories = () => {
  return (
    <div className="sticky self-start top-32 justify-center align-middle text-center">
      <span className="font-category_title text-white category-text ml-32 mt-8 pb-2 border-b border-[#0096FF] text-bold text-3xl align-middle text-center justify-center">
        Popüler Kategoriler
      </span>
      <div className="grid grid-cols-2 mt-12 ml-24 gap-x-8 gap-y-0">
        {categories.map((category) => (
          <div id="container" className="mt-6 category-container">
            <div className="category-card">
              <div className="face face1">
                <div className="content align-middle justify-center items-center">
                  <img
                    id="image"
                    src={category.svg}
                    className="content-image object-contain h-20 w-20 mx-auto"
                  ></img>
                  <h3>{category.name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
