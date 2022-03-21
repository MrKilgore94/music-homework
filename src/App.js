import "./App.css";
import List from "./class/List";
import Korn from "./Images/Korn.jpg";

function App() {
  return (
    <div className="border">
      <div>
        <h1 className="header">MUSIC HOMEWORK</h1>
        <List />
      </div>
      <div>{/* <Korn /> */}</div>
    </div>
  );
}

export default App;
