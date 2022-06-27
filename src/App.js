import Block from "./components/Block";
import Nav from "./components/Nav";
import Title from "./components/Title";
import "./main.css"
import "./blocks.css"
import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Block title={true} background={"Dark"}>
                <Title />
            </Block>
            <Nav></Nav>
            <Block background={"Light"}>
                <Services />
            </Block>
            <div style={{padding: "24px", height: "200vh"}}></div>
        </div>
    );
}

export default App;
