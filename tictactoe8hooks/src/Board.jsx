import React, { useState } from 'react'
import Square from './Square';
import calculateWinner from './calculateWinner.js'

// Board
const Board = () => {
    // state
    // boardState
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
      // turnState
    const [xIsNext, setXIsNext] = useState(true);
    // handleClick
    const handleCLick = index => {
      // copy of our board state
      const squares = [...boardSquares];
      // if the index of the board is filled, return
      if (calculateWinner(boardSquares) || squares[index]) return;
      // mutate that copy, and add X or O
      squares[index] = xIsNext ? "X" : "O"
      // calculate next turn
  
      // set the state of the board
      setBoardSquares(squares)
      // set the state of the turn
      setXIsNext(!xIsNext);
    };
    // creat our Board
  
    // creat a render square function
    const renderSquares = index => {
      return <Square value={boardSquares[index]} onClick={() => handleCLick(index)}/>
    }
      //  take in an index
        // return a square, with the correct value and function
        // initialize the status
        let status;
        const winner = calculateWinner(boardSquares);
        status = winner ? `Winner is : ${winner}` : `Next player ${xIsNext ? 'X' : 'O' }`
    return(
    <div>
    <div className="status">{status}</div>
      <div className="board-row">{renderSquares(0)}{renderSquares(1)}{renderSquares(2)}</div>
      <div className="board-row">{renderSquares(3)}{renderSquares(4)}{renderSquares(5)}</div>
      <div className="board-row">{renderSquares(6)}{renderSquares(7)}{renderSquares(8)}</div>
    </div>
    )
  }

//   merde c pas simple les hooks

export default Board
