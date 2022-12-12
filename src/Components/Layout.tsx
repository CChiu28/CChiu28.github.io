import React from "react";
import SideBar from "./sidebar";

export default function Layout(props: any) {

    return(
        <div className='relative flex'>
            <SideBar />
            <div>{ props.children }</div>
        </div>
    )
}