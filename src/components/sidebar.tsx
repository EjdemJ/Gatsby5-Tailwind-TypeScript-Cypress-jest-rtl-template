import React from "react";

const mockedNav = [
  {
    heading: "Top Nav",
    link1: "Link 1",
    link2: "Link 2",
    link3: "Link 3",
  },
  {
    heading: "Bottom Nav",
    link1: "Link 1",
    link2: "Link 2",
    link3: "Link 3",
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex-[1] h-screen inline-block pl-6 pt-8 sidebar">
      <span className="logo text-xl">Samplicity</span>
      {mockedNav.map((item) => (
        <div className="text-xl">
          <h2>{item.heading}</h2>
          <ul>
            <li>{item.link1}</li>
            <li>{item.link2}</li>
            <li>{item.link3}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
