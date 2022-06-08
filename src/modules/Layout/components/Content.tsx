import React from "react";

interface ContentProps {
  children: React.ReactNode;
  headerTitle: string;
}

const Content: React.FC<ContentProps> = ({ children, headerTitle }) => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">{headerTitle}</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">{children}</div>
      </section>
    </div>
  );
};

export default Content;
