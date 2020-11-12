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

* ### alt componentten dil ve ekran değişikliği 
    ```
    let content = Object.assign({}, context.content);
    content.screen = "Login";
    content.language = "TR";
    content.currency = "TRY";
    context.setContent(content);
    ```
