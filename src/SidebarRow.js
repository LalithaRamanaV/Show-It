import React from "react";
import "./SidebarRow.css";

function SidebarRow( { selected, Icon, title} ) {
    return  (
        // eslint-disable-next-line
        <div className= {'sidebarRow ${selected && "selected"}'}>
            <Icon className= "sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    );
}

export default SidebarRow;
