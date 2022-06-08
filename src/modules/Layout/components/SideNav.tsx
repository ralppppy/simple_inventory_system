import React from "react";
import Menu from "./Menu";
import MenuTree from "./MenuTree";

const SideNav: React.FC<{}> = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src={require("../assets/img/AdminLTELogo.png")}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={require("../assets/img/user2-160x160.jpg")}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                Dashboard
                  <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li> */}

            <MenuTree
              open
              label="Stocks"
              active
              icon="fas fa-tachometer-alt"
              subMenus={[
                {
                  label: "Sales Record",
                  to: "/stocks",
                  active: true,
                },
                {
                  label: "Purchased Orders",
                  to: "/purchased-orders",
                },
                {
                  label: "Stock Control",
                  to: "/stock-control",
                },
              ]}
            />
            <Menu
              to="/register-item"
              label="Register the item"
              icon="fas fa-tachometer-alt"
            />

            <Menu to="/revenue" label="Revenue" icon="fas fa-tachometer-alt" />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
