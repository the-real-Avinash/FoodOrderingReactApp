import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList = [
    ...new Set(Menu.map((curEle)=>{
        return curEle.category;
    })), "All"
];

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

  

    const FilterItem = (category) =>{

        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curEle)=>{
            return curEle.category === category;
        });
        setMenuData(updatedList);
    }
    
  return (
    <> 
    <Navbar filterItem = {FilterItem} menuList = {menuList}/>
    <MenuCard menuData = {menuData}/>
    </>
  );
};
export default Restaurant;
