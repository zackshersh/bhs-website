import Block from "./components/Block";
import Nav from "./components/Nav";
import Title from "./components/Title";
import "./main.css"
import "./blocks.css"
import Services from "./components/Services";
import Staff from "./components/Staff";
import NewClient from "./components/NewClient";

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
            <Block background={"Dark"}>
                <Staff />
            </Block>
            <Block background={"Light"}>
                <NewClient />
            </Block>
        </div>
    );
}

export default App;
