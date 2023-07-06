const quizControl = {
  id: "quizControl",
  init: async (reveal) => {

reveal.on( 'ready', event => {
    console.log("I'm Ready!")
    var GB = document.getElementById("clues");
    var ResponseSlides = document.getElementById("responseSection");
    var Scoreboard = document.getElementById("Scoreboard");
    GB.innerHTML = "<div class= \"sl-block\" style= \"width: 150px; left: 16px; top: 173px; height: auto; \" tabindex= \"0\" onclick= \"updateClue(this)\" onkeydown=\"if(event.keyCode == 49){updateClue(this)}\" data-question-value=\"c1r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 10; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 173px; height: auto; \" tabindex= \"0\" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c2r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 11; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c3r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 12; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c4r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 13; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c5r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 14; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 173px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c6r1\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 15; \"><h1>100</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c1r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 16; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c2r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 17; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c3r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 18; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c4r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 19; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c5r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 20; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 276px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c6r2\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 21; \"><h1>200</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c1r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 22; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c2r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 23; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c3r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 24; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c4r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 25; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c5r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 26; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 379px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c6r3\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 27; \"><h1>300</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c1r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 28; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c2r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 29; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c3r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 30; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c4r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 31; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c5r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 32; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 482px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c6r4\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 33; \"><h1>400</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 16px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c1r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 34; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 172px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c2r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 35; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 328px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c3r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 36; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 484px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c4r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 37; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 640px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c5r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 38; \"><h1>500</h1></div></div> <div class= \"sl-block \" style= \"width: 150px; left: 796px; top: 585px; height: auto; \" tabindex= \"0 \" onclick= \"updateClue(this) \" onkeydown= \"if(event.keyCode == 49){updateClue(this)} \" data-question-value=\"c6r5\"><div class= \"sl-block-content \" style= \"background-color: rgb(0, 0, 255); color: rgb(255, 255, 0); z-index: 39; \"><h1>500</h1></div></div> <aside class= \"notes \" id= \"board-notes \"><b>>:</b> Go to Clue <b>[]:</b> highlight clue</aside>"
    ResponseSlides.innerHTML = "<section data-transition=\"none\" data-background-transition=\"none\"> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <div class=\"sl-block-content\" style=\"z-index: 10; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"question-template\"></span></p> </div> </div> <aside class=\"notes\" id=\"temp-notes1\">template notes 📝</aside> </section> <section data-transition=\"none\" data-background-transition=\"none\" data-get-guess> <div class=\"sl-block\" data-block-type=\"shape\" data-name=\"shape-6277a1\" style=\"width: 960px; height: 700px; left: 0px; top: 0px;\"> <div class=\"sl-block-content\" data-shape-type=\"rect\" data-shape-fill-color=\"rgb(8, 19, 132)\" data-shape-stretch=\"true\" style=\"z-index: 10;\" data-shape-stroke-color=\"#000000\" data-shape-stroke-width=\"50px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" preserveaspectratio=\"none\" viewbox=\"0 0 960 700\"> <defs> <clippath id=\"shape-mask-11-1682372184408\"> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" fill=\"rgb(8, 19, 132)\" stroke=\"#000000\" stroke-width=\"100\"></rect> </clippath> </defs> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" class=\"shape-element\" fill=\"rgb(8, 19, 132)\" stroke=\"#000000\" stroke-width=\"100\" clip-path=\"url(#shape-mask-11-1682372184408)\"></rect> </svg></div> </div> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <!-- add the slide question tag here, and set the value in the quiz js --> <div class=\"sl-block-content\" style=\"z-index: 11; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"get-player\"> </span></p> </div> </div><!-- change this text block to display the players name --> <div class=\"sl-block\" style=\"height: auto; width: 863px; left: 48.5px; top: 0px;\"> <div class=\"sl-block-content\" style=\"z-index: 12;\"> <h3 id=\"ShowPlayerName1\">Take a Guess!</h3> </div> </div><!-- add a answer / notes section --> <aside class=\"notes\" id=\"temp-notes2\">template notes 📝</aside> </section> <section data-transition=\"none\" data-background-transition=\"none\"> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <div class=\"sl-block-content\" style=\"z-index: 11; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"response-correct\"> </span> <img id=\"YesReact\" style=\"height: 500px\" data-src=\"outcome/Thumb-up.gif\" alt=\"image\"></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 863px; left: 48.5px; top: 0px;\"> <div class=\"sl-block-content\" style=\"z-index: 12;\"> <h3 id=\"ShowPlayerName2\">Player</h3> </div> </div> <div class=\"sl-block\" data-block-type=\"shape\" style=\"width: 960px; height: 700px; left: 0px; top: 1px;\" data-name=\"shape-fd3b8b\"> <div class=\"sl-block-content\" data-shape-type=\"rect\" data-shape-fill-color=\"rgb(8, 19, 132)\" data-shape-stretch=\"true\" style=\"z-index: 10;\" data-shape-stroke-color=\"#00ff00\" data-shape-stroke-width=\"50px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" preserveaspectratio=\"none\" viewbox=\"0 0 960 700\"> <defs> <clippath id=\"shape-mask-12-1682372292764\"> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" fill=\"rgb(8, 19, 132)\" stroke=\"#00ff00\" stroke-width=\"100\"></rect> </clippath> </defs> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" class=\"shape-element\" fill=\"rgb(8, 19, 132)\" stroke=\"#00ff00\" stroke-width=\"100\" clip-path=\"url(#shape-mask-12-1682372292764)\"></rect> </svg></div> </div> <aside class=\"notes\" id=\"temp-notes3\">template notes 📝</aside> </section> <section data-transition=\"none\" data-background-transition=\"none\"> <div class=\"sl-block\" style=\"height: auto; width: 907px; left: 26.5px; top: 51px;\"> <div class=\"sl-block-content\" style=\"z-index: 11; color: rgb(255, 255, 255); text-align: center;\"> <p><span style=\"font-size:1.6em\" id=\"response-wrong\"> </span> <img id=\"NoReact\" style=\"height: 500px\" data-src=\"outcome/Thumb-down.gif\" alt=\"image\"></p></p> </div> </div> <div class=\"sl-block\" style=\"height: auto; width: 863px; left: 48.5px; top: 0px;\"> <div class=\"sl-block-content\" style=\"z-index: 12;\"> <h3 id=\"ShowPlayerName3\">Player</h3> </div> </div> <div class=\"sl-block\" data-block-type=\"shape\" style=\"width: 960px; height: 700px; left: 0px; top: 0px;\" data-name=\"shape-ef45b4\"> <div class=\"sl-block-content\" data-shape-type=\"rect\" data-shape-fill-color=\"rgb(8, 19, 132)\" data-shape-stretch=\"true\" style=\"z-index: 10;\" data-shape-stroke-color=\"#ff0000\" data-shape-stroke-width=\"50px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\" preserveaspectratio=\"none\" viewbox=\"0 0 960 700\"> <defs> <clippath id=\"shape-mask-5-1682357356444\"> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" fill=\"rgb(8, 19, 132)\" stroke=\"#ff0000\" stroke-width=\"100\"></rect> </clippath> </defs> <rect width=\"960\" height=\"700\" rx=\"0\" ry=\"0\" class=\"shape-element\" fill=\"rgb(8, 19, 132)\" stroke=\"#ff0000\" stroke-width=\"100\" clip-path=\"url(#shape-mask-5-1682357356444)\"></rect> </svg></div> </div> <aside class=\"notes\" id=\"temp-notes4\">template notes 📝</aside> </section> </section><section>"
    Scoreboard.innerHTML = "<div class=\"sl-block\" data-block-type=\"table\" data-name=\"table-717980\" data-block-id=\"aeccbf752358441ffba36c6a15c5251a\" style=\"height: auto; min-width: 120px; width: 800px; left: 80px; top: 46.5px;\">    <div class=\"sl-block-content\" style=\"z-index: 10;\" data-table-cols=\"2\" data-table-rows=\"13\">        <table>            <tbody>                <tr>                    <th>Players</th>                    <th>Score</th>                </tr>                <tr>                    <td>Player 1</td>                    <td id=\"Player 1-score\">0</td>                </tr>                <tr>                    <td>Player 2</td>                    <td id=\"Player 2-score\"></td>                </tr>                <tr>                    <td>Player 3</td>                    <td id=\"Player 3-score\"></td>                </tr>                <tr>                    <td>Player 4</td>                    <td id=\"Player 4-score\"></td>                </tr>                <tr>                    <td>Player 5</td>                    <td id=\"Player 5-score\"></td>                </tr>                <tr>                    <td>Player 6</td>                    <td id=\"Player 6-score\"></td>                </tr>                <tr>                    <td>Player 7</td>                    <td id=\"Player 7-score\"></td>                </tr>                <tr>                    <td>Player 8</td>                    <td id=\"Player 8-score\"></td>                </tr>                <tr>                    <td>Player 9</td>                    <td id=\"Player 9-score\"></td>                </tr>                <tr>                    <td>Player 10</td>                    <td id=\"Player 10-score\"></td>                </tr>                <tr>                    <td>Player 11</td>                    <td id=\"Player 11-score\"></td>                </tr>                <tr>                    <td>Player 12</td>                    <td id=\"Player 12-score\"></td>                </tr>            </tbody>        </table>    </div></div><div class=\"sl-block\" data-block-type=\"text\" data-name=\"text-02c7fe\" data-block-id=\"861b5d8e03c9c9635727e10a4716ca66\" style=\"height: auto; width: 600px; left: 180px; top: 5.5px;\">    <div class=\"sl-block-content\" data-placeholder-tag=\"p\" data-placeholder-text=\"Text\" style=\"z-index: 11;\" data-ms-editor=\"true\">        <p>Scores</p>    </div></div><a style=\"display=none; height: auto; min-width: 120px; width: 800px; left: 80px; top: 1200px;\"\" id=\"clueIndex\"></a>"
} );

reveal.on('slidechanged', event => {
    reveal.sync();
  }); } }

