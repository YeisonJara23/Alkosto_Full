import React from "react";
import "./MegaMenu.scss";

const MegaMenu = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mega-menu">
      {data.sections.map((section, index) => (
        <div className="mega-column" key={index}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
