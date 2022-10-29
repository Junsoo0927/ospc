import React from "react";
import Page from "./main/Page"
import Clicker from "./main/random/Clicker";

const App = () => {
    return(
        <div>
            <h1>Open Source Project Collection</h1>
            <p>Welcome to OSPC (Open Source Project Collection). This website is the collection of projects</p>
            <Page/>
            <p>You can click on this Clicker untill new project is launched!</p>
            <Clicker/>
        </div>
    );
}

export default App;