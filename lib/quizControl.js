const quizControl = {
  id: "quizControl",
  init: async (reveal) => {

reveal.on('slidechanged', event => {
    reveal.sync();
  }); } }

  function ReadClue() {
    console.log("function read clue called")

    return new Promise((resolve) => {
      const listener = (e) => {
        /* console.log("Read listener function")
        console.log(e.keyCode)
        console.log(e)
         */
        if(e.keyCode == 124){
        document.removeEventListener("keydown", listener);
        resolve();
        }        
        else if(e.keyCode == 125){
          var elem = document.getElementById("question-template");
          console.log(elem)
          elem.getElementById
          var mediaElem = elem.querySelector(`[id=media]`);
          console.log(mediaElem)
          if(mediaElem) {
            mediaElem.play();
          }
          document.removeEventListener("keydown", listener);
          startReadClue();
        }
        else{
          document.removeEventListener("keydown", listener);
          startReadClue();}
      }
      document.addEventListener("keydown",listener);
    })
  }

  function getPlayer() {
    console.log("function get player called")
    //console.log("make a guess")
    
    var elem = document.getElementById("ShowPlayerName1");
    var elem2 = document.getElementById("ShowPlayerName2");
    var elem3 = document.getElementById("ShowPlayerName3");
    return new Promise((resolve) => {
      const listener = (e) => {
        document.removeEventListener("keydown", listener);
      /*   console.log("get player listener function")
        console.log(e.key)
        console.log(e) */
        //add player name to slides
        switch (true) {
          case e.keyCode == 126:
            document.removeEventListener("keydown", listener);
            elem.innerHTML = `Player 1`;
            elem2.innerHTML = `Player 1`;
            elem3.innerHTML = `Player 1`;
            resolve();
            break;
          case e.keyCode == 127:
            document.removeEventListener("keydown", listener);

            elem.innerHTML = `Player 2`;
            elem2.innerHTML = `Player 2`;
            elem3.innerHTML = `Player 2`;
            resolve(); 
            break;
          case e.keyCode == 128:
            document.removeEventListener("keydown", listener);
            elem.innerHTML = `Player 3`;
            elem2.innerHTML = `Player 3`;
            elem3.innerHTML = `Player 3`;
            resolve(); 
            break;
          case e.keyCode == 128:
            document.removeEventListener("keydown", listener);
            elem.innerHTML = `Player 4`;
            elem2.innerHTML = `Player 4`;
            elem3.innerHTML = `Player 4`;
            resolve(); 
            break;
          case e.keyCode == 125:
            var elem4 = document.getElementById("question-template");
            var mediaElem = elem4.querySelector(`[id=media]`);
            if(mediaElem) {
              mediaElem.play();
            }
            document.removeEventListener("keydown", listener);
            startGetPlayer();
            break;
          default:
            document.removeEventListener("keydown", listener);
            startGetPlayer();
            break;
        }
      }
      document.addEventListener("keydown",listener);
    })
  }
  
  function getJudgeResponse() {
    console.log("function judge called")
    return new Promise((resolve) => {
      const listener = (e) => {
        /* console.log("judge listener function")
        console.log(e.keyCode) */
        var Judged = true;
         console.log("hi")
        switch (true) {
          case e.keyCode == 124:
            document.removeEventListener("keydown", listener);
            Reveal.slide(1,2);
            resolve();
            break;
          case e.keyCode == 125   :  
            document.removeEventListener("keydown", listener);
            Reveal.slide(1,3);
            resolve();
            break;
          default:
            document.removeEventListener("keydown", listener);
            startJudgeResponse();
        }
      }
      document.addEventListener("keydown",listener);
    })
  }
  
  async function nextGuess() {
    console.log("back to board or get player")
    return new Promise((resolve) => {
      const listener = (e) => {
        /* console.log("next guess function")
        console.log(e.keyCode) */
        switch (e.keyCode) {
          case 124:
            document.removeEventListener("keydown", listener);
            Reveal.slide(0,0);
            resolve();
            break;
          case 125:  
            document.removeEventListener("keydown", listener);
            const elem = document.getElementById("ShowPlayerName1");
            elem.innerHTML = `Take a Guess!`;
            Reveal.slide(1,1);
            startGetPlayer();
            resolve();
            break;
          default:
            document.removeEventListener("keydown", listener);
            startnextGuess();
          }
      }
      document.addEventListener("keydown",listener);
    })
  }
  
  function updateClue(t) {
    var clue = t.getAttribute("data-question-value");
    /*console.log(t.getAttribute("data-question-value"))
    console.log(t.event) */
//remove clue value and index attribute
    document.querySelector(`[data-question-value=${clue}]`).removeAttribute("tabindex")
    document.querySelector(`[data-question-value=${clue}]`).innerHTML ="";

//copy clue text to templates
    const elem = document.getElementById("ShowPlayerName1");
    elem.innerHTML = `Take a Guess!`;
    document.querySelector(`[id=question-template]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=get-player]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=response-correct]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=response-wrong]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;

//update template notes
    var navOptions1 = "<b>>:</b> get response, <b><:</b> Play media<br>";
    var navOptions2 = "<b>>:</b> Correct response, <b><:</b> Incorrect response<br>"
    var navOptions3 = "<b>>:</b> Back to Game Board, <b><:</b> Get more responses<br>"
         
    document.querySelector(`[id=temp-notes1]`).innerHTML = navOptions1 +" <b>Question:</b></br>" + document.querySelector(`[id=${clue}-notes]`).innerHTML + "</br><b>Answer:</b></br>" + document.querySelector(`[id=${clue}-Answer]`).innerHTML;
    document.querySelector(`[id=temp-notes2]`).innerHTML = navOptions2 +" <b>Question:</b></br>" + document.querySelector(`[id=${clue}-notes]`).innerHTML + "</br><b>Answer:</b></br>" + document.querySelector(`[id=${clue}-Answer]`).innerHTML;
    document.querySelector(`[id=temp-notes3]`).innerHTML = navOptions3 +" <b>Question:</b></br>" + document.querySelector(`[id=${clue}-notes]`).innerHTML + "</br><b>Answer:</b></br>" + document.querySelector(`[id=${clue}-Answer]`).innerHTML;
    document.querySelector(`[id=temp-notes4]`).innerHTML = navOptions3 +" <b>Question:</b></br>" + document.querySelector(`[id=${clue}-notes]`).innerHTML + "</br><b>Answer:</b></br>" + document.querySelector(`[id=${clue}-Answer]`).innerHTML;
    Reveal.sync();

 //start review
 clearKeyboardEvent();   
  }
    
//clear the intitial keyboard event that called the clue
  function doNothing(){
    console.log("function do nothing called")
    Reveal.slide(1,0);
    return new Promise((resolve) => {
      const listener = (e) => {
        /* console.log("do nothing listener function")
        console.log(e.keyCode)
        console.log(e) */
        document.removeEventListener("keydown", listener);
        resolve();
      }
      document.addEventListener("keydown",listener);
    })
  }
   
  async function clearKeyboardEvent(){
    console.log("starting template setup")
    await doNothing();
    Reveal.slide(1,0);
    startReadClue();
  }

  async function startReadClue(){
    console.log("starting Q&A")
    await ReadClue();
    Reveal.slide(1,1);
    startGetPlayer();
  }

  async function startGetPlayer(){
    console.log("Starting get player func")
    await getPlayer();
    startJudgeResponse();
  }

  async function startJudgeResponse(){
    console.log("start judging")
    await getJudgeResponse();
    startnextGuess();
  }

  async function startnextGuess(){
    console.log("where to go next?")
    await nextGuess();
    console.log("all done")
  }