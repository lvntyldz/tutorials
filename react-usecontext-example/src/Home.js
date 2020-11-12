import React,{useContext} from 'react';
import {AppContext} from "./App";

export const Home = () =>{

    const context = useContext(AppContext);

    const navigateToLogin = () => {
        let content = Object.assign({}, context.content);
        content.screen = "Login";
        content.language = "TR";
        content.currency = "TRY";
        context.setContent(content);
    }

    return (
        <div>
            home screen...<br/>
            language : {context.content.language} <br/>
            currency : {context.content.currency}
            <hr/>
            <button onClick={navigateToLogin}>Navigate to Login</button>
        </div>
    );
}
