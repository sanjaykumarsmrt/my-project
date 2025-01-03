import React from "react";

function Footer() {
  const listFooter = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Language", link: "#language" },
    { name: "Projects", link: "#projects" },
  ];
  return (
    <footer className="bg-gray-700 rounded-lg shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-ms text-gray-200 sm:text-center">
          2025{" "}
          <a href="#" className="hover:underline">
            Portfolio
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0">
          {listFooter.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-orange-400 me-4 md:me-6"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
