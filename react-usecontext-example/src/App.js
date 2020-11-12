import React, {useState} from 'react';
import {Home} from './Home';
import {Login} from './Login';

export const AppContext = React.createContext();

function App() {

    const [content, setContent] = useState({
        language: 'TR',
        currency: 'TRY',
        screen: 'Home',
    });

    const loadContent = () => {

        if (content.screen === "Home") {
            return <Home/>
        }

        return <Login/>
    }

    return (
        <AppContext.Provider value={{content: content, setContent: setContent}}>
            <div className="App">
                {loadContent()}
            </div>
        </AppContext.Provider>
    );
}

export default App;
