import React from 'react';
import {AppContext} from "./App";

export default class Home extends React.Component {
    navigateToLogin = (props) => {
        let content = Object.assign({}, props.content);
        content.screen = "Login";
        content.language = "TR";
        content.currency = "TRY";
        props.setContent(content);
    }

    render() {

        return (
            <AppContext.Consumer>
                {
                    (props) => {
                        return (<div>
                                home screen...<br/>
                                language : {props.content.language} <br/>
                                currency : {props.content.currency}
                                <hr/>
                                <button onClick={() => this.navigateToLogin(props)}>Navigate to Login</button>
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        );

    }

}
