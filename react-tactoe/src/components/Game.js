// import all
import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
    //initial state of an array with 9 values
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
}