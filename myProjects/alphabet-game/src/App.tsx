import React, { useState } from "react";
import  {HangmanDrawing}  from "./HangmanDrawing";
import  {HangmanWord}  from "./HangmanWord";
import  {Keyboard}  from "./Keyboard";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState( () => {
    return words[Math.floor(Math.random() * words.length)];
  })
  // console.log(wordToGuess);

  const [guessedWords, setguessedWords] = useState<string[]>([])
  
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center", 
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }} >Lose Win </div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>
    </div>
  );  
}

export default App;
