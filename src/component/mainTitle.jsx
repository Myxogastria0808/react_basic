import React from "react";
import './App.css'

const MainTitle = (props) => {
    return (
        <h1 className={'main-title'}>{props.title}</h1>
    );
};

export default MainTitle;