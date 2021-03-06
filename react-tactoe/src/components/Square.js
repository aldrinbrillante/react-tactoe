import React from "react";

//creating functional comp
const Square = ({ value, onClick }) => {

    return (
        <button className={style} onClick={onClick}>
          {value}
        </button>
      );
    };