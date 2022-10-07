import { useState } from "react";
import "./App.css";

function App() {
  const [integers, setIntegers] = useState<string>("");
  const [sortedDifferences, setSortedDifferences] = useState<number[]>([]);

  return (
    <div className="App">
      <div className="container">
        <input
          className="text-input"
          type="text"
          placeholder="Enter your integers here"
          value={integers}
          onChange={(e) => setIntegers(e.target.value)}
        ></input>
        <button
          className="submit-btn"
          onClick={() => {
            const array: string[] = integers.replace(/\s/g, "").split(",");
            const parsed: number[] = array.map((value) => parseInt(value));
            const differences: number[] = [];

            for (let index = 0; index < array.length; index++) {
              const firstNumber = parsed[index];
              const secondNumber = parsed[index + 1];

              const difference = firstNumber - secondNumber;

              differences.push(difference);
            }

            const sorted: number[] = differences.sort((n1, n2) => n1 - n2);
            setSortedDifferences(sorted);
          }}
        >
          Submit
        </button>
        <div className="results-container">
          {sortedDifferences.length ? (
            <div className="results">
              {sortedDifferences.length > 2
                ? sortedDifferences
                    .filter((value) => !Number.isNaN(value))
                    .toString()
                : 0}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
