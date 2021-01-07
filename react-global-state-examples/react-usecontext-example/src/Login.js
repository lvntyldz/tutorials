import React, {useContext} from 'react';
import {AppContext} from "./App";

export const Login = () => {
    const context = useContext(AppContext);

    const navigateToHome = () => {
        let content = Object.assign({}, context.content);
        content.screen = "Home";
        content.language = "EN";
        content.currency = "USD";
        context.setContent(content);
    }

    return (
        <div>
            Login screen... <br/>
            language : {context.content.language} <br/>
            currency : {context.content.currency}
            <hr/>
            <button onClick={navigateToHome}>Navigate to Home</button>

        </div>
    );
}
