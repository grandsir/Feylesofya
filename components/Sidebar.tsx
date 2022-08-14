import React from "react";

type SidebarProps = {
  name: string;
  iconPath: string;
  slug: string;
};

const sidebarMenu: SidebarProps[] = [
  {
    name: "Ana Sayfa",
    iconPath:
      "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
    slug: "",
  },
  {
    name: "Profilim",
    iconPath: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    slug: "/feylesof/demirhan",
  },
  {
    name: "Felsefe Kapsülü",
    iconPath:
      "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2",
    slug: "felsefe-kapsulu",
  },
  {
    name: "Tartışma",
    iconPath:
      "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
    slug: "tartisma",
  },
  {
    name: "Tavsiye Eserler",
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    slug: "tavsiye-eserler",
  },
  {
    name: "Gizli Yazı",
    iconPath:
      "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
    slug: "makale",
  },
  {
    name: "Academia",
    iconPath:
      "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    slug: "akademi",
  },
];

const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="self-start sticky top-24">
        <aside className="pr-10 ">
          <div className="py-4 px-3">
            <ul className="space-y-2">
              {sidebarMenu.map((sidebarItem: SidebarProps) => {
                return (
                  <li>
                    <a
                      href={sidebarItem.slug}
                      className="flex items-center p-2 text-base font-normal text-gray-50 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black"
                    >
                      <svg
                        aria-hidden="true"
                        className="svg-glow flex-shrink-0 w-6 h-6 text-indigo-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-50 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d={sidebarItem.iconPath}
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        {sidebarItem.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
