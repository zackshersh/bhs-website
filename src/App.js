import Block from "./components/Block";
import Title from "./components/Title";
import "./main.css"

function App() {
    return (
        <div className="App">
            <Block title={true} background={"Dark"}>
                <Title />
            </Block>
        </div>
    );
}

export default App;
