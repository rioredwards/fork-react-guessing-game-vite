import React, { Component, useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

// Steps for refactoring Class Components to Functional Components:
// ✅ 1. Create new empty functional component
// ✅ 2. render method -> return
// ✅ 3. props -> props
// ✅ 4. this.state -> useState() (remember to import useState)
// ✅ 5. handlerMethods -> handlerFunctions
// ✅ 6. Ensure all this's are gone and also this.state's
// ✅ 7. Ensure all setStates are replaced with individual useState setters
// ✅ 8. Comment out old class component and rename new func component with same name
// 🎉 9. Test it out and make sure it works!

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  function handleGuess(guess) {
    setLatestGuess(guess);
    setNumberOfGuesses((numberOfGuesses) => numberOfGuesses + 1);
  }

  function handleReset() {
    setNumberToGuess(getRandomNumber);
    setNumberOfGuesses(0);
    setLatestGuess(null);
  }

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;
