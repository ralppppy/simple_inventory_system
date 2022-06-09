import React from "react";
import Card from "../../Common/views/Card/Card";
import Pagination from "../../Common/views/Pagination/Pagination";
import Content from "../../Layout/components/Content";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Content headerTitle="Sales record">
        <Card
          headerTitle="WOWW"
          footer={
            <Pagination pages={50} size="sm" className="m-0 float-right" />
          }
        >
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: 10 }}>#</th>
                <th>Task</th>
                <th>Progress</th>
                <th style={{ width: 40 }}>Label</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Update software</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-danger">55%</span>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Clean database</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-warning">70%</span>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Cron job running</td>
                <td>
                  <div className="progress progress-xs progress-striped active">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-primary">30%</span>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Fix and squish bugs</td>
                <td>
                  <div className="progress progress-xs progress-striped active">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="badge bg-success">90%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Content>
    </>
  );
};

export default Home;
