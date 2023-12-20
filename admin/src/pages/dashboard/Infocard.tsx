import React from "react";
import "/hocreact/kicket-admin/admin/src/App.css";

export default function Infocard() {
  return (
    <div className="header">
      <div className="header-card">
        <p>Users Total</p>
        <div className="header-infocard">
          <h1>11.8M</h1>
          <button>+2,5%</button>
        </div>
      </div>
      <div className="header-card">
        <p>New Users</p>
        <div className="header-infocard">
          <h1>8.236K</h1>
          <button className="btn">-1,2%</button>
        </div>
      </div>
      <div className="header-card">
        <p>Active Users</p>
        <div className="header-infocard">
          <h1>2.352M</h1>
          <button>+11%</button>
        </div>
      </div>
      <div className="header-card">
        <p>New Users</p>
        <div className="header-infocard">
          <h1>8K</h1>
          <button>+5,2%</button>
        </div>
      </div>
    </div>

    // <>
    // {
    /* 
       
       
        <Card
          bordered={false}
          style={{ width: 400, marginLeft: "60px", border: "1px solid black" }}
        >
          <p style={{ fontSize: "1rem" }}>New Users</p>
          <div
            style={{
              display: "flex",
            }}
          >
            <h1 style={{ flex: "5" }}>8K</h1>
            <button
              style={{
                flex: "1",
                height: "40px",
                marginTop: "36px",
                borderRadius: "50px",
              }}
            >
              +5,2%
            </button>
          </div>
        </Card>
      </div>
    </> */
    // }
  );
}
