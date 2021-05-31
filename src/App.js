import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [randomNumber, setRandomNumber] = useState(randomNumber);
  const [result, setResult] = useState("");

  window.SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;

  let recognition = new window.SpeechRecognition();

  recognition.start();
  useEffect(() => {
    if (Number(text) === randomNumber) {
      setResult(
        "Congratulations, you're a litrate and you know how to read numbers "
      );
    }
    return () => setResult("");
  }, [text, randomNumber]);

  recognition.addEventListener("result", (e) => {
    console.log({ event: e });
    setText(e.results[0][0].transcript);
  });

  function randomNumberGenerator() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <div className="App">
      <h1>Text</h1>
      {result ? (
        <h2>{result}</h2>
      ) : (
        <div>
          <p>{text}</p>
          <div>Number : {randomNumber}</div>
        </div>
      )}
      <button onClick={() => setRandomNumber(randomNumberGenerator())}>
        Change Number
      </button>
    </div>
  );
}
