import React from "react";
import "./myStyles.css";
import { SideBar } from "./SideBar";
import { WorkArea } from "./WorkArea";

export function MainContainer() {
    return <div className="main-container">
        <SideBar></SideBar>
        <WorkArea></WorkArea>
    </div>
}
