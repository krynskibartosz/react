    // function that calculates the winner
    const calculateWinner = squares => {
        // get our set of winning lines
        const winningLines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ];
        // loop through this set
          for (let i = 0; i < winningLines.length; i++) {
            // check to see if values in our squares array fulfill the winning 
            const [a,b,c] = winningLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
              // if so, return X or O
              return squares[a];
            }
          }
          // else, return nothing
          return null
      }
    

export default calculateWinner