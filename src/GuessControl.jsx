import React, { Component, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

// Steps for refactoring Class Components to Functional Components:
// 1. Create new empty functional component
// 2. render method -> return
// 3. props -> props
// 4. this.state -> useState() (remember to import useState)
// 5. handlerMethods -> handlerFunctions
// 6. Ensure all this's are gone and also this.state's
// 7. Ensure all setStates are replaced with individual useState setters
// 8. Comment out old class component and rename new func component with same name
// 9. Test it out and make sure it works!

function GuessControl(props) {
  const [currentGuess, setCurrentGuess] = useState("");

  function handleInputChange(event) {
    setCurrentGuess(event.target.value);
  }

  function onSubmitGuess() {
    if (props.onGuess) {
      props.onGuess(Number(currentGuess));
    }
    setCurrentGuess("");
  }

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

GuessControl.propTypes = {
  onGuess: PropTypes.func.isRequired,
};

export default GuessControl;
