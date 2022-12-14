import React from "react";
import { Category } from "../services/models";

import Link from "next/link";

const categories: Category[] = [
  { name: "Yok", slug: "here", timesClicked: 0, iconPath: "" },
  { name: "Fikrim", slug: "tortured", timesClicked: 0, iconPath: "" },
  { name: "Hiçbir", slug: "being", timesClicked: 0, iconPath: "" },
  { name: "Hakkında", slug: "i'm", timesClicked: 0, iconPath: "" },
  { name: "Ne yazacağım", slug: "help", timesClicked: 0, iconPath: "" },
  { name: "Buraya", slug: "please", timesClicked: 0, iconPath: "" },
];


const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md top-0 z-50 bg-black bg-opacity-70 rounded-none shadow-none w-full">
      <div className="container mx-10">
        <div className="inline-block  w-full">
          <div className="md:float-left block">
            <Link href="/">
              <img
                className="cursor-pointer w-auto h-12"
                src="../logo.png"
                alt={"logo"}></img>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/kategori/${category.slug}`}>
                <span className="text-base md:float-right mt-3.5 align-middle text-white ml-4 cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
