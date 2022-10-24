import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { evaluate } from "mathjs";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    if (text.charAt(text.length - 1) === "." && value === ".") return;
    if (text.charAt(text.length - 1) === "+" && value === "+") return;
    if (text.charAt(text.length - 1) === "-" && value === "-") return;
    if (text.charAt(text.length - 1) === "/" && value === "/") return;
    if (text.charAt(text.length - 1) === "*" && value === "*") return;
    setText([...text, value].join(""));
  };

  const calculate = () => {
    try {
      setResult(evaluate(text));
    } catch (error) {
      setResult("ERROR");
    }
  };

  const clear = () => {
    setResult("");
    setText("");
  };

  const deleteSymbol = () => {
    if (text.length > 0) {
      setText(text.slice(0, text.length - 1));
    }
  };

  const highlightBtn = "rgb(180 106 10)";

  return (
    <div className="App">
      <div className="calculator">
        <div className="text-area">
          <p className="result">{result}</p>
          <p className="expression">{text}</p>
        </div>
        <div className="button-container">
          <Button symbol="AC" handleClick={clear} color={"rgb(200 55 55)"} />
          <Button
            symbol="&#x25c0;"
            handleClick={deleteSymbol}
            color={highlightBtn}
          />
          <Button symbol="(" handleClick={addToText} color={highlightBtn} />
          <Button symbol=")" handleClick={addToText} color={highlightBtn} />
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" handleClick={addToText} color={highlightBtn} />
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} color={highlightBtn} />
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} color={highlightBtn} />
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculate} color={"#888"} />
          <Button symbol="-" handleClick={addToText} color={highlightBtn} />
        </div>
      </div>
    </div>
  );
}

export default App;