var YesReacts = ["Thumb-up.gif", "Ecstatic-Animation1 1 (Small).gif", "none-Cheer 1.gif", "none-Cheer.gif"];
var NoReacts = ["Disappointed-Animation2 1.gif", "none-Angry.gif", "Thumb-down.gif"];
var voices = [];
var msg = new SpeechSynthesisUtterance();

function ReadClue() {
    console.log("function read clue called")
    var elem = document.getElementById("question-template");
    console.log(elem)
    elem.getElementById
    var mediaElem = elem.querySelector(`[id=media]`);
    console.log(mediaElem)
    var clueText = document.querySelector(`[id=clueIndex]`).innerHTML;
    console.log(clueText)

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
                Reveal.slide(1,1);
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
                msg.text = document.querySelector(`[id=${clueText}-text]`).innerHTML;
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
                console.log("Default get p[layer")
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
        var point = Number(document.getElementById("clueIndex").innerHTML.substring(3,4))*100;
        console.log(document.getElementById("clueIndex").innerHTML.substring(3,4))
        switch (true) {
          case e.keyCode == 49:
            document.removeEventListener("keydown", listener);
            Reveal.slide(1,2);
            document.getElementById(`${player}-score`).innerHTML = score + point;
            resolve();
            break;
          case e.keyCode == 48   :  
            document.removeEventListener("keydown", listener);
            Reveal.slide(1,3);
            document.getElementById(`${player}-score`).innerHTML = score - point;
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
            resolve();
            break;
          case 48:  
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

    //remove clue value and index attribute
    document.querySelector(`[data-question-value=${clue}]`).removeAttribute("tabindex")
    document.querySelector(`[data-question-value=${clue}]`).innerHTML ="";
    document.querySelector(`[id=clueIndex]`).innerHTML = clue;
    
//copy clue text to templates
    const elem = document.getElementById("ShowPlayerName1");
    elem.innerHTML = `Take a Guess!`;
    document.querySelector(`[id=question-template]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=get-player]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=response-correct]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=response-wrong]`).innerHTML = document.querySelector(`[id=${clue}]`).innerHTML;
    document.querySelector(`[id=YesReact]`).src = "outcome/" + YesReacts[Math.floor(Math.random()*YesReacts.length)];

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