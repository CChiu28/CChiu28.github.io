import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {

    return(
        <div className="bg-blue-800 text-blue-100 w-60 flex flex-col">
                <Link to="/">Home</Link>
                <Link to="/Project">Project</Link>
        </div>
    )
}