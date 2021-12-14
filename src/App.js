import React from "react";
import "@blueprintjs/core/lib/css/blueprintjs.css";
import {Navbar, Alignment, Divider} from "@blueprintjs/core";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar className="bp3-dark" style={{ position:"fixed", top: "0"}}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading style={{marginLeft: "30px"}}>
            Marketing Dashboard
          </Navbar.Heading>

        </Navbar.Group>
      
      </Navbar>

      {}
      <div style={{ marginLeft: "30px", marginTop: "80px", marginRight: "30px"}}>
        <div style={{marginTop: "50px"}}>
          {/*youtube*/}
        </div>

        <Divider style={{ marginTop: "50px"}}></Divider>
        <div style={{ marginTop: "50px"}}>
          { /*Twitter Component*/}
        </div>

        <Divider style={{ marginTop: "50px"}}></Divider>
      </div>
      {/* footer*/}
      <div>
        <h5 style={{
          fontSize: "medium",
          textAlign: "left",
          margin:"30px 30px 20px 30px",
        }}>
          powered by ituwei.org
        </h5>
      </div>
    </div>
  );
}

export default App;
