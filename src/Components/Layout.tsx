import React from "react";
import SideBar from "./sidebar";

export default function Layout(props: any) {

    return(
        <>
            {/* <SideBar /> */}
            <div>{ props.children }</div>
        </>
    )
}