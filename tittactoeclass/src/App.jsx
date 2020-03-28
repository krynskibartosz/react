import React from 'react';
import Board from './Board';
import calculateWinner from './calculateWinner';



  class Game extends React.Component {
    constructor (props) {
      super(props);
          this.state = {
            history : [{
              squares : Array(9).fill(null)
            }],
            stepNumber : 0,
            xIsNext : true 
      };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }





    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history : [...history, {squares}],
      stepNumber : history.length,
      xIsNext: !this.state.xIsNext,
    });
  }



  jumpTo(step) {
    this.setState({
      stepNumber : step,
      xIsNext : (step % 2) === 0,
    });
  }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      let status;

      winner ? status = `${winner} a gagné` : status = `Prochain joueur : ${this.state.xIsNext ? 'X' : 'O'}`;
      // Condition ternaire à choix multiple (+p condition)
          // condition 1 ? éxécution 1 :
          // condition 2 ? éxécution 2 :
          // condition 3 ? éxécution 3 :
          // éxécution 4;

          // cette condition ternaire ===
          
          // if(cond1){éxécution 1}
          // else if(cond2) {éxécution 2}
          // else if(cond3) {éxécution 3}
          // {éxécution 4}

          const moves = history.map((step, move) => {
            const desc = move ? `Revenir au tour n°${move}` : "Revenir au début de la partie";
            return(
              <li key={move}>
                <button onClick={ () => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });


      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{ status }</div>
            <ol>{ moves }</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
export default Game;
