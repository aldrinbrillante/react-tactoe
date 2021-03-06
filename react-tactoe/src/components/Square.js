import React from "react";

//creating functional comp
const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;

    return (
        <button className={style} onClick={onClick}>
          {value}
        </button>
      )
    }