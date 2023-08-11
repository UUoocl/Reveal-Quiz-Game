# Reveal-Quiz-Game
A quiz game made in [Reveal.js](https://revealjs.com/)

1. Download this repository.
   
2. Create quiz boards using a Google Sheet Template

https://docs.google.com/spreadsheets/d/1rBwQ4n86ewNdmrxexafftWoIFiuI2x9Ddgy7FHIiFfI/copy

3. Create questions and answers using the Google Form that comes with the 
"Quiz-Game-Maker" Google Sheet

5. Download the JSON code from the Google Sheet named "Download".

6. Save the .tsv file in the main project folder.

7. Open the quiz-game.html file
   
## Google Sheets notes
Before downloading a game file there is an important update to make. In the sheet named "Response", click on any URL to convert it to a "Chip". This will change the cell so that the file name will be displayed. 

## Google Drive notes
Photos, Videos and Audio submitted in the Google Form will be stored in your Google Drive.  Download these files to the "media" folder. 

## Controllers

Norwii brand wireless presentation remotes are used to play the game.  These remotes come with a customization software where each button can be set to a certain key.  

The "Host" is controller is a Norwii [N28](https://www.amazon.com/dp/B081SY17DC) or [N29](https://www.amazon.com/dp/B07HH4PFNQ).

The "Players" controllers are model [N26](https://www.amazon.com/dp/B01NC2VS6I)

|Controller      |Key      |Button| JS Code| Norwii Hex Code
|:-----|:-----|:-----|:-----|:-----|
|Host      |1      |>|49|   0x1E|
|Host      |0     |<|48|   0x27|
|Host      |Tab      |口| 9|   0x2B|
|Host      | Shift + Tab   |口| 9| 0x2B  |
|Host      |3     |+|51|   0x20|
|Host      |Left Arrow     |-|37|   0x50|
|Player1      |F13      | ∧ and ∨|124| 0x68  |
|Player2      |F14      |∧ and ∨|125|  0x69 |
|Player3      |F15      |∧ and ∨|126|  0x6A |
|Player4      |F16      |∧ and ∨|127|  0x6B |
|Player5      |F17      |∧ and ∨|128|  0x6C |
|Player6      |F18      |∧ and ∨|129|  0x6D |
|Player7      |F19      |∧ and ∨|130|  0x6E |
|Player8      |F20      |∧ and ∨|131|  0x6F |
|Player9      |F21      |∧ and ∨|132|  0x70 |
|Player10      |F22      |∧ and ∨|133|  0x71 |
|Player11      |F23      |∧ and ∨|134|  0x72 |
|Player12      |F24      |∧ and ∨|135|  0x73 |

a [Sabrent 13 port USB hub](https://www.amazon.com/dp/product/B00HL7Z46K/) can be used to connect the controllers to a PC

# Playing the Game
Use the "s" key to view the host notes. The host notes are provided to give the host instrucitons for each screen.  
