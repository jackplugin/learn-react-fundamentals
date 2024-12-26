import "./App.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ComponentUsingState from "./ComponentUsingState";

function App() {
  const numbers = [1, 2, 3];
  const books = [
    { id: "123", title: "JavaScript" },
    { id: "125", title: "Java" },
  ];
  const message = "Hello!";

  return (
    <div className="App">
      <FirstComponent numbers={numbers} books={books} message={message} />
      <SecondComponent numbers={numbers} books={books} message={message} />
      <ComponentUsingState />
    </div>
  );
}

export default App;
