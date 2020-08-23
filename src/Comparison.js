import birdsData from "./birds";
import soundError from './media/error.mp3';
import soundSuccess from './media/correct.mp3';
import {level,choise} from './List';

  let Reply = 0;
  sessionStorage.tick = 0;
  sessionStorage.count=5;
  sessionStorage.flag=0;
  function CheckAnswer(e) {

    let correct = birdsData[level][choise].name;
    let answer = e.target.innerText;
    let audioCorrect = document.querySelector('.audio-player div audio');
    if(answer === correct && sessionStorage.flag==='0'){
      e.target.classList.add('success');
      document.querySelector('.btn').classList.add('btn-next');
      let audio = new Audio(soundSuccess);
      audio.play();
      audioCorrect.pause();
      sessionStorage.flag = 1;
      Reply = 1;
      sessionStorage.tick =  Number(sessionStorage.tick) + Number(sessionStorage.count);
    }
    else if(answer !== correct && sessionStorage.flag==='0' && !e.target.classList.contains('error')){
      e.target.classList.add('error');
      let audio = new Audio(soundError);
      audio.play();
      Reply = 0;
      sessionStorage.count = sessionStorage.count - 1;
    }
  }
export {CheckAnswer, Reply};
