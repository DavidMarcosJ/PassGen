import { Fragment } from "react";
import "./App.css/"
import { useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }
  const handlesubstract = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(0);
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Counter:{count}</h1>
        <hr></hr>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handlesubstract}>-</button>
      </div>
    </Fragment>
  );
};

export default App;

