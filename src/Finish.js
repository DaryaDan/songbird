import React from 'react';
import {Ball, Restart} from './List';
import win from './media/win.jpeg';
function Finish() {
  return (
    <div className="jumbotron game-over">
    <h5 className="display-3 text-center finish">Поздравляем!</h5>
    <p className="lead text-center">Вы набрали {Ball} из 30 возможных баллов!</p>
    <button className="btn btn-next btn-game-over" onClick = {Restart}>Попробовать еще раз!</button>
    </div>
  );
}

function FinishWin() {
  return (
    <div className="jumbotron game-win">
    <h5 className="display-3 text-center finish">Поздравляем!</h5>
    <p className="lead text-center">Вы набрали максимально возможное количество баллов!</p>
    <img className = 'img-win' src={win} alt='win'></img>
    <button className="btn btn-next btn-game-over" onClick = {Restart}>Попробовать еще раз!</button>
    </div>
  );
}

export {Finish , FinishWin};
