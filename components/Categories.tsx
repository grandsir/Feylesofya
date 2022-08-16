import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import { categoryQuery } from "../services/query";
import { Category } from "./Models";

interface CategoryProps {
  changeCategory: (category: Category) => void;
}


const Categories = ({ changeCategory }: CategoryProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories(categoryQuery).then((newCategories : Category[]) =>
    {
    var sortedCategories = newCategories.sort(function (l, r) {
      return r.timesClicked - l.timesClicked;
    }).slice(0, 6)

      setCategories(sortedCategories)
    }
    );
  }, []);
  return (
    <div
      className="sticky self-start top-24 justify-center align-middle text-center"
    >
      <span
        className="font-category_title text-white category-text ml-36 mt-8 pb-2 border-b border-[#0096FF] text-bold text-3xl align-middle text-center justify-center"
      >
        Popüler Kategoriler
      </span>
      <div
        className="grid grid-cols-2 mt-12 ml-24 gap-x-20 gap-y-0"
      >
        {categories.map((category) => (
          <div className="mt-6 category-container">
            <div className="category-card">
              <button onClick={() => changeCategory(category)}>
                <div className="face face1">
                  <div className="content align-middle justify-center items-center">
                    <img
                      src={category.iconPath}
                      className="content-image object-contain h-20 w-20 mx-auto"
                    alt={category.name}></img>
                    <h3>{category.name}</h3>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// var categories : Category[] = [
//   {
//     name: "Varlık Felsefesi",
//     iconPath: "../resources/ethics.svg",
//     slug: "asd",
//     timesClicked:0
//   },
//   {
//     name: "Ahlak Felsefesi",
//     iconPath: "../resources/ethics.svg",
//     slug: "asd",
//     timesClicked:0
//
//   },
//   {
//     name: "Mantık",
//     iconPath: "../resources/logic.svg",
//     slug: "asd",
//     timesClicked:0
//
//   },
//   {
//     name: "Diyalog",
//     iconPath: "../resources/ethics.svg",
//     slug: "asd",
//     timesClicked:0
//
//   },
//   {
//     name: "Estetik",
//     iconPath: "../resources/ethics.svg",
//     slug: "asd",
//     timesClicked:0
//
//   },
//   {
//     name: "Epistemoloji",
//     iconPath: "../resources/ethics.svg",
//     slug: "asd",
//     timesClicked:0
//
//   },
// ];
export default Categories;
