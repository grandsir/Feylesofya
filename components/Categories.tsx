import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
import { categoryQuery } from "../services/query";

//@ts-ignore
const Categories = (changeCategory) => {
  console.log("kodlah");
  console.log("kodlah");
  console.log("kodlah");
  console.log("kodlah");
  console.log("kodlah");

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories(categoryQuery).then((newCategories) =>
      setCategories(newCategories)
    );
  }, []);
  const sortedCategories = React.useMemo(
    () =>
      categories
        .sort(function (l, r) {
          return r.timesClicked - l.timesClicked;
        })
        .slice(0, 6),
    []
  );
  return (
    <div className="sticky self-start top-24 justify-center align-middle text-center">
      <span className="font-category_title text-white category-text ml-36 mt-8 pb-2 border-b border-[#0096FF] text-bold text-3xl align-middle text-center justify-center">
        Popüler Kategoriler
      </span>
      <div className="grid grid-cols-2 mt-12 ml-24 gap-x-20 gap-y-0">
        {sortedCategories.map((category) => (
          <div id="kodlah4" className="mt-6 category-container">
            <div id="kodlah3" className="category-card">
              <button onClick={() => changeCategory(category)}>
                <div id="kodlah2" className="face face1">
                  <div
                    id="kodlah1"
                    className="content align-middle justify-center items-center"
                  >
                    <img
                      src={category.iconPath}
                      className="content-image object-contain h-20 w-20 mx-auto"
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

// var categories = [
//   {
//     name: "Varlık Felsefesi",
//     svg: "../resources/ethics.svg",
//   },
//   {
//     name: "Ahlak Felsefesi",
//     svg: "../resources/ethics.svg",
//   },
//   {
//     name: "Mantık",
//     svg: "../resources/logic.svg",
//   },
//   {
//     name: "Diyalog",
//     svg: "../resources/ethics.svg",
//   },
//   {
//     name: "Estetik",
//     svg: "../resources/ethics.svg",
//   },
//   {
//     name: "Epistemoloji",
//     svg: "../resources/ethics.svg",
//   },
// ];
export default Categories;
