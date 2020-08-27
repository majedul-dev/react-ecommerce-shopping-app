import React from "react";
import "../styles/SidebarSm.css";
import ProminentFeatures from "../constants/prominentFeatures";
import ProductsMenu from "../constants/productsMenu";

const SidebarSm = ({ openSidebarSm }) => {
  return (
    <aside
      className={`sidebar-sm sidebar ${
        openSidebarSm ? "show-sidebar-sm" : ""
      }`}>
      <div className='prominent-features'>
        <ProminentFeatures styleClass='menu' />
      </div>
      <div className='all-categories'>
        <ProductsMenu styleClass='category' />
      </div>
    </aside>
  );
};

export default SidebarSm;
