import React from "react";
import { Link } from "react-router-dom";

interface SubMenuInterface {
  label: string;
  icon?: string;
  active?: boolean;
  to: string;
}

interface MenuTreeProps {
  label: string;
  isNew?: boolean;
  active?: boolean;
  icon?: string;
  subMenus: SubMenuInterface[];
  open?: boolean;
}

const MenuTree: React.FC<MenuTreeProps> = ({
  label,
  icon,
  active,
  subMenus,
  open,
}) => {
  return (
    <li className={`nav-item ${open && "menu-open"}`}>
      <a href="#" className={`nav-link ${active && "active"}`}>
        <i className={`nav-icon ${icon}`}></i>
        <p>
          {label}
          <i className="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul className="nav nav-treeview">
        {subMenus?.map((subMenu) => (
          <li className="nav-item">
            <Link
              to={subMenu.to}
              className={`nav-link ${subMenu.active && "active"}`}
            >
              <i className="far fa-circle nav-icon"></i>
              <p>{subMenu.label}</p>
            </Link>
          </li>
        ))}
        {/* <li className="nav-item">
          <a href="./index.html" className="nav-link active">
            <i className="far fa-circle nav-icon"></i>
            <p>Sales Record</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index2.html" className="nav-link">
            <i className="far fa-circle nav-icon"></i>
            <p>Purchased Orders</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index3.html" className="nav-link">
            <i className="far fa-circle nav-icon"></i>
            <p>Stock Control</p>
          </a>
        </li> */}
      </ul>
    </li>
  );
};

export default MenuTree;
