const quizControl = {
  id: "quizControl",
  init: async (reveal) => {

    reveal.on( 'ready', event => {
      console.log("I'm Ready!")
      Reveal.slide(3,0);
      window.addEventListener( "message", function( event ) {
        console.log(event)
      });
    });

    reveal.on('slidechanged', event => {
      console.log("slide Changed")
      reveal.sync();
    }); 
  } 
}

var YesReacts = ["Thumb-up.gif", "Ecstatic-Animation1 1 (Small).gif", "none-Cheer 1.gif", "none-Cheer.gif"];
var NoReacts = ["Disappointed-Animation2 1.gif", "none-Angry.gif", "Thumb-down.gif"];
var GameData = [];
var voices = [];
var msg = new SpeechSynthesisUtterance();
let rounds = [];

function ClueSelected(){
    Reveal.slide(1,0);
    return new Promise((resolve) => {
        const listener = (e) => {
          document.removeEventListener("keydown", listener); 
          resolve(); }
          document.addEventListener("keydown",listener);
    })
}

function ReadClue() {
    console.log("function read clue called")
    var elem = document.getElementById("question-template");
    console.log(elem)
    elem.getElementById
    var mediaElem = elem.querySelector(`[id=media]`);
    console.log(mediaElem)
    //var clueText = document.querySelector(`[id=clueIndex]`).innerHTML;
    //console.log(clueText)
    
    Reveal.slide(1,1);
    return new Promise((resolve) => {
      const listener = (e) => {
        /* console.log("Read listener function")
        console.log(e.keyCode)
        console.log(e)
         */
        document.removeEventListener("keydown", listener);
        switch (true) {
            case e.keyCode == 49:
                document.removeEventListener("keydown", listener);
                Reveal.slide(1,2);
                resolve();
                break;
            case e.keyCode == 48:
                if(mediaElem) {
                  mediaElem.play();
                }
                document.removeEventListener("keydown", listener);
                startReadClue();
                break;
            case e.keyCode == 51:
                //Read aloud
                msg.text = document.querySelector(`[id=temp-notes1-Question]`).innerHTML;
                voices = window.speechSynthesis.getVoices();
                console.log(voices)
                voices = voices.filter(function (el) {
                    return el.lang.startsWith("en")});
                    console.log(voices)
                msg.lang = "en-US";
                msg.voice = voices[Math.floor(Math.random()*voices.length)];
                console.log(msg)
                speechSynthesis.speak(msg);    
                document.removeEventListener("keydown", listener);
                startReadClue();
                break;
            default:
                console.log("Default read")
                document.removeEventListener("keydown", listener);
                startReadClue();
                break;
        }         
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
        console.log(e)
        switch (true) {
            case e.keyCode == 124:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 1`;
                elem2.innerHTML = `Player 1`;
                elem3.innerHTML = `Player 1`;
                resolve();
                break;
            case e.keyCode == 125:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 2`;
                elem2.innerHTML = `Player 2`;
                elem3.innerHTML = `Player 2`;
                resolve(); 
                break;
            case e.keyCode == 126:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 3`;
                elem2.innerHTML = `Player 3`;
                elem3.innerHTML = `Player 3`;
                resolve(); 
                break;
            case e.keyCode == 127:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 4`;
                elem2.innerHTML = `Player 4`;
                elem3.innerHTML = `Player 4`;
                resolve(); 
                break;
            case e.keyCode == 128:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 5`;
                elem2.innerHTML = `Player 5`;
                elem3.innerHTML = `Player 5`;
                resolve(); 
                break;
            case e.keyCode == 129:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 6`;
                elem2.innerHTML = `Player 6`;
                elem3.innerHTML = `Player 6`;
                resolve(); 
                break;
            case e.keyCode == 130:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 7`;
                elem2.innerHTML = `Player 7`;
                elem3.innerHTML = `Player 7`;
                resolve(); 
                break;
            case e.keyCode == 131:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 8`;
                elem2.innerHTML = `Player 8`;
                elem3.innerHTML = `Player 8`;
                resolve(); 
                break;
            case e.keyCode == 132:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 9`;
                elem2.innerHTML = `Player 9`;
                elem3.innerHTML = `Player 9`;
                resolve(); 
                break;
            case e.keyCode == 133:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 10`;
                elem2.innerHTML = `Player 10`;
                elem3.innerHTML = `Player 10`;
                resolve(); 
                break;
            case e.keyCode == 134:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 11`;
                elem2.innerHTML = `Player 11`;
                elem3.innerHTML = `Player 11`;
                resolve(); 
                break;
            case e.keyCode == 135:
                document.removeEventListener("keydown", listener);
                elem.innerHTML = `Player 12`;
                elem2.innerHTML = `Player 12`;
                elem3.innerHTML = `Player 12`;
                resolve(); 
                break;
            case e.keyCode == 50:
                document.removeEventListener("keydown", listener);
                console.log(hello)
                Reveal.slide(0,0);
                resolve();
                break;
            default:
                console.log("Default get player")
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
        /* console.log("judge listener function")*/
        var Judged = true;
        var player = document.getElementById("ShowPlayerName1").innerHTML;
        var score = Number(document.getElementById(`${player}-score`).innerHTML);
        var point = Number(clueElement.Number)*100;
        console.log(point)
        switch (true) {
          case e.keyCode == 49:
            document.removeEventListener("keydown", listener);
            Reveal.slide(1,3);
            document.getElementById(`${player}-score`).innerHTML = score + point;
            document.getElementById(`score-notes`).innerHTML = document.getElementById(`score-table`).outerHTML
            resolve();
            break;
          case e.keyCode == 48   :  
            document.removeEventListener("keydown", listener);
            Reveal.slide(1,4);
            document.getElementById(`${player}-score`).innerHTML = score - point;
            document.getElementById(`score-notes`).innerHTML = document.getElementById(`score-table`).outerHTML
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
          case 49:
            document.removeEventListener("keydown", listener);
            Reveal.slide(0,0);
            document.querySelector(`[id=clue-selected]`).innerHTML = "";
            document.querySelector(`[id=question-template]`).innerHTML = "";
            document.querySelector(`[id=ShowPlayerName1]`).innerHTML = "";
            document.querySelector(`[id=ShowPlayerName2]`).innerHTML = "";
            document.querySelector(`[id=get-player]`).innerHTML = "";
            document.querySelector(`[id=response-correct]`).innerHTML = "";
            document.querySelector(`[id=YesReact]`).src = "";
            document.querySelector(`[id=NoReact]`).src = "";
            document.querySelector(`[id=response-wrong]`).innerHTML = "";
            resolve();
            break;
          case 48:  
            document.removeEventListener("keydown", listener);
            const elem = document.getElementById("ShowPlayerName1");
            elem.innerHTML = `Take a Guess!`;
            Reveal.slide(1,2);
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
  
var clueElement;  
function updateClue(t,n) {
    var clue = t.getAttribute("data-question-value");
    clue = clue.replace("notes-","");
    console.log(t)
    //remove clue value and index attribute
    document.querySelector(`[data-question-value=notes-${clue}]`).removeAttribute("class")
    document.querySelector(`[data-question-value=notes-${clue}]`).innerHTML ="";
    
    document.querySelector(`[data-question-value=${clue}]`).removeAttribute("tabindex")
    document.querySelector(`[data-question-value=${clue}]`).innerHTML ="";

    //document.querySelector(`[id=clueIndex]`).innerHTML = clue;
    
//copy clue text to templates
    const elem = document.getElementById("ShowPlayerName1");
    elem.innerHTML = `Take a Guess!`;
    clueElement = GameData.find(({ ID }) => ID === clue);
    //document.getElementById("category1").innerHTML= clueElement.Category;
    //document.querySelector(`[id=question-template]`).innerHTML = "";
console.log(clueElement)
console.log(clueElement.Type)

    switch(clueElement.Type){
        case 'Text':
            document.querySelector(`[id=question-template]`).innerHTML = `<h2 onclick= \"window.opener.keySim(49)\" class=\"button-10\">${clueElement.Clue}</h2><aside class=\"notes\" id=\"temp-notes1\">template notes 📝</aside>`;
            break;
        case 'Image':
            document.querySelector(`[id=question-template]`).innerHTML = `<p>${clueElement.Clue}</p><img src=\"media/${clueElement.File}\" class=\"r-stretch\"></img><aside class=\"notes\" id=\"temp-notes1\">template notes 📝</aside>`;
            break;
        case 'Video':
            document.querySelector(`[id=question-template]`).innerHTML = `<p>${clueElement.Clue}</p><video id=\"media\" src=\"media/${clueElement.File}\" class=\"r-stretch\"></video><aside class=\"notes\" id=\"temp-notes1\">template notes 📝</aside>`
            break;
        case 'Audio':
            document.querySelector(`[id=question-template]`).innerHTML = `<p>${clueElement.Clue}</p><br><audio controls id=\"media\" src=\"media/${clueElement.File}\"></audio><aside class=\"notes\" id=\"temp-notes1\">template notes 📝</aside>`;
            break;
    }

    //document.querySelector(`[id=question-template]`).innerHTML = clueElement.Clue;
    document.querySelector(`[id=clue-selected]`).innerHTML = `<h2>${clueElement.Category}<br>${clueElement.Number*100}</h2><aside class="notes" id="temp-notes0"><p  onclick= \"window.opener.keySim(49); passKeypress();\" class=\"button-10\">Press any key to go to the clue</p></aside>`;
    document.querySelector(`[id=get-player]`).innerHTML = clueElement.Clue;
    document.querySelector(`[id=response-correct]`).innerHTML = clueElement.Answer;
    document.querySelector(`[id=response-wrong]`).innerHTML = clueElement.Clue; 
    document.querySelector(`[id=YesReact]`).src = "outcome/" + YesReacts[Math.floor(Math.random()*YesReacts.length)];

//update template notes
    var navOptions1 = "<b onclick= \"window.opener.keySim(49); passKeypress();\" class=\"button-10\">(1): get response,</b><br> <b onclick= \"window.opener.keySim(48)\" class=\"button-10\">(0): Play media</b><br> <b onclick= \"window.opener.keySim(51)\" class=\"button-10\">(3): read aloud</b><br>";
    var navOptions2 = "<script>console.log(\"pop up call an opener\")</script> <table style=\"width:100%\"><tr><td><b onclick= \"window.opener.keySim(124)\" class=\"button-10\"> 1 </b></td><td> <b onclick= \"window.opener.keySim(125)\" class=\"button-10\"> 2 </b></td><td><b onclick= \"window.opener.keySim(126)\" class=\"button-10\"> 3 </b></td><td> <b onclick= \"window.opener.keySim(127)\" class=\"button-10\"> 4 </b></td><td><b onclick= \"window.opener.keySim(128)\" class=\"button-10\"> 5 </b></td><td> <b onclick= \"window.opener.keySim(129)\" class=\"button-10\"> 6 </b></tr><tr><td><b onclick= \"window.opener.keySim(130)\" class=\"button-10\"> 7 </b></td><td> <b onclick= \"window.opener.keySim(131)\" class=\"button-10\"> 8 </b></td><td><b onclick= \"window.opener.keySim(132)\" class=\"button-10\"> 9 </b></td><td> <b onclick= \"window.opener.keySim(133)\" class=\"button-10\"> 10 </b></td><td><b onclick= \"window.opener.keySim(134)\" class=\"button-10\"> 11 </b></td><td> <b onclick= \"window.opener.keySim(135)\" class=\"button-10\"> 12 </b> </td></tr></table> <br><b onclick= \"window.opener.keySim(49)\" class=\"button-10\">(1): Correct response,</b><br> <b onclick= \"window.opener.keySim(48)\" class=\"button-10\">(0): Incorrect response</b><br>"
    var navOptions3 = "<b onclick= \"window.opener.keySim(49)\" class=\"button-10\">(1): Back to Game Board,</b><br> <b onclick= \"window.opener.keySim(48); passKeypress();\" class=\"button-10\">(0): Get more responses</b><br>"
         
    document.querySelector(`[id=temp-notes1]`).innerHTML = navOptions1 +" <b>Question:</b><p id=\"temp-notes1-Question\">" + clueElement.Clue + "</P><b>Answer:</b></br>" + clueElement.Answer;
    document.querySelector(`[id=temp-notes2]`).innerHTML = navOptions2 +" <b>Question:</b></br>" + clueElement.Clue + "</br><b>Answer:</b></br>" + clueElement.Answer;
    document.querySelector(`[id=temp-notes3]`).innerHTML = navOptions3 +" <b>Question:</b></br>" + clueElement.Clue + "</br><b>Answer:</b></br>" + clueElement.Answer;
    document.querySelector(`[id=temp-notes4]`).innerHTML = navOptions3 +" <b>Question:</b></br>" + clueElement.Clue + "</br><b>Answer:</b></br>" + clueElement.Answer;
    //Reveal.slide(0,0);
    
    Reveal.sync();

 //start review
  if(n == 0){console.log("on click update")
                startClueSelected()};
  if(n == 1){console.log("key press update")
                clearKeyboardEvent()};
    
}
    
//clear the intitial keyboard event that called the clue
  function doNothing(){
    console.log("function do nothing called")
    //Reveal.slide(1,0);
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
    console.log("clear clue select key press")
    await doNothing();
    Reveal.slide(1,0);
    startClueSelected();
  }

  async function startClueSelected(){
    console.log("clue selected")
    await ClueSelected();
    startReadClue();
  }
  
  async function startReadClue(){
    console.log("starting Q&A")
    await ReadClue();
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

function previewFile(round) {
    var fileString = JSON.parse(rounds[round]);
    console.log("load board",fileString)
    GameData=[];  
    var item; 
            
    //populate Array of Game Objects
    fileString.forEach(element => {
      //console.log(element)
      item = element;
      delete item.Blank;
      GameData.push(item);
    });    

    console.log(GameData);
    var slides = document.getElementById("slides");
    
    //create board when the game starts
    if(round === 0 ){
      slides.innerHTML = "<section id=\"gameboard\" data-transition=\"none\"> <!-- Game Board Category Headers --> <div id=\"gameTable\" style=\"display: block;\"> <div class=\"sl-block\" style=\"height: auto; width: 150px; left: 16px; top: 24px;\" data-name=\"text-0ae16a\" id=\"Board-Header-Columns\"> <div class=\"sl-block-content\" style=\"z-index: 40; background-color: rgb(0, 0, 255); height: 140px;\"> <p><span id=\"category1\" style=\"font-size:0.7em\"></span></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 150px; left: 172px; top: 24px;\" data-name=\"text-6cb724\"> <div class=\"sl-block-content\" style=\"z-index: 41; background-color: rgb(0, 0, 255); height: 140px;\"> <p><span id=\"category2\" style=\"font-size:0.7em\"></span></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 150px; left: 328px; top: 24px;\" data-name=\"text-392303\"> <div class=\"sl-block-content\" style=\"z-index: 42; background-color: rgb(0, 0, 255); height: 140px;\"> <p><span id=\"category3\" style=\"font-size:0.7em\"></span></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 150px; left: 484px; top: 24px;\" data-name=\"text-3f4c88\"> <div class=\"sl-block-content\" style=\"z-index: 43; background-color: rgb(0, 0, 255); height: 140px;\"> <p><span id=\"category4\" style=\"font-size:0.7em\"></span></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 150px; left: 640px; top: 24px;\" data-name=\"text-58ca24\"> <div class=\"sl-block-content\" style=\"z-index: 44; background-color: rgb(0, 0, 255); height: 140px;\"> <p><span id=\"category5\" style=\"font-size:0.7em\"></span></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 150px; left: 796px; top: 24px;\" data-name=\"text-67bf37\"> <div class=\"sl-block-content\" style=\"z-index: 45; background-color: rgb(0, 0, 255); height: 140px;\"> <p><span id=\"category6\" style=\"font-size:0.7em\"></span></p> </div> </div> <div id=\"clues\"></div></div> <aside class= \"notes \" id= \"board-notes\"><b onclick= \"window.opener.keySim()\">>(1):</b> Go to Clue <b>[](tab):</b> highlight clue <p onclick= \"callRevealApi()\">Go to 2nd slide</p></aside></section> <!-- Response Process slides --> <!-- get the slide question and answer from clue that was selected --> <section id=\"responseSection\"> </section> <section id=\"Scoreboard\"> </section> "
      var ResponseSlides = document.getElementById("responseSection");
      var Scoreboard = document.getElementById("Scoreboard"); 
      ResponseSlides.innerHTML = "<section data-transition=\"none\" data-background-transition=\"none\" id= \"clue-selected\"> </section><section data-transition=\"none\" data-background-transition=\"none\" id= \"question-template\">  </section> <section data-transition=\"none\" data-background-transition=\"none\" data-get-guess> <div class=\"sl-block\" data-block-type=\"shape\" data-name=\"shape-6277a1\" style=\"width: 960px; height: 700px; left: 0px; top: 0px;\"> <div class=\"sl-block-content\" data-shape-type=\"rect\" data-shape-fill-color=\"rgb(8, 19, 132)\" data-shape-stretch=\"true\" style=\"z-index: 10;\" data-shape-stroke-color=\"#000000\" data-shape-stroke-width=\"50px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" preserveaspectratio=\"none\" viewbox=\"0 0 960 700\"> <defs> <clippath id=\"shape-mask-11-1682372184408\"> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" fill=\"rgb(8, 19, 132)\" stroke=\"#000000\" stroke-width=\"100\"></rect> </clippath> </defs> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" class=\"shape-element\" fill=\"rgb(8, 19, 132)\" stroke=\"#000000\" stroke-width=\"100\" clip-path=\"url(#shape-mask-11-1682372184408)\"></rect> </svg></div> </div> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <!-- add the slide question tag here, and set the value in the quiz js --> <div class=\"sl-block-content\" style=\"z-index: 11; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"get-player\"> </span></p> </div> </div><!-- change this text block to display the players name --> <div class=\"sl-block\" style=\"height: auto; width: 863px; left: 48.5px; top: 0px;\"> <div class=\"sl-block-content\" style=\"z-index: 12;\"> <h3 id=\"ShowPlayerName1\">Take a Guess!</h3> </div> </div><!-- add a answer / notes section --> <aside class=\"notes\" id=\"temp-notes2\">template notes 📝</aside> </section> <section data-transition=\"none\" data-background-transition=\"none\"> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <div class=\"sl-block-content\" style=\"z-index: 11; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"response-correct\"> </span> <img id=\"YesReact\" style=\"height: 500px\" data-src=\"outcome/Thumb-up.gif\" alt=\"image\"></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 863px; left: 48.5px; top: 0px;\"> <div class=\"sl-block-content\" style=\"z-index: 12;\"> <h3 id=\"ShowPlayerName2\">Player</h3> </div> </div> <div class=\"sl-block\" data-block-type=\"shape\" style=\"width: 960px; height: 700px; left: 0px; top: 1px;\" data-name=\"shape-fd3b8b\"> <div class=\"sl-block-content\" data-shape-type=\"rect\" data-shape-fill-color=\"rgb(8, 19, 132)\" data-shape-stretch=\"true\" style=\"z-index: 10;\" data-shape-stroke-color=\"#00ff00\" data-shape-stroke-width=\"50px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" preserveaspectratio=\"none\" viewbox=\"0 0 960 700\"> <defs> <clippath id=\"shape-mask-12-1682372292764\"> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" fill=\"rgb(8, 19, 132)\" stroke=\"#00ff00\" stroke-width=\"100\"></rect> </clippath> </defs> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" class=\"shape-element\" fill=\"rgb(8, 19, 132)\" stroke=\"#00ff00\" stroke-width=\"100\" clip-path=\"url(#shape-mask-12-1682372292764)\"></rect> </svg></div> </div> <aside class=\"notes\" id=\"temp-notes3\">template notes 📝</aside> </section> <section data-transition=\"none\" data-background-transition=\"none\"> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <div class=\"sl-block-content\" style=\"z-index: 11; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"response-wrong\"> </span> <img id=\"NoReact\" style=\"height: 500px\" data-src=\"outcome/Thumb-down.gif\" alt=\"image\"></p></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 863px; left: 48.5px; top: 0px;\"> <div class=\"sl-block-content\" style=\"z-index: 12;\"> <h3 id=\"ShowPlayerName3\">Player</h3> </div> </div> <div class=\"sl-block\" data-block-type=\"shape\" style=\"width: 960px; height: 700px; left: 0px; top: 0px;\" data-name=\"shape-ef45b4\"> <div class=\"sl-block-content\" data-shape-type=\"rect\" data-shape-fill-color=\"rgb(8, 19, 132)\" data-shape-stretch=\"true\" style=\"z-index: 10;\" data-shape-stroke-color=\"#ff0000\" data-shape-stroke-width=\"50px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" preserveaspectratio=\"none\" viewbox=\"0 0 960 700\"> <defs> <clippath id=\"shape-mask-5-1682357356444\"> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" fill=\"rgb(8, 19, 132)\" stroke=\"#ff0000\" stroke-width=\"100\"></rect> </clippath> </defs> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" class=\"shape-element\" fill=\"rgb(8, 19, 132)\" stroke=\"#ff0000\" stroke-width=\"100\" clip-path=\"url(#shape-mask-5-1682357356444)\"></rect> </svg></div> </div> <aside class=\"notes\" id=\"temp-notes4\">template notes 📝</aside> </section> </section><section>";
      
      Scoreboard.innerHTML = "<div class=\"sl-block\" data-block-type=\"table\" data-name=\"table-717980\" style=\"height: auto; min-width: 120px; width: 800px; left: 80px; top: 46.5px;\">    <div class=\"sl-block-content\" style=\"z-index: 10;\" data-table-cols=\"2\" data-table-rows=\"13\">        <table id=\"score-table\">            <tbody>                <tr>                    <th>Players</th>                    <th>Score</th>                </tr>                <tr>                    <td>Player 1</td>                    <td id=\"Player 1-score\">0</td>                </tr>                <tr>                    <td>Player 2</td>                    <td id=\"Player 2-score\"></td>                </tr>                <tr>                    <td>Player 3</td>                    <td id=\"Player 3-score\"></td>                </tr>                <tr>                    <td>Player 4</td>                    <td id=\"Player 4-score\"></td>                </tr>                <tr>                    <td>Player 5</td>                    <td id=\"Player 5-score\"></td>                </tr>                <tr>                    <td>Player 6</td>                    <td id=\"Player 6-score\"></td>                </tr>                <tr>                    <td>Player 7</td>                    <td id=\"Player 7-score\"></td>                </tr>                <tr>                    <td>Player 8</td>                    <td id=\"Player 8-score\"></td>                </tr>                <tr>                    <td>Player 9</td>                    <td id=\"Player 9-score\"></td>                </tr>                <tr>                    <td>Player 10</td>                    <td id=\"Player 10-score\"></td>                </tr>                <tr>                    <td>Player 11</td>                    <td id=\"Player 11-score\"></td>                </tr>                <tr>                    <td>Player 12</td>                    <td id=\"Player 12-score\"></td>                </tr>            </tbody>        </table>    </div></div><div class=\"sl-block\" data-block-type=\"text\" style=\"height: auto; width: 600px; left: 180px; top: 5.5px;\">    <div class=\"sl-block-content\" data-placeholder-tag=\"p\" data-placeholder-text=\"Text\" style=\"z-index: 11;\" data-ms-editor=\"true\">        <p>Scores</p>    </div></div><a style=\"display=none; height: auto; min-width: 120px; width: 800px; left: 80px; top: 1200px;\"\" id=\"clueIndex\"></a><aside class=\"notes\"><p onclick= \"window.opener.Reveal.slide(0,0)\" class=\"button-10\">Game Board</p><div id=\"score-notes\"></div></aside>";
    }
    //refresh 
    var GB = document.getElementById("clues");
    GB.innerHTML = "<div class= \"sl-block\" style= \"width: 150px; left: 16px; top: 173px; height: auto; \" tabindex= \"0\" onclick= \"updateClue(this,0)\" onkeydown=\"if(event.keyCode == 49){updateClue(this,1)}\" data-question-value=\"c1r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 10; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 173px; height: auto; \" tabindex= \"0\" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c2r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 11; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c3r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 12; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c4r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 13; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c5r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 14; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c6r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 15; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c1r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 16; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c2r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 17; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c3r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 18; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c4r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 19; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c5r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 20; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c6r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 21; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c1r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 22; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c2r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 23; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c3r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 24; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c4r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 25; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c5r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 26; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c6r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 27; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c1r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 28; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c2r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 29; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c3r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 30; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c4r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 31; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c5r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 32; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c6r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 33; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c1r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 34; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c2r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 35; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c3r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 36; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c4r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 37; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c5r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 38; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this,0) \" onkeydown= \"if(event.keyCode == 49){updateClue(this,1)} \" data-question-value=\"c6r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 39; \"><h1>500</h1></div></div>";
    let boardNotes = document.getElementById("board-notes");
    boardNotes.innerHTML= `<table width=\"100%\">\n\t<tr>\n\t\t<th colspan=\"5\" id=\"notesCat1\">Name</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"5\" id=\"notesCat1Description\">description</td>\n\t</tr>\n\t<tr>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c1r1\" class=\"button-10\">100</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c1r2\" class=\"button-10\">200</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c1r3\" class=\"button-10\">300</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c1r4\" class=\"button-10\">400</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c1r5\" class=\"button-10\">500</p></td>\t\n\t</tr>\n\t\n\t<tr>\n\t\t<th colspan=\"5\" id=\"notesCat2\">Name</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"5\" style=\"text-align: center;\" id=\"notesCat2Description\">description</td>\n\t</tr>\n\t<tr>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c2r1\" class=\"button-10\">100</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c2r2\" class=\"button-10\">200</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c2r3\" class=\"button-10\">300</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c2r4\" class=\"button-10\">400</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c2r5\" class=\"button-10\">500</p></td>\t\n\t</tr>\n\t<tr></tr>\n\t<tr>\n\t\t<th colspan=\"5\" id=\"notesCat3\">Name</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"5\" style=\"text-align: center;\" id=\"notesCat3Description\">description</td>\n\t</tr>\n\t<tr>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c3r1\" class=\"button-10\">100</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c3r2\" class=\"button-10\">200</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c3r3\" class=\"button-10\">300</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c3r4\" class=\"button-10\">400</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c3r5\" class=\"button-10\">500</p></td>\t\n\t</tr>\n\t<tr></tr>\n\t<tr>\n\t\t<th colspan=\"5\" id=\"notesCat4\">Name</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"5\" style=\"text-align: center;\" id=\"notesCat4Description\">description</td>\n\t</tr>\n\t<tr>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c4r1\" class=\"button-10\">100</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c4r2\" class=\"button-10\">200</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c4r3\" class=\"button-10\">300</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c4r4\" class=\"button-10\">400</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c4r5\" class=\"button-10\">500</p></td>\t\n\t</tr>\n\t<tr></tr>\n\t<tr>\n\t\t<th colspan=\"5\" id=\"notesCat5\">Name</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"5\" style=\"text-align: center;\" id=\"notesCat5Description\">description</td>\n\t</tr>\n\t<tr>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c5r1\" class=\"button-10\">100</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c5r2\" class=\"button-10\">200</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c5r3\" class=\"button-10\">300</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c5r4\" class=\"button-10\">400</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c5r5\" class=\"button-10\">500</p></td>\t\n\t</tr>\n\t<tr></tr>\n\t<tr>\n\t\t<th colspan=\"5\" id=\"notesCat6\">Name</th>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"5\" style=\"text-align: center;\" id=\"notesCat6Description\">description</td>\n\t</tr>\n\t<tr>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c6r1\" class=\"button-10\">100</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c6r2\" class=\"button-10\">200</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c6r3\" class=\"button-10\">300</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c6r4\" class=\"button-10\">400</p></td>\n\t\t<td><p onclick= \"window.opener.updateClue(this,0)\" data-question-value=\"notes-c6r5\" class=\"button-10\">500</p></td>\t\n\t</tr>\n\t<tr height=\"10\"></tr>\n<tr></tr>\n\t<tr>\n\t\t<th colspan=\"5\" ><p onclick= \"window.opener.Reveal.slide(2,0)\"  class=\"button-10\">SCORES</p></th>\n\t</tr>`
    console.log(rounds.length, round)
    if(round + 1 < rounds.length){
      boardNotes.innerHTML= `${boardNotes.innerHTML} <tr><p style= \"height: 80px; \"></p></tr><tr>\n\t\t\n\t<th colspan=\"5\" ><p onclick= \"window.opener.previewFile(${round + 1}); Reveal.sync()\"  class=\"button-10\">Start Round ${round + 2}</p></th></tr>`
    }
    boardNotes.innerHTML= `${boardNotes.innerHTML} \n\t</table>`;
    
    var clueElement;
    clueElement = GameData.find(({ ID }) => ID === "c1r1");
    document.getElementById("category1").innerHTML= clueElement.Category;
    document.getElementById("notesCat1").innerHTML= clueElement.Category;
    document.getElementById("notesCat1Description").innerHTML= clueElement.Description;

    clueElement = GameData.find(({ ID }) => ID === "c2r1");
    document.getElementById("category2").innerHTML= clueElement.Category;
    document.getElementById("notesCat2").innerHTML= clueElement.Category;
    document.getElementById("notesCat2Description").innerHTML= clueElement.Description;

    clueElement = GameData.find(({ ID }) => ID === "c3r1");
    document.getElementById("category3").innerHTML= clueElement.Category;
    document.getElementById("notesCat3").innerHTML= clueElement.Category;
    document.getElementById("notesCat3Description").innerHTML= clueElement.Description;

    clueElement = GameData.find(({ ID }) => ID === "c4r1");
    document.getElementById("category4").innerHTML= clueElement.Category;
    document.getElementById("notesCat4").innerHTML= clueElement.Category;
    document.getElementById("notesCat4Description").innerHTML= clueElement.Description;

    clueElement = GameData.find(({ ID }) => ID === "c5r1");
    document.getElementById("category5").innerHTML= clueElement.Category;
    document.getElementById("notesCat5").innerHTML= clueElement.Category;
    document.getElementById("notesCat5Description").innerHTML= clueElement.Description;

    clueElement = GameData.find(({ ID }) => ID === "c6r1");
    document.getElementById("category6").innerHTML= clueElement.Category;
    document.getElementById("notesCat6").innerHTML= clueElement.Category;
    document.getElementById("notesCat6Description").innerHTML= clueElement.Description;

    //refresh the host window
    if(round > 0){
      Reveal.slide(1,0);
    }
    Reveal.slide(0,0);
}

function keySim(k){
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
            keyCode: k  
        })
    );   
}

window.addEventListener(`load`, async function () {
  //event wss details
  console.log("fetching sheet data: ");

  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);

  let SHEET_ID = searchParams.get("id");
  let SHEET_TITLE = searchParams.get("sheet");
  let SHEET_RANGE = searchParams.get("range");
  var data;
  let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;
  let currentData;
  await fetchData();
  
  async function fetchData() {
    fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      data = JSON.parse(rep.substr(47).slice(0, -2));
      console.log("fetched:", data)
      columnToArray(data.table.rows);
      previewFile(0);
      });
  }
})

function columnToArray(sheetColumn){
  const keysLength = Object.keys(sheetColumn).length
  console.log(sheetColumn)
  for(let i=0; i < keysLength; i++){
    rounds.push(sheetColumn[i].c[0].v); 	
  }
  console.log(rounds)
  return
}

function rowsToObject(sheetRows){
  const keysLength = Object.keys(sheetRows).length
  const obj ={};
  for(let i=0; i < keysLength; i++){
    obj[sheetRows[i].c[0].v] = sheetRows[i].c[1].v; 	
  }
  return obj;
}

  //map array of arrays to array of objects 
function arrayToObject(arr) {
  if(Array.isArray(arr)){
    const keys = arr[0].c;
    const values = arr[1].c
    const obj = {};
    for (let i = 0; i < keys.length; i++) {
      if(!(Object.is(values[i], null))){
        obj[keys[i].v] = values[i].v;
      }
    }
    return obj;
  }
}