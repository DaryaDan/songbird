import React, { Component } from 'react';
import birdsData from "./birds";
import {CheckAnswer, Reply} from './Comparison';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import randomInteger from './Random';
import Score from './Score';
import {Finish, FinishWin} from './Finish';
import pic from './media/question.jpg';

let Ball, level = 0, Restart;
let choise=randomInteger();
class Statet extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      sound: '',
      img: '',
      descript: '',
      species: '',
      nameTittle: '******',
      imgTittle: pic,
      soundTittle: birdsData[0][choise].audio,
      scopes: 0,
      level: 0,
      check: ''
    }

    this.handlClick = this.handlClick.bind(this);
    this.newLevel = this.newLevel.bind(this);
    this.restart = this.restart.bind(this);
}

handlClick(e){
  CheckAnswer(e);
  let nameTittle = birdsData[this.state.level][choise].name;
  let imgTittle = birdsData[this.state.level][choise].image;
  let id = e.target.dataset.id;
  let name = birdsData[this.state.level][id].name;
  let sound = birdsData[this.state.level][id].audio;
  let img = birdsData[this.state.level][id].image;
  let descript = birdsData[this.state.level][id].description;
  let species = birdsData[this.state.level][id].species;
  let scopes = sessionStorage.tick;
  let check = Reply;
  let instruction = document.querySelector('.instruction');
  let card = document.querySelector('.card-body');
  let descr = document.querySelector('.bird-description');
  instruction.style.display = "none";
  card.style.display = "flex";
  descr.style.display = "initial";
  this.setState({
    name: name,
    sound: sound,
    img: img,
    descript: descript,
    species: species,
    nameTittle: nameTittle,
    imgTittle: imgTittle,
    scopes: scopes,
    check: check
  })
}

restart(){
  document.querySelector('.row').style.display = "flex";
  document.querySelector('.random-bird').style.display = "flex";
  document.querySelector('.game-over').style.display = "none";
  document.querySelector('.game-win').style.display = "none";
  let firstElem = document.querySelectorAll('.pagination li');
  firstElem[0].classList.add('active');
  sessionStorage.tick = 0;
  this.setState({
    soundTittle: birdsData[0][choise].audio,
    scopes: 0
  })
}

newLevel(e){
  let checker=0;
  choise=randomInteger();
  document.querySelector('.right div audio').pause();
  if(this.state.level === 5 && sessionStorage.flag === "1"){
      if(this.state.scopes === '30'){
       document.querySelector('.row').style.display = "none";
       document.querySelector('.random-bird').style.display = "none";
       document.querySelector('.game-win').style.display = "block";
       checker=1;
       level = -1;
      }
      else {
     document.querySelector('.row').style.display = "none";
     document.querySelector('.random-bird').style.display = "none";
     document.querySelector('.game-over').style.display = "block";
     level = -1;
     checker=1;
   }}
  sessionStorage.flag=0;
sessionStorage.count = 5;
document.querySelector('.btn').classList.remove('btn-next');
let changeActive = document.querySelectorAll('.pagination li');
  changeActive.forEach(el => el.classList.remove('active'));
if(level<5){
  level = level + 1;
  if(checker !== 1){
  changeActive[level].classList.add('active');
}}
let instruction = document.querySelector('.instruction');
let card = document.querySelector('.card-body');
let descr = document.querySelector('.bird-description');
let check = Reply;
instruction.style.display = "block";
card.style.display = "none";
descr.style.display = "none";
let soundTittle = birdsData[level][choise].audio;
this.setState({
  level: level,
  nameTittle: '******',
  imgTittle: pic,
  soundTittle: soundTittle,
  check: check
  })
}

return(){
  return false;
}

    render(){
          let arr;

          let list = [];
          for (let i = 0; i < 6; i++){
            arr = birdsData[this.state.level][i].name;
            list.push(arr);
          }
          const listName = list.map((name, i) =>
              <li key={name.toString()} className="list-group-item" data-id = {i} onClick={this.handlClick}><span className="li-btn"></span>{name}</li>
            );
            Ball = this.state.scopes;
            Restart = this.restart;
      return(
            <div>
            <Score />
<div className="random-bird jumbotron rounded">
<img className="bird-image" src={this.state.check === 1 ? this.state.imgTittle : pic} alt="bird"></img>
<div>
<ul className="list-group list-group-flush">
<li className="list-group-item"><h3 >{this.state.check === 1 ? this.state.nameTittle : '******'}</h3></li>
<li className="list-group-item">
<div className="audio-player">
<AudioPlayer
src={this.state.soundTittle}
autoPlayAfterSrcChange={false}
onPlay={e => document.querySelector('.right div audio').pause()}
/>
</div>
</li>
</ul>
</div>
</div>
<div className="row mb2">
<div className="col-md-6">
<ul className="item-list list-group">{listName}</ul>
</div>
<div className="col-md-6">
<div className="bird-details card">
<p className="instruction" >
<span>Послушайте гимн</span>
<span>Выберите страну из списка</span>
</p>
            <div className="card-body">
            <img className="bird-image" src={this.state.img} alt={this.state.name}></img>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><h4>{this.state.name}</h4></li>
            <li className="list-group-item"><span>{this.state.species}</span></li>
            <li className="list-group-item">
            <div className="audio-player right">
            <AudioPlayer
            src={this.state.sound}
            autoPlayAfterSrcChange={false}
            onPlay={e => document.querySelector('.audio-player div audio').pause()}
            />
            </div>
            </li>
            </ul>
            </div>
            <span className="bird-description" >{this.state.descript}</span>
            </div>
            </div>
            <button className="btn" onClick={sessionStorage.flag === '1' ? this.newLevel : this.return}>Next Level</button>
            </div>
            <Finish />
            <FinishWin />
            </div>
      );
    }
  }



  export {Statet, Ball, level,choise, Restart};
