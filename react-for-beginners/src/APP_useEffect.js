import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("re");
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button onClick={onClick} text={"증가"} /> */}
    </div>
  );
}

export default App;
