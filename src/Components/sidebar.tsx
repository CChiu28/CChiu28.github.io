import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
    const menu = [
        { label: 'Home', path: '/'},
        { label: 'Project', path: '/project'}
    ]
    return(
        // <div className="bg-blue-800 text-blue-100 w-60 flex flex-col sticky top-0">
        //     {menu.map((ele,index) => <Link to={ele.path} key={index}>{ele.label}</Link>)}
        // </div>
        <nav className="w-full relative flex flex-wrap items-center">
            test
        </nav>
    )
}