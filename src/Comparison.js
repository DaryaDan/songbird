import birdsData from "./birds";
import soundError from './media/error.mp3';
import soundSuccess from './media/correct.mp3';
import {level,choise} from './List';

  let Otvet = 0;
  sessionStorage.schet = 0;
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
      Otvet = 1;
      sessionStorage.schet =  Number(sessionStorage.schet) + Number(sessionStorage.count);
    }
    else if(answer !== correct && sessionStorage.flag==='0' && !e.target.classList.contains('error')){
      e.target.classList.add('error');
      let audio = new Audio(soundError);
      audio.play();
      Otvet = 0;
      sessionStorage.count = sessionStorage.count - 1;
    }
  }
export {CheckAnswer, Otvet};
