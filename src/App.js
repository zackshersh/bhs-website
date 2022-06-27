import Block from "./components/Block";
import Nav from "./components/Nav";
import Title from "./components/Title";
import "./main.css"

function App() {
    return (
        <div className="App">
            <Block title={true} background={"Dark"}>
                <Title />
            </Block>
            <Nav></Nav>
            <Block background={"Light"}>
                
            </Block>
            <div style={{padding: "24px", height: "200vh"}}></div>
        </div>
    );
}

export default App;
