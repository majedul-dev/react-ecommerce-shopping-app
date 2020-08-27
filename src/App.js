import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import SidebarSm from "./components/SidebarSm";
import Categories from "./components/Categories";
import Tutorial from "./components/Tutorial";
import SpecialOffers from "./components/SpecialOffers";
import PeopleInsprison from "./components/PeopleInsprison";
import Testmonial from "./components/Testmonial";
import Corporate from "./components/Corporate";
import ChaldalApps from "./components/ChaldalApps";
import Map from "./components/Map";
import Footer from "./components/Footer";

// Pages
import Products from "./pages/products";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSidebarSm, setOpenSidebarSm] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log(openSidebar);
  };

  const toggleSidebarSm = () => {
    setOpenSidebarSm(!openSidebarSm);
  };

  return (
    <div className='App'>
      <Router>
        <Navbar
          openSidebar={openSidebar}
          toggleSidebar={toggleSidebar}
          toggleSidebarSm={toggleSidebarSm}
          openSidebarSm={openSidebarSm}
        />
        <div className='container'>
          <div className={`left-section ${openSidebar ? "toggleSidebar" : ""}`}>
            <Sidebar />
          </div>
          <SidebarSm openSidebarSm={openSidebarSm} />
          <div className={`right-section `}>
            <Switch>
              <Route exact path='/'>
                <Banner openSidebar={openSidebar} />
                <Categories />
                <Tutorial />
                <SpecialOffers />
                <PeopleInsprison />
                <Testmonial />
                <Corporate />
                <ChaldalApps />
                <Map />
                <Footer />
              </Route>
              <Route path='/fruits-vegetables'>
                <Products />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
