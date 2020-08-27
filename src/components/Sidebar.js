import React from "react";
import "../styles/Sidebar.css";
import ProminentFeatures from "../constants/prominentFeatures";
import ProductsMenu from "../constants/productsMenu";

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-content'>
        <div className='prominent-features'>
          <ProminentFeatures styleClass='menu' />
        </div>
        <div className='all-categories'>
          <ProductsMenu styleClass='category' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
