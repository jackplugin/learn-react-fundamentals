import "./App.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

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
    </div>
  );
}

export default App;
