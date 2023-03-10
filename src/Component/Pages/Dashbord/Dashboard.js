import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Dashbord.css";
import Navbar from "../../Navbar/Navbar";
import Logo from "../../Images/sudocode-resolution.png";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard d-flex">
        <div>
          <Sidebar />
        </div>
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexFlow: "column",
            height: "100vh",
            overflowY: "hidden",
          }}
        >
          <Navbar />
          <div style={{ height: "100%" }}>
            <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
              <div className="d-flex card-section">
                <div className="cards-container">
                  <div className="card-bg w-100 border d-flex flex-column">
                    <div className="p-4 d-flex flex-column h-100">
                      <h1>Dashboard</h1>
                    </div>
                  </div>
                  <div className="card-bg w-100 border d-flex flex-column">
                    <div className="p-4 d-flex flex-column h-100">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* <h1>Rigth Div</h1> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer">
                <div className="d-flex align-items-center">
                  <img alt="logo" src={Logo} width="100px" />
                  <span className="ml-4 lead mb-0 font-weight-bold">
                    Sudocode
                  </span>

                  <span
                    className="footer-rem"
                    style={{
                      fontSize: "3em",
                      margin: "-2rem 0px -1.5rem 1rem",
                      color: "#C4C4C4",
                    }}
                  />
                  <small className="ml-5 mt-1">
                    &copy; Sudocode Solution Pvt.Ltd, 2023. All rights reserved.
                  </small>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
