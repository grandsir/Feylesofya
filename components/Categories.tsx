import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import { categoryQuery } from "../services/query";
import { Category } from "../services/models";

interface CategoryProps {
  changeCategory: (category: Category | undefined) => void;
}

const Categories = ({ changeCategory }: CategoryProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [active, setActive] = useState("");

  const handleClick = (slug: string, category: Category | undefined) => {
    var categorySlug = slug;

    if (slug === active) {
      categorySlug = "";
      category = undefined;
    }
    console.log(categorySlug);
    console.log(category);
    setActive(categorySlug);
    changeCategory(category);
  };
  useEffect(() => {
    getCategories().then((newCategories: Category[]) => {
      var sortedCategories = newCategories
        .sort(function (l, r) {
          return r.timesClicked - l.timesClicked;
        })
        .slice(0, 6);

      setCategories(sortedCategories);
    });
  }, []);
  return (
    <div className="hidden cg_disappear:block sticky self-start top-24 justify-center align-center items-center text-center flex-col cg:mr-20">
      <span className="font-category_title text-[#DBD8E3] category-text pb-2 border-b border-[#0096FF] text-bold text-3xl text-center">
        Popüler Kategoriler
      </span>
      <div className="grid grid-cols-1 cg_single:grid-cols-2 mt-12 gap-y-0 gap-x-0">
        {categories.map((category) => (
          <div
            id={category.slug}
            className={`mt-6 ${
              active === category.slug ? "active" : "category-container"
            }`}
          >
            <div className="category-card">
              <button onClick={() => handleClick(category.slug, category)}>
                <div className="face face1">
                  <div className="content align-middle justify-center items-center">
                    <img
                      src={category.iconPath}
                      className="content-image object-contain h-20 w-20 mx-auto"
                      alt={category.name}
                    ></img>
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
