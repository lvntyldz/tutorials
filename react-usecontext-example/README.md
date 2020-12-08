* ### context oluşturma 
    ```
    export const AppContext = React.createContext();
    ```

* ### initial state değeri
    ```
    {
        language: 'TR',
        currency: 'TRY',
        screen: 'Home',
    }
    ```

* ### ekran tipine göre ekran componentinin load edilmesi.
    ```
    const loadContent = () => {
    
        if (content.screen === "Home") {
            return <Home/>
        }
    
        return <Login/>
    }
    ```

* ### provider'a state ve setState parametrelerinin verilmesi.
    ```
    <AppContext.Provider value={{content: content, setContent: setContent}}>
    ```

* ### alt componentten state'e erişim(Hooks) 
    useContext ve AppContext import edilir.
    ```
    import {useContext} from 'react';
    import {AppContext} from "./App";
    ```
    
    useContext methodu ile Provide edilen Context'e erişilir.
    ```
    const context = useContext(AppContext);
    ```
    
    Context üzerinde değişiklik yapmak için Provider ile aşağı indirilen setContent methodu çağrılır.
    ```
    context.setContent(content);
    ```

* ### alt componentten state'e erişim(Class Component) 
    Class Componentlerden Context'e erişimler Consumer lar aracılığıyla olur.
    ```
    <AppContext.Consumer>...</AppContext.Consumer>
    ```

    Consumer'un içinde tanımlanan fonksiyon ile context verileri ele alınmış olur.
    ```
    render() {
        return (
            <AppContext.Consumer>
                {
                    (props) => {
                        return (<div>
                                language : {props.content.language} <br/>
                                currency : {props.content.currency}
                            </div>
                        )
                    }
                }
            </AppContext.Consumer>
        );
    }
    ```


* ### alt componentten dil ve ekran değişikliği 
    ```
    let content = Object.assign({}, context.content);
    content.screen = "Login";
    content.language = "TR";
    content.currency = "TRY";
    context.setContent(content);
    ```
