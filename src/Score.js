import React from 'react';
import {Ball} from './List';
import birdsData from "./birds";
import {level,choise} from './List';

function Score() {
  console.log(birdsData[level][choise].name);
  return (
<div className="header d-flex">
<div className="top-panel d-flex">
<div className="logo"></div>
<h5>Score: <span className="score">{Ball}</span></h5>
</div>
<ul className="pagination">
<li className="page-item active"><a className="page-link" href="/#">Азия</a></li>
<li className="page-item"><a className="page-link" href="/#">Северная и Западная Европа</a></li>
<li className="page-item"><a className="page-link" href="/#">Южная и Восточная Европа</a></li>
<li className="page-item"><a className="page-link" href="/#">Северная Америка</a></li>
<li className="page-item"><a className="page-link" href="/#">Южная Америка</a></li>
<li className="page-item"><a className="page-link" href="/#">Африка</a></li>
</ul>
</div>)}

export default Score;
