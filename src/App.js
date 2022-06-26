import Block from "./components/Block";
import "./main.css"

function App() {
  return (
    <div className="App">
      <Block title={true} background={"Dark"}>
        <h1>Hi</h1>
      </Block>
    </div>
  );
}

export default App;
